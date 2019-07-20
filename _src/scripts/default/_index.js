import noJs from './noJs'
import svg from './inlineSVG'
import social from './social'
import smoothScroll from './smoothScroll'
import showPage from './showPage'
import fontLoader from './fontLoader'

// import menu from './menu'

export default function defaultJS() {
    noJs() // Removing no-js class
    smoothScroll() // Smooth scrolling anchor links
    svg() // Inline svg function
    social() // Social opening in new window
    showPage() // fade in content
}