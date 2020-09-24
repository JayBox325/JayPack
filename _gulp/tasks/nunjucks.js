import gulp from 'gulp'
import browserSync from 'browser-sync'
import fs from 'fs'

// Config
import paths from '../path.config'
import handleErrors from '../utils/handleErrors'

import nunjucksRender from 'gulp-nunjucks-render'


// Move font files to build directory
gulp.task('nunjucks', () => {
    return gulp.src(paths.njks.src)
        .pipe(nunjucksRender({
            path: [paths.njks.render]
        }))
        .on('error', handleErrors)
        .pipe(gulp.dest(paths.njks.dest))
        .pipe(browserSync.reload({ stream: true }))
})

gulp.task('nunjucks-move', (done) => {
    fs.access(paths.njks.access, fs.R_OK, function(err) {
        if (err) {
            return gulp.src(paths.njks.storage, {base: './_gulp'})
                .pipe(gulp.dest(paths.njks.moveDest))
        }
    })
    done()
})