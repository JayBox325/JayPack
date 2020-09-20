import gulp from 'gulp'
import browserSync from 'browser-sync'

// Config
import paths from '../path.config'
import config from '../config'
import handleErrors from '../utils/handleErrors'

// Environment config
const development = config.env.development
const production = config.env.production

// Styles packages
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import postcss from 'gulp-postcss'
import glob from 'gulp-sass-glob'
import cssnano from 'cssnano'

gulp.task('styles', () => {
    return gulp.src(paths.sass.src)
        .pipe(development(sourcemaps.init()))
        .pipe(glob())
        .pipe(sass())
        .on('error', handleErrors)
        .pipe(postcss([
            tailwindcss('./_gulp/tailwind.config.js'),
            autoprefixer({overrideBrowserslist: config.autoprefixerVersions})
        ]))

        // Minify in production
        .pipe(production(postcss([cssnano])))

        // Sourcemaps for development
        .pipe(development(sourcemaps.write({includeContent: false})))
        .pipe(development(sourcemaps.init({loadMaps: true})))
        .pipe(development(sourcemaps.write('./')))

        .pipe(gulp.dest(paths.sass.dest))
        .on('error', handleErrors)
        .pipe(development(browserSync.reload({ stream: true })))
})