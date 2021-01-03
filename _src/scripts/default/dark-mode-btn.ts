/*

    Toggle website dark mode with a checkbox with a 'data-darkmode` attribute.

*/

export default function darkModeBtn() {
    const toggle = document.querySelector('[data-darkmode]')
    const body = document.querySelector('body')
    const darkModeClass = 'dark-mode'

    if (toggle) {

        // Get user preference on load by cookie first, then device
        if (localStorage.getItem('darkModeStatus') && localStorage.getItem('darkModeStatus') == 'true') {
            enableDarkMode()
        } else if (localStorage.getItem('darkModeStatus') && localStorage.getItem('darkModeStatus') == 'false') {
            disableDarkMode()
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            enableDarkMode()
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            disableDarkMode()
        } else {
            disableDarkMode()
        }

        // Watch user device settings
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                enableDarkMode()
            } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                disableDarkMode()
            }
        })

        // Toggle mode with the switch
        toggle.onchange = function toggleDarkMode(e) {
            if (toggle.checked == true) {
                enableDarkMode()
            } else {
                disableDarkMode()
            }
        }

        // Toggle true
        function enableDarkMode() {
            // Set cookie to true if not been set before or if changing from false to true
            if(!localStorage.getItem('darkModeStatus') || localStorage.getItem('darkModeStatus') == 'false') {
                localStorage.darkModeStatus = 'true'
            }

            toggle.checked = true
            body.classList.add(darkModeClass)
        }

        // Toggle false
        function disableDarkMode() {
            // Set cookie to false if not been set before or if changing from true to false
            if(!localStorage.getItem('darkModeStatus') || localStorage.getItem('darkModeStatus') == 'true') {
                localStorage.darkModeStatus = 'false'
            }

            toggle.checked = false
            body.classList.remove(darkModeClass)
        }
    }
}