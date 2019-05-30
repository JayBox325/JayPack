/*
    The Body element has a 'no-js' class on by default.
    If JS is enabled on the user's device, we remove it so we know we have access to JS.
    This is so we can style certain elements different depending on if JS is available.

*/
export default function noJs() {
    const $body = $('body')
    const noJsClass = 'no-js'

    $body.removeClass(noJsClass)
}