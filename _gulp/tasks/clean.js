import gulp from 'gulp'

// Config
import paths from '../path.config'
import config from '../config'

// Clean packages
import clean from 'gulp-clean'

// Removing HTML generated by Nunjucks if in Craft mode
gulp.task('clean-html', (cb) => {
    if (config.project == 'craft') {
        return gulp.src(paths.clean, {read: false})
            .pipe(clean())
    } else {
        cb()
    }
})