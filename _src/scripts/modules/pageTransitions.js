import barba from '@barba/core';

export default function pageTransitions() {

    barba.init()

    // Trigger page analytics
    barba.hooks.after(() => {
        ga('set', 'page', window.location.pathname)
        ga('send', 'pageview')
    })
}