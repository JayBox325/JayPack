import Highway from '@dogstudio/highway'

// GSAP Library
import Tween from 'gsap'

// Slide in from right
class OverlapRight extends Highway.Transition {
    in({ from, to, done }) {

        Tween.fromTo(to, .7,
            {
                x: '-100%'
            },
            {
                x: '0%',
                onStart: () => {
                    to.style.position = 'fixed'
                    to.style.left = 0
                    to.style.top = 0
                    to.style.width = '100vw'
                },
                onComplete: () => {
                    // Set New View in DOM Stream
                    to.style.position = 'static'

                    window.scrollTo(0, 0)
        
                    // Remove Old View
                    from.remove()
                    done()
                }
            }
          )

    }

    out({ done }) {
        done()
    }
}

export default OverlapRight