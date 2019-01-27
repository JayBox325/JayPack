import gulp from 'gulp'
import notify from 'gulp-notify'

// Config
import paths from '../path.config'

// Move font files to build directory
gulp.task('move-fonts', function() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
        .on('error', handleErrors)
        .pipe(notify({
            title: "👍 JayPack - success",
            message: "Fonts moved",
            onLast: true
        }))
})