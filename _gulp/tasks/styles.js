import gulp from 'gulp'

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
import notify from 'gulp-notify'
import postcss from 'gulp-postcss'
import range from 'postcss-input-range'
import gulpif from 'gulp-if'


gulp.task('styles', () => {
    return gulp.src(paths.sass.src)
        .pipe(development(sourcemaps.init()))
        .pipe(sass())
        .on('error', handleErrors)
        .pipe(postcss([
            autoprefixer({browsers: config.autoprefixerVersions}),
            range()
        ]))

        // Sourcemaps
        .pipe(development(sourcemaps.write({includeContent: false})))
        .pipe(development(sourcemaps.init({loadMaps: true})))
        .pipe(development(sourcemaps.write('./')))

        .pipe(gulp.dest(paths.sass.dest))
        .on('error', handleErrors)
        .pipe(notify("Sass compiled"))
})