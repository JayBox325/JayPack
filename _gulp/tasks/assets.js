import gulp from 'gulp'
import notify from 'gulp-notify'

// Config
import paths from '../path.config'
import config from '../config'
import handleErrors from '../utils/handleErrors'

// Environment config
const development = config.env.development
const production = config.env.production

// Image packages
import imagemin from 'gulp-imagemin'
import changed from 'gulp-changed'

// minify and move images
gulp.task('images', () => {
    return gulp.src(paths.assets.images.src)
        .pipe(changed(paths.assets.images.src))
        .pipe(imagemin())
        .on('error', handleErrors)
        .pipe(gulp.dest(paths.assets.images.dest))
        .on('error', handleErrors)
        .pipe(notify({
            title: "👍 JayPack - success",
            message: "Images minified",
            onLast: true
        }))
})

// Move videos
gulp.task('move-videos', () => {
    return gulp.src(paths.assets.videos.src)
        .pipe(gulp.dest(paths.assets.videos.dest))
        .on('error', handleErrors)
        .pipe(notify({
            title: "👍 JayPack - success",
            message: "Videos moved",
            onLast: true
        }))
})

// Move favicons
gulp.task('move-favicons', () => {
    return gulp.src(paths.assets.favicons.src)
        .pipe(gulp.dest(paths.assets.favicons.dest))
        .on('error', handleErrors)
        .pipe(notify({
            title: "👍 JayPack - success",
            message: "Favicons moved",
            onLast: true
        }))
})