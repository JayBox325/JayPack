import gulp from 'gulp'

// Config
import config from '../config'

// Assets packages
import clean from 'gulp-clean'

const production = config.env.production
 
gulp.task('clean', function () {
    return gulp.src('build/**/*.map', {read: false})
        .pipe(production(clean()))
});