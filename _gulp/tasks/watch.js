import gulp from 'gulp'
import notify from 'gulp-notify'

// Config
import paths from '../path.config'
import projectConfig from '../../project.config'

gulp.task('watch', () => {

	// Watch styles
	gulp.watch(paths.sass.watch, gulp.series('styles'))

	// Watch images
	gulp.watch(paths.assets.images.watch, gulp.series('images'))

	// Watch svgs
	gulp.watch(paths.symbols.watch, gulp.series('symbols'))

	// Watch scripts
	gulp.watch(paths.js.watch, gulp.series('scripts'))

	// Watch Twig if CMS project
	if (projectConfig.cms) {
		gulp.watch(paths.twig.watch, gulp.series(projectConfig.cmsTemplateExt))
	}

	// Watch Nunjucks if static project
	if (projectConfig.cms == false) {
		gulp.watch(paths.njks.watch, gulp.series('nunjucks'))
	}
	
	notify({
		title: "👀 JayPack - Started",
		message: `Watching for changes...`
	}).write('')
})