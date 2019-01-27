import gulp from 'gulp'
import requireDir from 'require-dir'
requireDir('./', {recurse: true})

// Config
import config from '../config'

// Build then watch - this doesn't move fonts

if (config.project == 'static') {
	gulp.task('default', gulp.parallel(
		'move-favicons',
		'move-fonts',
		'move-videos',
		'images',
		'svg',
		'styles',
		'nunjucks',
		'watch'
	))
} else {
	gulp.task('default', gulp.parallel(
		'move-favicons',
		'move-fonts',
		'move-videos',
		'images',
		'svg',
		'styles',
		'watch'
	))
}

// Build
if (config.project == 'static') {
	gulp.task('build', gulp.parallel(
		'move-favicons',
		'move-fonts',
		'move-videos',
		'nunjucks',
		'images',
		'svg',
		'styles'
	))
} else {
	gulp.task('build', gulp.parallel(
		'move-favicons',
		'move-fonts',
		'move-videos',
		'images',
		'svg',
		'styles'
	))
}