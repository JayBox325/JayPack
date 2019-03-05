import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir('./', {recurse: true})

// Config
import config from '../config'

// Build then watch, but this doesn't move or optimise assets such as images, videos etc.
if (config.project == 'static') {
	gulp.task('default', gulp.parallel(
		'svg',
		'styles',
		'scripts',
		'move-scripts',
		'nunjucks',
		'serve',
		'watch'
	))
} else {
	gulp.task('default', gulp.parallel(
		'scripts',
		'styles',
		'move-scripts',
		'svg',
		'watch'
	))
}

// Build
if (config.project == 'static') {
	gulp.task('build', gulp.parallel(
		'styles',
		'scripts',
		'nunjucks',
		'move-favicons',
		'move-scripts',
		'move-fonts',
		'move-videos',
		'images',
		'svg',
		'version-static'
	))
} else {
	gulp.task('build', gulp.parallel(
		'clean-html',
		'styles',
		'scripts',
		'move-favicons',
		'move-scripts',
		'move-fonts',
		'move-videos',
		'images',
		'svg',
		'version-craft'
	))
}