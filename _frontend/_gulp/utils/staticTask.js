/*
    Run this task if this is a Nunjucks project ONLY
*/

import config from '../_config/_index'
import gulp from 'gulp'

export default function staticTask(task) {
    task = gulp.series(task)
    return function (cb) {
        if (config.framework == 'nunjucks') {
            task(cb)
        } else {
            cb()
        }
    }
}