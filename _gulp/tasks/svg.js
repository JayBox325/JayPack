import gulp from 'gulp'
import browserSync from 'browser-sync'

// Config
import paths from '../path.config'
import config from '../config'
import handleErrors from '../utils/handleErrors'

// Environment config
const development = config.env.development

// SVG packages
import svgmin from 'gulp-svgmin';

gulp.task('svg', () => {
    return gulp.src(paths.assets.svg.src)
        .pipe(svgmin({
            plugins: [{
                cleanupAttrs: true
            }, {
                cleanupEnableBackground: true
            }, {
                cleanupIDs: true
            }, {
                cleanupNumericValues: true
            }, {
                collapseGroups: true
            }, {
                convertColors: true
            }, {
                convertPathData: true
            }, {
                convertShapeToPath: true
            }, {
                convertStyleToAttrs: true
            }, {
                convertTransform: true
            }, {
                mergePaths: true
            }, {
                moveElemsAttrsToGroup: true
            }, {
                moveGroupAttrsToElems: true
            }, {
                removeComments: true
            }, {
                removeDesc: true
            }, {
                removeDoctype: true
            }, {
                removeEditorsNSData: true
            }, {
                removeEmptyAttrs: true
            }, {
                removeEmptyContainers: true
            }, {
                removeEmptyText: true
            }, {
                removeHiddenElems: true
            }, {
                removeMetadata: true
            }, {
                removeNonInheritableGroupAttrs: true
            }, {
                removeTitle: true
            }, {
                removeUnknownsAndDefaults: true
            }, {
                removeUselessDefs: true
            }, {
                removeUnusedNS: true
            }, {
                removeUselessStrokeAndFill: true
            }, {
                removeXMLProcInst: true
            }]
        }))
        .pipe(gulp.dest(paths.assets.svg.dest))
        .on('error', handleErrors)
        .pipe(development(browserSync.reload({ stream: true })))
})