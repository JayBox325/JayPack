import setFocus from './keyboardTrap'

// Misc elements
const $body = $('body')
const $siteWrap = $('.site-wrap')

// Mobile menu elements
const $hamburger = $('[data-hamburger]')

// Menu elements
const $menu = $('[data-menu="main"]')
const $submenu = $('[data-menu]')
const $menuLink = $('[data-menu-link]')

// Classes
const bodyMenuClass = 'is-hidden'
const activeMenuClass = 'menu-is-active'
const activeClass = 'is-active'
const visibleClass = 'is-visible'

// Trapped tabbing
let focusedElementBeforeModal
var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"


// Close menu
function closeMenu() {
	$body.removeClass(bodyMenuClass)
    $hamburger.removeClass(activeClass)
    $body.removeClass(activeMenuClass)
	
	// Hide the menu drawer
    $menu.removeClass(visibleClass)
    setTimeout(function () {
		$menu.removeClass(activeClass)
		
		// Hide submenu
		$submenu.removeClass(activeClass)
		$submenu.removeClass(visibleClass)
	}, 400)
}


// Open menu
function openMenu() {
    $body.addClass(bodyMenuClass)
    $menu.addClass(activeClass)

    setTimeout(function () {
        $body.addClass(activeMenuClass)
        $menu.addClass(visibleClass)
        $hamburger.addClass(activeClass)

        setFocus.setFocus($menu)

    }, 50)
}


// Hamburger click event
$hamburger.click(function() {
    if ($body.hasClass(bodyMenuClass)) {
        closeMenu()
    } else {
        openMenu()
    }

})

// Don't close the menu when you click the mask (countering below)
$menu.on('click', function(e) {
    e.stopPropagation()
})


// Close the menu if clicked anywhere
$(document).on('click', function (e) {
    if ($body.hasClass(activeMenuClass)) {
        closeMenu()
    }
})


// Close menu on menu item click
$menuLink.on('click', function(e) {
    closeMenu()
})


// Close menu on esc key
$(document).on('keydown', function(e) {
    if (e.keyCode === 27) { // ESC
        if ($(window).width() > 900) {
            if ($submenu.hasClass(activeClass)) {
                $submenu.removeClass(activeClass)
            }
        } else {
            $submenu.removeClass(activeClass)
            $submenu.removeClass(visibleClass)
            closeMenu()
        }
    }
})


// Open submenu
function openSubmenu(target) {
    // Get the target menu
    const $targetMenu = $(`[data-menu='${target}']`)
    
    // Show the target item
    $targetMenu.addClass(activeClass)

    setTimeout(function () {
        $targetMenu.addClass(visibleClass)
        
        if ($(window).width() < 900) {
            setFocus($targetMenu)
        }
    }, 20)
}

// Close submenu
function closeSubmenu(target) {
    // Get the target menu
    const $targetMenu = $(`[data-menu='${target}']`)
    const $parentMenu = $(`[data-parent='${target}']`).closest('[data-menu]')

    $targetMenu.removeClass(visibleClass)

    $targetMenu.one('transitionend', function(e) {
        $targetMenu.removeClass(activeClass)
        setFocus.setFocus($parentMenu)
    })
}

// Open submenu
$('[data-more]').on('click', function(e) {
    e.preventDefault()
    const target = $(this).attr('data-more')
    openSubmenu(target)
})


// Submenu back button
$('[data-back]').on('click', function(e) {
    e.preventDefault()
    const target = $(this).attr('data-back')
    closeSubmenu(target)
})


// Making the submenus inactive when another top item is focussed
$(".menu__link--top").focus(function() {
    if ($(window).width() > 600) {
        $('.submenu[data-level="2"]').removeClass(activeClass)
        $('.submenu[data-level="2"]').removeClass(visibleClass)
    }
})


// On hover remove any 'is-active' classes added by JS when user is tabbing.
$(".menu__item--top").mouseover(function() {
    if ($(window).width() > 900) {
        $('.submenu[data-level="2"]').removeClass(activeClass)
        $('.submenu[data-level="2"]').removeClass(visibleClass)
    }
})