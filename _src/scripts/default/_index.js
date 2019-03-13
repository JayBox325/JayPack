import svg from './inlineSVG'
import slider from './slickSlider'
import overlay from './overlay'

function defaultJS() {
    svg.svg()
    overlay.overlay()
    slider.slider()
}

export default { defaultJS }