// Source: https://github.com/kenwheeler/slick
import slick from 'slick-carousel'

// This may not work first time, need to confirm

export default function slider() {
    const $slider = $('[data-slick]')
    if ($slider.length) {
        $slider.each(function(i, el) {
            el.slick({})
        })
    }
}