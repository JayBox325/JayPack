import gulp from 'gulp'
import browserSync from 'browser-sync'

// Config
import paths from '../path.config'
import handleErrors from '../utils/handleErrors'

// Nunjucks packages
import nunjucksRender from 'gulp-nunjucks-render'
import clean from 'gulp-clean'
import fs from 'fs'

// Compile source nunjucks into built html files
gulp.task('nunjucks', (done) => {
    console.log('COMPILE NUNJUCKS');
    if (fs.existsSync(paths.njks.access)) {
        console.log('FILE EXISTS');
        return gulp.src(paths.njks.src)
            .on('error', handleErrors)
            .pipe(nunjucksRender({
                path: [paths.njks.render],
                data: JSON.parse(fs.readFileSync(paths.njks.data))
            }))
            .on('error', handleErrors)
            .pipe(gulp.dest(paths.njks.dest))
            .pipe(browserSync.reload({ stream: true }))
    }
    done()
})

// Move font files to build directory if it's not already there
gulp.task('nunjucks-move', (done) => {
    if (!fs.existsSync(paths.njks.access)) {
        gulp.src(paths.njks.storage, {base: './_gulp'})
            .pipe(gulp.dest(paths.njks.moveDest))
    }
    done()
})

// Delete the html dir now it's moved to src
gulp.task('nunjucks-clean', () => {
    gulp.src(paths.njks.storage)
        .pipe(clean())
})