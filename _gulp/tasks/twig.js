import gulp from 'gulp'
import browserSync from 'browser-sync'
import notify from 'gulp-notify'

// Config
import paths from '../path.config'
import handleErrors from '../utils/handleErrors'

// Refresh if Twig files updated
gulp.task('twig', () => {
    return gulp.src(paths.twig.watch)
        .on('error', handleErrors)
        .pipe(browserSync.reload({ stream: true }))
        .on('end', function() {
            notify({
                title: '✅ Twig compiled',
                message: 'JayPack Reloaded'
            }).write('')
        })
})