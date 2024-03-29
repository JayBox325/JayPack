import gulp from 'gulp'
import requireDir from 'require-dir'
import staticTask from '../utils/staticTask.js'
import config from '../_config/_index.js'
requireDir('./', {recurse: true})

// Build
gulp.task('build', gulp.series(
	staticTask('nunjucks-move'),
	gulp.parallel(
		'styles',
		'scripts',
		'symbols',
		'move-favicons',
		'move-fonts',
		'move-videos',
		'images',
	),
	staticTask('nunjucks')
))

// Build then watch, but this doesn't move or optimise assets such as images, videos etc.
gulp.task('default', gulp.series(
	'build',
	gulp.parallel(
		'serve',
		'watch'
	)
))