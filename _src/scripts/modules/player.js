import $ from 'jquery'
import Plyr from 'plyr'

export default function player() {
    const $video = $('.js-player')

    if ($video.length) {
        $video.each(function(i, el) {
            const player = new Plyr(el, {
                controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
                clickToPlay: false
            })
        })
    }
}