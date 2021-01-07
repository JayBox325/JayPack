import gulp from 'gulp'
import browserSync from 'browser-sync'
import notify from 'gulp-notify'

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
import uglify from 'gulp-uglify'

// Compile scripts with Webpack
gulp.task('scripts', (cb) => {
    gulp.src(paths.js.app)
        .pipe(webpackStream(webpackConfig), webpack)
        .on('error', handleErrors)

        .pipe(gulp.dest(paths.js.dest))
        .on('error', handleErrors)
        
        .pipe(development(browserSync.reload({ stream: true })))
        .on('end', function() {
            notify({
                title: '👍 Scripts compiled',
                message: 'JayPack Reloaded'
            }).write('')
        })
    cb()
})