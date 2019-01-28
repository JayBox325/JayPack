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

gulp.task('scripts', (cb) => {
    gulp.src(paths.js.app)
        .pipe(webpackStream(webpackConfig), webpack)
        .on('error', handleErrors)
        .pipe(gulp.dest(paths.js.dest))
        .on('error', handleErrors)
        // .pipe(notify({
        //     title: "👍 JayPack - success",
        //     message: "Javascript bundled",
        //     onLast: true
        // }))
        .pipe(development(browserSync.reload({ stream: true })));
    cb()
})