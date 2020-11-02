/*
    HTML5 Video player from https://plyr.io/
*/

import Plyr from 'plyr'

export default function player() {
    const videoElements = document.querySelectorAll('[data-player]')

    if (videoElements.length) {
        videoElements.forEach(video => {
            player(video)
        })
    }

    function player(el) {
        const player = new Plyr(el, {
            controls: [
                'play-large',
                'play',
                'progress',
                'current-time',
                'mute',
                'volume',
                'fullscreen'
            ],
            clickToPlay: false
        })
    }
}