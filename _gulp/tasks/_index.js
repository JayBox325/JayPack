import gulp from 'gulp'
import requireDir from 'require-dir'
import notify from 'gulp-notify'

requireDir('./', {recurse: true})

// Config
import config from '../config'

// Build then watch, but this doesn't move or optimise assets such as images, videos etc.
if (config.project == 'static') {
	gulp.task('default', gulp.parallel(
		'svg',
		'styles',
		'scripts',
		'nunjucks',
		'serve',
		'watch'
	))
} else {
	gulp.task('default', gulp.parallel(
		'scripts',
		'styles',
		'svg',
		'watch'
	))
}

// Build
if (config.project == 'static') {
	gulp.task('build', gulp.parallel(
		'styles',
		'scripts',
		'move-favicons',
		'move-fonts',
		'move-videos',
		'images',
		'svg',
		'nunjucks'
	))
} else {
	gulp.task('build', gulp.parallel(
		'styles',
		'scripts',
		'move-favicons',
		'move-fonts',
		'move-videos',
		'images',
		'svg'
	))
}