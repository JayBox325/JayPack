import gulp from 'gulp'
import rev from 'gulp-rev'
import paths from '../path.config'

gulp.task('version', (cb) => {
    gulp.src([paths.rev.styles, paths.rev.scripts], {base: '_src'})
        .pipe(rev())
        .pipe(gulp.dest(`build`))
        .pipe(rev.manifest('manifest.json'))
        .pipe(gulp.dest('_src'))
    cb()
});