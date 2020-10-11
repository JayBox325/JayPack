// Open social share links in small new windows.

export default function share() {
    const shareElements = document.querySelectorAll('[data-share]')

    if (shareElements.length) {
        const $shareBtn = document.querySelector('[data-share]')

        $shareBtn.addEventListener('click', function(e) {
            e.preventDefault()
            window.open(this.href, 'Share', 'width=800, height=600')
            return false
        })
    }
}