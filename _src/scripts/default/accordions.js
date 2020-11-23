export default function accordions() {
    const accordions = document.querySelectorAll('[data-accordion]')
    const accordionTitles = document.querySelectorAll('[data-accordion-title]')
    const activeClass = 'is-active'
    let thisGroup

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
        thisGroup = title.closest('[data-accordion-wrap]')
        thisGroup = thisGroup.querySelectorAll('[data-accordion]')

        thisGroup.forEach(accordion => {
            closeAccordion(accordion.querySelector('[data-accordion-title]'))
        })

        title.parentElement.classList.add(activeClass)
        title.setAttribute('aria-expanded', true)
    }

    function closeAccordion(title) {
        title.parentElement.classList.remove(activeClass)
        title.setAttribute('aria-expanded', false)
    }
}