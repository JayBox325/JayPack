import Highway from '@dogstudio/highway'

// GSAP Library
import Tween from 'gsap'

// Import Site JS
import defaultJS from '../../default/_index.js'
import moduleJS from '../../modules/_index.js'

// Overlap
class PushLeft extends Highway.Transition {
    in({ from, to, done }) {
  
      // Animation
      Tween.fromTo(to, .7,
          {
            x: '100%'
          },
          {
              x: '0%',
              ease: Expo.easeNone,
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

                  // Fire page JS
                  defaultJS()
                  moduleJS()

                  done()
              }
          }
      )
  
      // Animation
      Tween.fromTo(from, 1,
        { x: '0' },
        {
            x: '-30%',
            ease: Expo.easeNone,
            onComplete: () => {  
              // Remove Old View
              from.remove()
            }
        }
      )
    }
  
      out({ from, done }) {
          done()
          to.style.position = 'fixed'
          to.style.top = 0
          to.style.width = '100vw'
      }
  }
  
  export default PushLeft