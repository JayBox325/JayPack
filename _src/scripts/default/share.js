// Open social share links in small new windows.

export default function share() {
    if ($('[data-share]').length > 0) {
        const $socialWindow = $('[data-social]')

        $socialWindow.on('click', function(e) {
            e.preventDefault()
            window.open(this.href, 'Social', 'width=800, height=600')
            return false;
        })
    }
}