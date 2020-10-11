import gulp from 'gulp'
import browserSync from 'browser-sync'
import fs from 'fs'

// Config
import paths from '../path.config'
import handleErrors from '../utils/handleErrors'

// Nunjucks packages
import nunjucksRender from 'gulp-nunjucks-render'

// Compile source nunjucks into built html files
gulp.task('nunjucks', (done) => {
    fs.access(paths.njks.access, fs.R_OK, function() {
        return gulp.src(paths.njks.src)
            .on('error', handleErrors)
            .pipe(nunjucksRender({
                path: [paths.njks.render],
                data: JSON.parse(fs.readFileSync('_src/html/__data/data.json'))
            }))
            .on('error', handleErrors)
            .pipe(gulp.dest(paths.njks.dest))
            .pipe(browserSync.reload({ stream: true }))
    })
    done()
})

// Move font files to build directory if it's not already there
gulp.task('nunjucks-move', (done) => {
    fs.access(paths.njks.access, fs.R_OK, function(err) {
        if (err) {
            return gulp.src(paths.njks.storage, {base: './_gulp'})
                .pipe(gulp.dest(paths.njks.moveDest))
        }
    })
    done()
})