import gulp from 'gulp'

// Config
import config from '../config'

// Assets packages
import clean from 'gulp-clean'
 
// Remove sourcemaps on package
gulp.task('clean', function () {
    return del([config.distRoot])
})