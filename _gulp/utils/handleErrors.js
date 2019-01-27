import notify from 'gulp-notify'

export default function() {
    var args = Array.prototype.slice.call(arguments)

    // Send error to notification center with gulp-notify
    notify.onError({
        title: "❌ JayPack - error",
        message: "<%= error.message %>"
    }).apply(this, args)

    // Keep gulp from hanging on this task
    this.emit('end')
}
