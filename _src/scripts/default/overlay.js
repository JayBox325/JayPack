import { TimelineLite } from 'gsap'
import setFocus from './keyboardTrap'

function overlay() {
    const $body = $('body')
    const $mask = $('[data-overlay-mask]')
    const $overlayBtn = $('[data-overlay-btn]')
    const $overlay = $('[data-overlay]')
    const $overlayClose = $('[data-overlay-close]')
    const bodyClass = 'is-hidden'
    const tl = new TimelineLite()

    function showOverlay(target) {
        const $dialog = $(`[data-overlay='${target}']`)
        $body.addClass(bodyClass)

        // Associate the mask to the modal
        $mask.attr('data-overlay-mask', target)

        tl
            .set($mask, {autoAlpha:0, display: 'block'})
            .set($dialog,{autoAlpha:0, y: '0%', x: '-50%'})
            .to($mask, .4, {autoAlpha:.4})
            .to($dialog, .3, {autoAlpha:1, display: 'block'},'-=.4')
            .to($dialog, .6, {y: '-50%', x: '-50%', ease: Expo. easeInOut},'-=.6')
            .add(function() {setFocus.setFocus($dialog)})
    }

    function hideOverlay(target) {
        const $dialog = $(`[data-overlay='${target}']`)
        $body.removeClass(bodyClass)

        $(`[data-overlay-btn='${target}']`).focus()

        tl
            .to($dialog, .2, {autoAlpha:0})
            .to($mask, .2, {autoAlpha:0},'-=.2')
            .set($dialog,{display:'none'})
            .set($mask, {display: 'none'})
    }

    $overlayBtn.on('click', function(e) {
        e.preventDefault()

        const $this = $(this)
        const target = $this.attr('data-overlay-btn')

        showOverlay(target)
    })

    $mask.on('click', function() {
        const $this = $(this)
        const target = $this.attr('data-overlay-mask')

        hideOverlay(target)
    })

    $overlayClose.on('click', function() {
        const $this = $(this)
        const target = $this.closest('[data-overlay]').attr('data-overlay')

        hideOverlay(target)
    })

    $overlay.find('a', 'button').on('click', function() {
        const target = $(this).closest('[data-overlay]').attr('[data-overlay]')
        hideOverlay(target)
    })

}

export default { overlay }