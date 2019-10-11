import gulp from 'gulp'
import browserSync from 'browser-sync'

// Config
import paths from '../path.config'
import handleErrors from '../utils/handleErrors'

// Move font files to build directory
gulp.task('twig', () => {
    return gulp.src(paths.twig.watch)
        .on('error', handleErrors)
        .pipe(development(browserSync.reload({ stream: true })))
})