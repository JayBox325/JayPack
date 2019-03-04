import Highway from '@dogstudio/highway'

// GSAP Library
import TweenLite from 'gsap'

// Adding the mask element to the DOM
const maskHTML = `<div class="mask"></div>`
$('body').prepend(maskHTML)
const $mask = $('.mask')

// Mask
class Mask extends Highway.Transition {

    in({ from, to, done }) {
        // Reset Scroll
        window.scrollTo(0, 0)

        // Remove Old View
        from.remove()
        

        // Animation
        TweenLite.to($mask, .7,
            {
                y: '100%',
                ease: Expo.easeInOut,
                delay: .3,
                onComplete: done
            }
        )
    }

    out({ from, done }) {
        // Animation
        TweenLite.fromTo($mask, .7,
            {y: '-100%'},
            {
                y: '0%',
                ease: Expo.easeInOut,
                onComplete: done
            }
        )
    }
}

export default Mask