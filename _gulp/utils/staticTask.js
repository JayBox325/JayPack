/*
    Run this task if this is NOT a cms project
*/

import gulp from 'gulp'
import projectConfig from '../../project.config'

export default function staticTask(task) {
    task = gulp.series(task)
    return function (cb) {
        if (!projectConfig.cms) {
            task(cb)
        } else {
            cb()
        }
    }
}