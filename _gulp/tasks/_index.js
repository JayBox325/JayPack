import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir('./', {recurse: true})

// Config
import config from '../config'

// Build
gulp.task('build', gulp.parallel(
	'styles',
	'scripts',
	'svg',
	'symbols',
	'move-favicons',
	'move-scripts',
	'move-fonts',
	'move-videos',
	'images',
))

// Build then watch, but this doesn't move or optimise assets such as images, videos etc.
gulp.task('default', gulp.parallel(
	'build',
	'watch'
))