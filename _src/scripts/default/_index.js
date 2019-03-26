import svg from './inlineSVG'
import slider from './slickSlider'
import player from './player'
import overlay from './overlay'

function defaultJS() {
    svg.svg()
    overlay.overlay()
    player.player()
    slider.slider()
}

export default { defaultJS }