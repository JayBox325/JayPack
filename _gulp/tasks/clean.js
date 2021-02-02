import gulp from 'gulp'

// Config
import config from '../config'

// Assets packages
import del from 'del'
 
// Remove sourcemaps on package
gulp.task('clean', function () {
    return del([config.distRoot])
})