import gulp from 'gulp'
import environments from 'gulp-environments'
import notify from 'gulp-notify'

// Config
import paths from '../path.config'
import config from '../config'
import handleErrors from '../utils/handleErrors'
import clean from 'gulp-clean'

gulp.task('clean', (cb) => {
    return gulp.src('./build/assets/**/*', {read: false})
        .pipe(clean())
    cb()
})