// Source: https://github.com/kenwheeler/slick
import $ from 'jquery'
import slick from 'slick-carousel'

export default function slider() {
    const $slider = document.querySelectorAll('[data-slick]')

    if ($slider.length) {
        $slider.forEach(el => {
            $(el).slick({
                infinite: true,
                fade: true,

                // Navigation
                dots: true,
                arrows: true,
                dotsClass: 'slider__dots',

                // Grow to show taller images
                adaptiveHeight: true
            })
        })
    }
}