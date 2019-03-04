import Highway from '@dogstudio/highway'

// GSAP Library
import Tween from 'gsap'

// Slide up from bottom
class OverlapUp extends Highway.Transition {
    in({ from, to, done }) {

        // Remove Old View
        Tween.fromTo(to, .7,
            {
                y: '100%'
            },
            {
                y: '0%',
                onStart: () => {
                    to.style.position = 'fixed'
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
        // Animation

    }

    out({ from, done }) {
        done()
    }
}

export default OverlapUp