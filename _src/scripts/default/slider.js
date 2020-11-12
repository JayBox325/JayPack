/*
    Slider with Slick from https://github.com/kenwheeler/slick

    This requires jQuery, find an alternative or try the vanilla version of Slick: https://github.com/ubergeoff/flingo/blob/master/apps/flingo/src/vendor/slick/slick.js
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