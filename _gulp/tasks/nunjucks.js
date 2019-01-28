import gulp from 'gulp'
import notify from 'gulp-notify'
import browserSync from 'browser-sync'

// Config
import paths from '../path.config'
import config from '../config'
import handleErrors from '../utils/handleErrors'

// Environment config
const development = config.env.development
const production = config.env.production

// Nunjucks packages
import versionNumber from 'gulp-version-number'
import data from 'gulp-data'
import htmlmin from 'gulp-htmlmin'
import htmlbeautify from 'gulp-html-beautify'
import fs from 'fs'
import nunjucksRender from 'gulp-nunjucks-render'

// Nunjucks task
gulp.task('nunjucks', () => {
    return gulp.src(paths.njks.src)
        .pipe(data(function() {
            return JSON.parse(fs.readFileSync(paths.njks.data));
        }))
        .on('error', handleErrors)
        .pipe(nunjucksRender({
            path: paths.njks.render,
            ext: '.html'
        }))
        .on('error', handleErrors)
        .pipe(versionNumber(config.version))
        .pipe(production(htmlmin({collapseWhitespace: true})))
        .pipe(development(htmlbeautify()))
        .pipe(gulp.dest(paths.njks.dest))
        // .pipe(notify({
        //     title: "👍 JayPack - success",
        //     message: "Nunjucks generated",
        //     onLast: true
        // }))
        .pipe(development(browserSync.reload({ stream: true })))
})


// Nunjucks watch task
gulp.task('nunjucks-watch', gulp.series('nunjucks', (done) => {
    done()
}))