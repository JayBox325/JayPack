//const find = require("jspolyfill-array.prototype.find")

// Misc elements
const $body = $('html')

// Mobile menu elements
const $hamburger = $('[data-hamburger]')

// Menu elements
const $menu = $('[data-menu]')
const $submenu = $('[data-submenu]')
const $menuLink = $('[data-menu-link]')

// Classes
const bodyMenuClass = 'is-hidden'
const activeClass = 'is-active'
const visibleClass = 'is-visible'


/*
    Menu hiding & showing using display block & display none for accessibility purposes.
*/

function closeMenu() {
	$body.removeClass(bodyMenuClass)
	
	// Hide the menu drawer
    $menu.removeClass(visibleClass)
    setTimeout(function () {
		$menu.removeClass(activeClass)
		
		// Hide submenu
		$submenu.removeClass(activeClass)
		$submenu.removeClass(visibleClass)
	}, 200)
	
	// Revert the hamburger to normal
    $hamburger.removeClass(activeClass)
}

function openMenu() {
    $body.addClass(bodyMenuClass)
    $menu.addClass(activeClass)
    setTimeout(function () {
        $menu.addClass(visibleClass)
    }, 200)
    $hamburger.addClass(activeClass)
}


// Hamburger click event
$hamburger.click(function() {
    if ($body.hasClass(bodyMenuClass)) {
        closeMenu()
    } else {
        openMenu()
    }

})




// Menu link click event
$menuLink.on('click', function(e) {
    if ($(window).width() < 1100) {
        closeMenu()
    }
})




// Open child menu
$('[data-more]').on('click', function(e) {
	e.preventDefault()

    // Get the target menu
    const target = $(this).parent().attr('data-parent')
    
    // Show the target item
    $(`[data-submenu='${target}']`).addClass(activeClass)

    setTimeout(function () {
        $(`[data-submenu='${target}']`).addClass(visibleClass)
    }, 20)
    
})

// Submenu back button
$('[data-back]').on('click', function() {
    $(this).closest('.submenu').removeClass(visibleClass)

    $(this).closest('.submenu').one('transitionend', function(e) {
        $(this).closest('.submenu').removeClass(activeClass)
    })
})


// // Making the submenus inactive when another top item is focussed
$(".menu__link--top").focus(function() {
    if ($(window).width() > 767) {
        $('.submenu[data-level="2"]').removeClass(activeClass)
        $('.submenu[data-level="2"]').removeClass(visibleClass)
    }
})


// On hover remove any 'is-active' classes added by JS when user is tabbing.

$(".menu__item--top").mouseover(function() {
    if ($(window).width() > 767) {
        $('.submenu[data-level="2"]').removeClass(activeClass)
        $('.submenu[data-level="2"]').removeClass(visibleClass)
    }
})
