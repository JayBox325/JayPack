/*
    Run this task if this is a craft project
*/

import gulp from 'gulp'
import projectConfig from '../../project.config'

export default function staticTask(task) {
    task = gulp.series(task) // make sure we have a function that takes callback as first argument
    return function (cb) {
        if (!projectConfig.craft) {
            task(cb)
        } else {
            cb()
        }
    }
}