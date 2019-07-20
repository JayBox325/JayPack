import Rellax from 'rellax'

export default function parallax() {

    if ($('[data-parallax]').length > 0) {
        const $window = $(window)
        const getRellaxSpeed = () => $window.width() < 899 ? 0 : -2
        const rellax = new Rellax('[data-parallax]', {
            speed: getRellaxSpeed()
        })

        let throttle = null

        $window.resize(() => {
            clearTimeout(throttle)

            throttle = setTimeout(() => {
                rellax.options.speed = getRellaxSpeed()
                rellax.refresh()
            }, 400)
        });
        
    }
}