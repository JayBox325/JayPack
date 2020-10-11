// JS Breakpoints from https://stackoverflow.com/a/11387513/5789332

export default function isBreakpoint(bp) {
    var bps = [480, 768, 1024],
        w = window.innerWidth
        min, max

    for (var i = 0, l = bps.length; i < l; i++) {
        if (bps[i] === bp) {
            min = bps[i-1] || 0
            max = bps[i]
            break
        }
    }
    return w > min && w <= max
}