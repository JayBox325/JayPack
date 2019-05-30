// Imports
import Highway from '@dogstudio/highway'

// Importing Transitions
import PushLeft from './transitions/pushLeft.js'
// import Fade from './transitions/fade.js'
// import Mask from './transitions/mask.js'
// import OverlapUp from './transitions/overlapUp.js'
// import OverlapRight from './transitions/overlapRight.js'

// Set default transition
const defaultTransition = PushLeft

// Getting Google Tag Manager ID from HTML & Navigation links
const id = $('[data-gtm]').attr('data-gtm')
const navLinks = document.querySelectorAll('nav a')

// Setup Highway
const H = new Highway.Core({
    transitions: {
        default: defaultTransition
    }
})

// At end of navigation
H.on('NAVIGATE_END', ({ from, to, location }) => {

    // Update Analytics
    if (typeof gtag !== 'undefined') {
        gtag('config', id, {
            'page_path': location.pathname,
            'page_title': to.page.title,
            'page_location': location.href
        })
    }

    // Remove transition class
    $('body').removeClass('is-transitioning')
})

// In transition
.on('NAVIGATE_IN', ({ location, trigger }) => {

    // Check Active Link in Navigation
    for (let i = 0; i < navLinks.length; i++) {
        const link = navLinks[i]
        link.classList.remove('is-active')
        if (link.href === location.href) {
            link.classList.add('is-active')
        }
    }
})

// Out transition
.on('NAVIGATE_OUT', () => {
    $('body').addClass('is-transitioning')
})