import Highway from '@dogstudio/highway'

// GSAP Library
import Tween from 'gsap';

// Fade
class Fade extends Highway.Transition {
    in({ from, to, done }) {
        // Reset Scroll
        window.scrollTo(0, 0)

        // Remove Old View
        from.remove()
        

        // Animation
        Tween.fromTo(to, .7,
            {opacity: 0},
            {
                opacity: 1,
                ease: Expo.easeInOut,
                onComplete: done
            }
        )
    }

    out({ from, done }) {
        // Animation
        Tween.fromTo(from, .7,
            {opacity: 1},
            {
                opacity: 0,
                ease: Expo.easeInOut,
                onComplete: done
            }
        )
    }
}

export default Fade