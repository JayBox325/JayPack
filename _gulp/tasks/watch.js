import gulp from 'gulp'
import watch from 'gulp-watch'

// Config
import paths from '../path.config'

gulp.task('watch', () => {
	gulp.watch(paths.sass.watch, gulp.series('styles'))
	gulp.watch(paths.assets.images.watch, gulp.series('images'))
	gulp.watch(paths.assets.svg.watch, gulp.series('svg'))
	// gulp.watch(paths.js.watch, gulp.series('scripts-watch'))
	// gulp.watch(paths.njks.watch, gulp.series('nunjucks-watch'))
})