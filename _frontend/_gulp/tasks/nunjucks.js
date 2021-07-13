import gulp from 'gulp'
import browserSync from 'browser-sync'
import notify from 'gulp-notify'

// Config
import paths from '../_config/paths'
import handleErrors from '../utils/handleErrors'

// Nunjucks packages
import nunjucksRender from 'gulp-nunjucks-render'

// Compile source nunjucks into built html files
gulp.task('nunjucks', () => {
    return gulp.src(paths.njks.src)
        .on('error', handleErrors)
        .pipe(nunjucksRender({
            path: [paths.njks.render],
            data: JSON.parse(paths.njks.data)
        }))
        .on('error', handleErrors)
        .pipe(gulp.dest(paths.njks.dest))
        .pipe(browserSync.reload({ stream: true }))
        .on('end', function() {
            notify({
                title: '👍 Nunjucks compiled',
                message: 'JayPack Reloaded'
            }).write('')
        })
})

// Move font files to build directory if it's not already there
gulp.task('nunjucks-move', (done) => {
    gulp.src(paths.njks.storage, {base: './_gulp'})
        .pipe(gulp.dest(paths.njks.moveDest))
})