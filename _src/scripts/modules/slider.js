/*
    Slider with Slick from https://github.com/kenwheeler/slick
*/

import $ from 'jquery'
import slick from 'slick-carousel'

export default function slider() {
    const sliders = document.querySelectorAll('[data-slick]')

    if (sliders) {
        sliders.forEach(el => {
            let type = el.getAttribute('data-slick') || 'slider'
            
            if (type == 'slider') {
                $(el).slick({
                    infinite: true,
                    fade: true,

                    // Navigation
                    dots: true,
                    arrows: false,
                    dotsClass: 'slider__dots',

                    // Grow to show taller images
                    adaptiveHeight: true
                })
            }
        })
    }
}