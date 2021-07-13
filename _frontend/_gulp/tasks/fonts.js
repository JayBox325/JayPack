import gulp from 'gulp'

// Config
import paths from '../_config/paths'
import handleErrors from '../utils/handleErrors'

// Move font files to build directory
gulp.task('move-fonts', () => {
    return gulp.src(paths.assets.fonts.src)
        .pipe(gulp.dest(paths.assets.fonts.dest))
        .on('error', handleErrors)
})