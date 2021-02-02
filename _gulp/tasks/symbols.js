import gulp from 'gulp'
import browserSync from 'browser-sync'

// Config
import paths from '../path.config'
import config from '../config'
import handleErrors from '../utils/handleErrors'
import projectConfig from '../../project.config'

// Environment config
const development = config.env.development

// Symbols packages
import svgSymbols from 'gulp-svg-symbols'
import extReplace from 'gulp-ext-replace'
import gulpif from 'gulp-if'
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