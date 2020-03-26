import gulp from 'gulp'
import browserSync from 'browser-sync'

// Config
import paths from '../path.config'
import config from '../config'
import handleErrors from '../utils/handleErrors'

// Environment config
const development = config.env.development
const production = config.env.production

// Symbols packages
import svgSymbols from 'gulp-svg-symbols'
import extReplace from 'gulp-ext-replace'
import changed from 'gulp-changed'

gulp.task('symbols', () => {
    return gulp.src(paths.assets.svg.src)
    .pipe(changed(paths.assets.images.src))
    .pipe(svgSymbols({
        templates: [`default-svg`]
    }))
    .pipe(extReplace('.njk'))
    .on('error', handleErrors)
    .pipe(gulp.dest(paths.symbols.dest))
    .pipe(development(browserSync.reload({ stream: true })))
})