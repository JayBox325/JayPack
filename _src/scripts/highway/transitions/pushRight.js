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
            x: '-100%'
          },
          {
              x: '0%',
              ease: Expo.easeOut,
              onStart: () => {
                  to.style.position = 'fixed'
                  to.style.top = 0
                  to.style.width = '100vw'

                  // Fire page JS
                  defaultJS()
                  moduleJS()
              },
              onComplete: () => {
                  // Set New View in DOM Stream
                  to.style.position = 'static'

                  window.scrollTo(0, 0)
      
                  // Remove Old View
                  from.remove()

                  $(to).find('.site__inner').addClass('is-visible')

                  done()
              }
          }
      )
  
      // Animation
      Tween.fromTo(from, .7,
        { x: '0',
        alpha: '1'},
        {
            x: '30%',
            alpha: '0',
            ease: Expo.easeOut,
            onComplete: () => {  
              // Remove Old View
              from.remove()
            }
        }
      )
    }
  
      out({ from, done }) {
          done()
      }
  }
  
  export default PushLeft