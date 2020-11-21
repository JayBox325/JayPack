export default function accordions() {
    const accordions = document.querySelectorAll('[data-accordion]')
    const accordionTitles = document.querySelectorAll('[data-accordion-title]')
    const activeClass = 'is-active'


    if (accordions) {
        accordionTitles.forEach(accordionTitle => {
            accordionTitle.addEventListener('click', function(el) {
                if (this.parentElement.classList.contains(activeClass)) {
                    closeAccordion(this)
                } else {
                    openAccordion(this)
                }
            })
        })
    }

    function openAccordion(title) {
        accordions.forEach(accordion => {
            accordion.classList.remove(activeClass)
        })
        title.parentElement.classList.add(activeClass)
    }

    function closeAccordion(title) {
        title.parentElement.classList.remove(activeClass)
    }
}