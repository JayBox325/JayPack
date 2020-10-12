import gulp from 'gulp'
import browserSync from 'browser-sync'

// Config
import paths from '../path.config'
import config from '../config'
import webpackConfig from '../webpack.config'
import handleErrors from '../utils/handleErrors'
import projectConfig from '../../project.config'

// Environment config
const development = config.env.development
const production = config.env.production

// Scripts packages
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import uglify from 'gulp-uglify'

// Compile scripts with Webpack
gulp.task('scripts', (cb) => {
    gulp.src(paths.js.app)
        .pipe(webpackStream(webpackConfig), webpack)
        .on('error', handleErrors)

        // Minify for production
        .pipe(production(uglify()))

        .pipe(gulp.dest(paths.js.dest))
        .on('error', handleErrors)
        
        .pipe(development(browserSync.reload({ stream: true })));
    cb()
})