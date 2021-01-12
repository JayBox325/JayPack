import gulp from 'gulp'
import browserSync from 'browser-sync'
import notify from 'gulp-notify'

// Config
import paths from '../path.config'
import config from '../config'
import handleErrors from '../utils/handleErrors'

// Environment config
const development = config.env.development

// Assets packages
import imagemin from 'gulp-imagemin'
import changed from 'gulp-changed'
import fs from 'fs'

// Minify and move images
gulp.task('images', (done) => {
    if (fs.existsSync(paths.assets.images.src)) {
        return gulp.src(paths.assets.images.src)
            .pipe(changed(paths.assets.images.src))
            .pipe(imagemin())
            .on('error', handleErrors)
            .pipe(gulp.dest(paths.assets.images.dest))
            .on('error', handleErrors)
            .pipe(development(browserSync.reload({ stream: true })))
            .on('end', function() {
                notify({
                    title: '👍 Images compiled & moved',
                    message: 'JayPack Reloaded'
                }).write('')
            })
    }
    done()
})

// Move videos
gulp.task('move-videos', (done) => {
    if (fs.existsSync(paths.assets.videos.src)) {
        return gulp.src(paths.assets.videos.src)
            .pipe(changed(paths.assets.videos.src))
            .pipe(gulp.dest(paths.assets.videos.dest))
            .on('error', handleErrors)
            .pipe(development(browserSync.reload({ stream: true })))
    }
    done()
})

// Move favicons
gulp.task('move-favicons', (done) => {
    if (fs.existsSync(paths.assets.favicons.src)) {
        return gulp.src(paths.assets.favicons.src)
            .pipe(changed(paths.assets.favicons.src))
            .pipe(gulp.dest(paths.assets.favicons.dest))
            .on('error', handleErrors)
            .pipe(development(browserSync.reload({ stream: true })))
    }
    done()
})