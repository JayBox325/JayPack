import gulp from 'gulp'
import notify from 'gulp-notify'
import browserSync from 'browser-sync'

// Config
import paths from '../path.config'
import config from '../config'
import webpackConfig from '../webpack.config'
import handleErrors from '../utils/handleErrors'

// Environment config
const development = config.env.development
const production = config.env.production

// Scripts packages
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import sourcemaps from 'gulp-sourcemaps'

gulp.task('scripts', (cb) => {
    gulp.src(paths.js.app)
        .pipe(development(sourcemaps.init({loadMaps: true})))
        .pipe(webpackStream(webpackConfig), webpack)
        .on('error', handleErrors)

        // Sourcemaps for development
        .pipe(development(sourcemaps.write('./')))

        .pipe(gulp.dest(paths.js.dest))
        .on('error', handleErrors)
        
        .pipe(development(browserSync.reload({ stream: true })));
    cb()
})

gulp.task('move-scripts', () => {
    return gulp.src(paths.js.vendor)
        .pipe(gulp.dest(paths.js.dest))
        .on('error', handleErrors)
})