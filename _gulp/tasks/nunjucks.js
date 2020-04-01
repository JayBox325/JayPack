import gulp from 'gulp'
import notify from 'gulp-notify'
import browserSync from 'browser-sync'
import fs from 'fs'
import gulpif from 'gulp-if'

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
    fs.access('./_src/html/_layout/_base.njk', fs.R_OK, function(err) {
        if (err) {
            return gulp.src('_gulp/html/**', {base: './_gulp'})
                .pipe(gulp.dest('_src'))
        }
    })
    done()
})