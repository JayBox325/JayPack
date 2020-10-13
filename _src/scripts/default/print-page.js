// Print current page

export default function printPage() {
    const printPageBtn = document.querySelector('[data-print-page]')

    if (printPageBtn) {
        printPageBtn.addEventListener('click', function(e) {
            window.print()
        })
    }
}