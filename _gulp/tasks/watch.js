import gulp from 'gulp'
import watch from 'gulp-watch'
import gulpif from 'gulp-if'

// Config
import paths from '../path.config'
import config from '../config'

gulp.task('watch', () => {
	gulp.watch(paths.sass.watch, gulp.series('styles'))
	gulp.watch(paths.assets.images.watch, gulp.series('images'))
	gulp.watch(paths.assets.svg.watch, gulp.series('svg'))
	gulp.watch(paths.js.watch, gulp.series('scripts'))

	if (config.project == 'static') {
		gulp.watch(paths.njks.watch, gulp.series('nunjucks-watch'))
	}

})