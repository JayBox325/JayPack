import gulp from 'gulp'
import notify from 'gulp-notify'

// Config
import paths from '../path.config'
import config from '../config'

gulp.task('watch', () => {
	
	notify({
		title: "👀 JayPack - Started",
		message: "Watching for changes"
	}).write('')

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
	gulp.watch(paths.assets.svg.watch, gulp.series('svg'))
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

	if (config.project == 'static') {
		gulp.watch(paths.njks.watch, gulp.series('nunjucks-watch'))
			.on('change', function () {
				notify({
					title: "👍 JayPack - Reloaded",
					message: "Nunjucks compiled"
				}).write('')
			})
	}

})