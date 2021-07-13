import setFocus from '../_tools/keyboard-trap'

/*
    Menu. Not much more to say.
*/

export default function menu() {
    // Elements
    const hamburger = document.querySelector('[data-hamburger]')
    const menu = document.querySelector('[data-menu]')
    const body = document.querySelector('body')

    // Classes
    const activeClass = 'is-active'
    const hiddenClass = 'is-hidden'

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            if (hamburger.classList.contains(activeClass)) {
                closeMenu()
            } else {
                openMenu()
            }

            function closeMenu() {
                hamburger.classList.remove(activeClass)
                menu.classList.remove(activeClass)
                body.classList.remove(hiddenClass)
            }

            function openMenu() {
                hamburger.classList.add(activeClass)
                menu.classList.add(activeClass)
                body.classList.add(hiddenClass)
                setFocus(menu)
            }
        })
    }
}