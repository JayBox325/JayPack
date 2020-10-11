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
    return gulp.src(paths.assets.svg.src)
        .pipe(changed(paths.assets.images.src))
        .pipe(svgSymbols({
            templates: [`default-svg`]
        }))

        // Save to Twig if craft project
        .pipe(gulpif(projectConfig.craft, extReplace('.twig')))

        // Save to Nunjucks if static project
        .pipe(gulpif(!projectConfig.craft, extReplace('.njk')))

        .on('error', handleErrors)
        .pipe(gulp.dest(paths.symbols.dest))
        .pipe(development(browserSync.reload({ stream: true })))
})