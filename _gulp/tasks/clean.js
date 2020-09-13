import gulp from 'gulp'
import clean from 'gulp-clean'

import config from '../config'

const production = config.env.production
 
gulp.task('clean', function () {
    return gulp.src('build/**/*.map', {read: false})
        .pipe(production(clean()))
});