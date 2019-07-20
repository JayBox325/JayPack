import gulp from 'gulp'

// Config
import config from '../config'

// Server packages
// import gulpif from 'gulp-if'
import browsersync from 'browser-sync'

// Serve Browsersync
gulp.task('serve', function() {
    browsersync.init(config.browserSync)
})
