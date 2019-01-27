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
    return gulp.src(paths.images.src)
        .pipe(changed(paths.images.src))
        .pipe(imagemin())
        .on('error', handleErrors)
        .pipe(gulp.dest(paths.images.dest))
        .on('error', handleErrors)
        .pipe(notify({
            title: "👍 JayPack - success",
            message: "Images successfully minified and moved",
            onLast: true
        }))
})

// Move videos
gulp.task('move-videos', function() {
    return gulp.src(paths.images.videos)
        .pipe(gulp.dest(paths.images.dest))
        .on('error', handleErrors)
        .pipe(notify({
            title: "👍 JayPack - success",
            message: "Videos successfully moved",
            onLast: true
        }))
})

// Move favicons
gulp.task('move-favicons', function() {
    return gulp.src(paths.favicons.src)
        .pipe(gulp.dest(paths.favicons.dest))
        .on('error', handleErrors)
        .pipe(notify({
            title: "👍 JayPack - success",
            message: "Favicons successfully moved",
            onLast: true
        }))
})