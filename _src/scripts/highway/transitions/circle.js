import Highway from '@dogstudio/highway'

// GSAP Library
import TweenLite from 'gsap'

// Adding the mask element to the DOM
const maskHTML = `<div class="mask mask--circle"></div>`
$('body').prepend(maskHTML)
const $mask = $('.mask')

function handler(e) {
    e = e || window.event;

    let pageX = e.pageX;
    let pageY = e.pageY;

    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    $mask.css({
        'top': pageY - $(window).scrollTop(),
        'left': pageX
    })
}

// Grow a circle
class Circle extends Highway.Transition {

    in({ from, to, done }) {
        // Reset Scroll
        window.scrollTo(0, 0)

        // Remove Old View
        from.remove()
        
        // Animation
        TweenLite.fromTo($mask, 1.2,
            {
                opacity: 1
            },
            {
                opacity: 0,
                onComplete: () => {
                    $mask.removeAttr('style')
                    done()
                },
            }
        )
    }

    out({ from, done, trigger }) {
        // Window size
        let biggestDimension = Math.max(
            $(window).height(),
            $(window).width()
        )

        handler()

        // Position it on click trigger
        $mask.css({
            'display': 'block',
            'width': biggestDimension * 2,
            'height': biggestDimension * 2
        })

        // Animation
        TweenLite.fromTo($mask, .6,
            {
                css: {
                    scale: 0
                }
            },{
                css: {
                    scale: 1
                },
                ease: Expo.easeInOut,
                onComplete: done
            }
        )
    }
}

export default Circle