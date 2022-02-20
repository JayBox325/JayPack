import gulp from 'gulp'
import browserSync from 'browser-sync'
import notify from 'gulp-notify'

// Config
import paths from '../_config/paths'
import config from '../_config/_index.js'
import handleErrors from '../utils/handleErrors'

// Environment config
const development = config.env.development
const production = config.env.production

// Styles packages
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import postcss from 'gulp-postcss'
import glob from 'gulp-sass-glob'
import cssnano from 'cssnano'

const sass = gulpSass(dartSass);

gulp.task('styles', () => {
    return gulp.src(paths.sass.src)
        // Process Scss
        .pipe(development(sourcemaps.init()))
        .pipe(glob())
        .on('error', handleErrors)
        .pipe(sass({
            includePaths: ['node_modules']
        }))
        .on('error', handleErrors)

        .pipe(postcss([
            tailwindcss('./tailwind.config.js')
        ]))

        .on('error', handleErrors)
        .pipe(postcss([
            autoprefixer({overrideBrowserslist: config.autoprefixerVersions}),
        ]))

        // Minify in production
        .pipe(production(postcss([cssnano])))

        // Sourcemaps for development
        .pipe(development(sourcemaps.write({includeContent: false})))
        .pipe(development(sourcemaps.init({loadMaps: true})))
        .pipe(development(sourcemaps.write('./')))

        // Save out
        .pipe(gulp.dest(paths.sass.dest))
        .on('error', handleErrors)

        // Reload browser
        .pipe(development(browserSync.reload({stream: true})))

        // Notify
        .on('end', function() {
            notify({
                title: '👍 Styles compiled',
                message: 'JayPack Reloaded'
            }).write('')
        })
})