/*
    Open social share links in small new windows

    Use: Add the data-share attibute to buttons that have a social media share href
*/

export default function share() {
    const shareBtn = document.querySelector('[data-share]')

    if (shareBtn.length) {
        shareBtn.addEventListener('click', function(e) {
            e.preventDefault()
            window.open(this.href, 'Share', 'width=800, height=600')
            return false
        })
    }
}