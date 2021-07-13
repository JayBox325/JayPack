import gulp from 'gulp'
import browserSync from 'browser-sync'

// Config
import paths from '../_config/paths'
import config from '../_config/_index.js'
import handleErrors from '../utils/handleErrors'

// Environment config
const development = config.env.development

// Symbols packages
import svgSymbols from 'gulp-svg-symbols'
import extReplace from 'gulp-ext-replace'
import changed from 'gulp-changed'

gulp.task('symbols', () => {
    return gulp.src(paths.symbols.src)
        .pipe(changed(paths.symbols.src))
        .pipe(svgSymbols({
            templates: [`default-svg`]
        }))

        // Save to Twig if CMS project
        .pipe(extReplace(paths.templateExt))

        .on('error', handleErrors)
        .pipe(gulp.dest(paths.symbols.dest))
        .pipe(development(browserSync.reload({ stream: true })))
})