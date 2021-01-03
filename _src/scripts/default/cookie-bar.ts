import Cookies from 'js-cookie'

export default function cookieBar() {
    const cookieBar = document.querySelector('[data-cookie-bar]')
    const cookieAccept = document.querySelector('[data-cookie-accept]')
    const activeClass = 'is-active'

    if (Cookies.get('stp-cookies-accept')) {
        cookieBar.remove()
    } else {
        cookieBar.classList.add(activeClass)
        cookieAccept.addEventListener('click', acceptCookies.bind(this))
    }

    function acceptCookies() {
        Cookies.set('stp-cookies-accept', true, { expires: 730 })
        cookieBar.classList.remove(activeClass)
    }

    function resetCookie() {
        Cookies.remove('stp-cookies-accept')
    }
}
