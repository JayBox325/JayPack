export default function social() {

    if ($('[data-social]').length > 0) {
        const $socialWindow = $('[data-social]')

        $socialWindow.on('click', function(e) {
            e.preventDefault()
            window.open(this.href, 'Social', 'width=800, height=600')
            return false;
        })
    }
}