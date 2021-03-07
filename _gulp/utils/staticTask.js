/*
    Run this task if this is a Nunjucks project ONLY
*/

import gulp from 'gulp'
import projectVariables from '../../project.config'

export default function staticTask(task) {
    task = gulp.series(task)
    return function (cb) {
        if (projectVariables.framework == 'nunjucks') {
            task(cb)
        } else {
            cb()
        }
    }
}