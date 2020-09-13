import gulp from 'gulp'
import requireDir from 'require-dir'

requireDir('./', {recurse: true})

// Config
import projectConfig from '../../project.config'

// If function
function ifStatic(condition, task) {
    task = gulp.series(task) // make sure we have a function that takes callback as first argument
    return function (cb) {
        if (!condition) {
            task(cb)
        } else {
            cb()
        }
    }
}

// Build
gulp.task('build', gulp.series(
	ifStatic(projectConfig.craft, 'nunjucks-move'),
	gulp.parallel(
		'styles',
		'scripts',
		'svg',
		'symbols',
		'move-favicons',
		'move-scripts',
		'move-fonts',
		'move-videos',
		'images',
		ifStatic(projectConfig.craft, 'nunjucks')
	),
	'clean'
))

// Build then watch, but this doesn't move or optimise assets such as images, videos etc.
gulp.task('default', gulp.series(
	'build',
	gulp.parallel(
		'serve',
		'watch'
	)
))