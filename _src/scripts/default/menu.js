//const find = require("jspolyfill-array.prototype.find")

// Misc elements
const $body = $('body')
const $siteWrap = $('.site-wrap')

// Mobile menu elements
const $hamburger = $('[data-hamburger]')

// Menu elements
const $menu = $('[data-menu]')
const $submenu = $('[data-submenu]')
const $menuLink = $('[data-menu-link]')

// Classes
const bodyMenuClass = 'is-hidden'
const activeMenuClass = 'menu-is-active'
const activeClass = 'is-active'
const visibleClass = 'is-visible'


/*
    Menu hiding & showing using display block & display none for accessibility purposes.
*/

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

function openMenu() {
    $body.addClass(bodyMenuClass)
    $menu.addClass(activeClass)

    setTimeout(function () {
        $body.addClass(activeMenuClass)
        $menu.addClass(visibleClass)
        $hamburger.addClass(activeClass)
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

$menu.on('click', function(e) {
    e.stopPropagation()
});

$(document).on('click', function (e) {
    if ($body.hasClass(activeMenuClass)) {
        closeMenu()
    }
})


// Menu link click event
$menuLink.on('click', function(e) {
    closeMenu()
})