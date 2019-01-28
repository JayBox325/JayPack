import gulp from 'gulp'
import notify from 'gulp-notify'

// Config
import config from '../config'
import paths from '../path.config'
import handleErrors from '../utils/handleErrors'

// Server packages
// import gulpif from 'gulp-if'
import browsersync from 'browser-sync'

// Serve Browsersync
gulp.task('serve', function() {
    if (config.project == 'static') {
        browsersync.init(config.browserSync.static)
    } else {
        browsersync.init(config.browserSync.craft)
    }
})
