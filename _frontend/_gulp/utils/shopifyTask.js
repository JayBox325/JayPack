/*
    Run this task if this is a Shopify project ONLY
*/

import gulp from 'gulp'

export default function shopifyTask(task, framework) {
    task = gulp.series(task)
    return function (cb) {
        if (framework == 'shopify') {
            task(cb)
        } else {
            cb()
        }
    }
}