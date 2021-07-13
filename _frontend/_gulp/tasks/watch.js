import gulp from 'gulp'
import notify from 'gulp-notify'

// Config
import paths from '../_config/paths'
import config from '../_config/_index.js'

gulp.task('watch', () => {

    // Watch styles
    gulp.watch(paths.sass.watch, gulp.series('styles'))

    // Watch images
    gulp.watch(paths.assets.images.watch, gulp.series('images'))

    // Watch svgs
    gulp.watch(paths.symbols.watch, gulp.series('symbols'))

    // Watch scripts
    gulp.watch(paths.js.watch, gulp.series('scripts'))

    // Templates
    switch (config.framework) {
        case 'nunjucks':
            gulp.watch(
                paths.njks.watch, gulp.series('nunjucks')
            )
            break
        case 'shopify':
            console.log('Do nothing...')
            break
        case 'craft':
            gulp.watch(
                paths.twig.watch, gulp.series('twig')
            )
            break
    }

    notify({
        title: "👀 JayPack - Started",
        message: `Watching for changes...`
    }).write('')
})