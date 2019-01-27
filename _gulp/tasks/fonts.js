import gulp from 'gulp'
import notify from 'gulp-notify'

// Config
import paths from '../path.config'
import handleErrors from '../utils/handleErrors'

// Move font files to build directory
gulp.task('move-fonts', () => {
    return gulp.src(paths.assets.fonts.src)
        .pipe(gulp.dest(paths.assets.fonts.dest))
        .on('error', handleErrors)
        .pipe(notify({
            title: "👍 JayPack - success",
            message: "Fonts moved",
            onLast: true
        }))
})