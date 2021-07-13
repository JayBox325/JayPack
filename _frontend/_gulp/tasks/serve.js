import gulp from 'gulp'

// Config
import config from '../_config/_index.js'

// Server packages
import browsersync from 'browser-sync'

// Serve Browsersync
gulp.task('serve', function() {
    browsersync.init(config.browserSync)
})
