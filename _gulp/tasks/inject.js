import gulp from 'gulp'

// Config
import paths from '../path.config'
import config from '../config'

// Environment config
const development = config.env.development
const production = config.env.production


// Inject packages
import inject from 'gulp-inject'

gulp.task('inject-assets', () => {
    const target = gulp.src('./_src/html/_layout/_base.njk')

    const sources = gulp.src([
        './build/assets/styles/*.css',
        './build/assets/scripts/*.js'
    ], {read: false})
    
    return target
        .pipe(inject(sources,{ignorePath: 'build'}))
        .pipe(gulp.dest('./_src/html/_layout/'))
})