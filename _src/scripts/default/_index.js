import noJs from './noJs'
import social from './social'
import smoothScroll from './smoothScroll'
import showPage from './showPage'

// import menu from './menu'

export default function defaultJS() {
    noJs() // Removing no-js class
    smoothScroll() // Smooth scrolling anchor links
    social() // Social opening in new window
    showPage() // fade in content
}