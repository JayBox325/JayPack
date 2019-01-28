import gulp from 'gulp'
import notify from 'gulp-notify'
import browserSync from 'browser-sync'

// Config
import paths from '../path.config'
import config from '../config'
import handleErrors from '../utils/handleErrors'

// Environment config
const development = config.env.development
const production = config.env.production


// Move font files to build directory
gulp.task('move-fonts', () => {
    return gulp.src(paths.assets.fonts.src)
        .pipe(gulp.dest(paths.assets.fonts.dest))
        .on('error', handleErrors)
        // .pipe(notify({
        //     title: "👍 JayPack - success",
        //     message: "Fonts moved",
        //     onLast: true
        // }))
        .pipe(development(browserSync.reload({ stream: true })))
})