import gulp from 'gulp'
import notify from 'gulp-notify'

// Config
import paths from '../path.config'
import projectConfig from '../../project.config'

gulp.task('watch', () => {

	// Watch styles
	gulp.watch(paths.sass.watch, gulp.series('styles'))
		.on('change', function () {
			notify({
				title: "👍 JayPack - Reloaded",
				message: "Styles compiled"
			}).write('')
		})

	// Watch images
	gulp.watch(paths.assets.images.watch, gulp.series('images'))
		.on('change', function () {
			notify({
				title: "👍 JayPack - Reloaded",
				message: "Images optimised"
			}).write('')
		})

	// Watch svgs
	gulp.watch(paths.assets.svg.watch, gulp.series(['svg', 'symbols']))
	.on('change', function () {
		notify({
			title: "👍 JayPack - Reloaded",
			message: "SVGs optimised"
		}).write('')
	})

	// Watch scripts
	gulp.watch(paths.js.watch, gulp.series('scripts'))
		.on('change', function () {
			notify({
				title: "👍 JayPack - Reloaded",
				message: "Javascript compiled"
			}).write('')
		})

	// Watch Twig
	if (projectConfig.craft) {
		gulp.watch(paths.twig.watch, gulp.series('twig'))
			.on('change', function () {
				notify({
					title: "👍 JayPack - Reloaded",
					message: "Twig changed"
				}).write('')
			})
	}

	// Watch Nunjucks
	if (projectConfig.craft == false) {
		gulp.watch(paths.njks.watch, gulp.series('nunjucks'))
			.on('change', function () {
				notify({
					title: "👍 JayPack - Reloaded",
					message: "Nunjucks changed"
				}).write('')
			})
	}
	
	notify({
		title: "👀 JayPack - Started",
		message: `Watching for changes...`
	}).write('')
})