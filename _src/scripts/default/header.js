/*
    Adjust the header styling on scroll
*/

export default function header() {
    const activeClass = 'is-scrolled'
    const header = document.querySelector('.header')
    let scrollpos = window.scrollY

    if (header) {
        // Add active class
        function makeActive() {
            header.classList.add(activeClass)
        }

        // Remove active class
        function makeInactive() {
            header.classList.remove(activeClass)
        }

        // Scroll position function
        function getScroll() {
            scrollpos = window.scrollY

            if (scrollpos > 40) {
                makeActive()
            }
            else {
                makeInactive()
            }
        }

        // Checking position on scroll
        window.addEventListener('scroll', function() {
            getScroll()
        })

        // Check scroll position on load
        getScroll()
    }
}