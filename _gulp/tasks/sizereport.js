import gulp from 'gulp'
import notify from 'gulp-notify'

// Config
import paths from '../path.config'
import config from '../config'

// Environment config
const development = config.env.development
const production = config.env.production

// Size report packages
import sizereport from 'gulp-sizereport'

gulp.task('sizereport', () => {
    return gulp.src(paths.sizereport.dest)
        .pipe(production(sizereport({
            gzip: true,
            minifier: function (contents, filepath) {
                if (filepath.match(/\.min\./g)) {
                    return contents
                }
            }
        })))
        .pipe(development(notify({
            title: "👍 JayPack - built",
            message: "Assets compiled and moved",
            onLast: true
        })))
        .pipe(production(notify({
            title: "🍾 JayPack - packaged",
            message: "Assets compiled, minified and moved",
            onLast: true
        })))
})