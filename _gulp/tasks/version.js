import gulp from 'gulp'

// Config
import paths from '../path.config'
import config from '../config'
import handleErrors from '../utils/handleErrors'

// Version packages
import version from 'gulp-version-number'

const versionConfig = {
    'value': '%MDS%',
    'append': {
        'key': 'v',
        'to': ['css', 'js']
    }
}

gulp.task('version-static', (done) => {
    gulp.src('build/*.html')
        .pipe(version(versionConfig))
        .on('error', handleErrors)
        .pipe(gulp.dest('build/'))
    done()
})

gulp.task('version-craft', (done) => {
    gulp.src('build/templates/_layout/base.twig')
        .pipe(version(versionConfig))
        .on('error', handleErrors)
        .pipe(gulp.dest('build/templates/_layout/'))
    done()
})