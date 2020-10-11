import Plyr from 'plyr'

// Play videos with HTML Plyr: https://plyr.io/

export default function player() {
    const videoElements = document.querySelectorAll('[data-player]')

    if (videoElements.length) {
        videoElements.forEach(video => {
            player(video)
        })
    }

    function player(el) {
        const player = new Plyr(el, {
            controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
            clickToPlay: false
        })
    }
}