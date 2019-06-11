// import setFocus from './keyboardTrap'
// import { TimelineLite, TweenLite } from "gsap"

// export default function menu() {
//     // Elements
//     const $body = $('body')
//     const $hamburger = $('[data-hamburger]')
//     const $menuWrap = $('[data-menu-wrap]')
//     const $menuMain = $('[data-menu]')
//     const $menuMore = $('[data-more]')
//     const $menuMask = $('[data-menu-mask]')

//     // Other
//     const activeClass = 'is-active'
//     const tl = new TimelineLite()



//     /*
//         HAMBURGER CLICK EVENT ----------------------------------------------------
//     */
//     $hamburger.on('click', function(e) {
//         const menuState = $(this).attr('data-hamburger')

//         // If Hamburger menu state is 'closed', open the menu, and vice versa.
//         if (menuState == 'closed') {
//             openMenu()
//         } else {
//             closeMenu(e)
//         }
//     })




//     /*
//         OPEN MENU FUNCTION ----------------------------------------------------
//     */
//     function openMenu() {
//         // Mark the hamburger as open
//         $hamburger.attr('data-hamburger', 'open')
//     }




//     /*
//         CLOSE MENU FUNCTION ----------------------------------------------------
//     */
//     function closeMenu(e) {
//         e.preventDefault()
//         // Mark the hamburger as open
//         $hamburger.attr('data-hamburger', 'closed')
//     }


// /*
//     // OPEN MENU FUNCTION
//     function openMenu() {
//         $hamburger.attr('data-hamburger', 'open')

//         openMenuDrawer($menuMain)
//     }


//     // OPEN MENU DRAWER
//     function openMenuDrawer($drawer) {

//         TweenLite.fromTo($drawer, .5,
//             {x: '100%'},
//             {
//                 x: '0%',
//                 ease: Expo.easeInOut
//             }
//         )

//         setFocus($drawer)
//     }


//     // CLOSE MENU DRAWER
//     function closeMenuDrawer($drawer) {

//         TweenLite.fromTo($drawer, .5,
//             {x: '0%'},
//             {
//                 x: '100%',
//                 ease: Expo.easeInOut,
//                 onComplete: () => {
//                     $menuWrap.removeAttr('open')
//                 }
//             }
//         )

//     }

//     // CLOSE MENU FUNCTION
//     function closeMenu(e) {
//         e.preventDefault()
//         $hamburger.attr('data-hamburger', 'closed')
//         $menuMask.removeClass(activeClass)

//         TweenLite.fromTo($menuMain, .5,
//             {x: '0%'},
//             {
//                 x: '100%',
//                 ease: Expo.easeInOut,
//                 onComplete: () => {
//                     $menuWrap.removeAttr('open')
//                     $('[data-child-wrap]').removeAttr('open')
//                 }
//             }
//         )

//     }

//     // Hamburger click function
//     $hamburger.on('click', function(e) {
//         const menuState = $(this).attr('data-hamburger')

//         if (menuState == 'closed') {
//             openMenu()
//         } else {
//             closeMenu(e)
//         }
//     })

//     // SHOW SUBMENU
//     $menuMore.on('click', function(e) {
//         const $submenu = $(this).next()

//         openMenuDrawer($submenu)
//     })

//     // Close menu on esc key
//     $(document).on('keydown', function(e) {
//         if (e.keyCode === 27) { // ESC
//             // if ($(window).width() > 900) {
//             //     if ($submenu.hasClass(activeClass)) {
//             //         $submenu.removeClass(activeClass)
//             //     }
//             // } else {
//                 // $submenu.removeClass(activeClass)
//                 // $submenu.removeClass(visibleClass)
//             // }

//             closeMenu(e)
//         }
//     })
// }











// // Misc elements
// const $body = $('body')
// const $siteWrap = $('.site-wrap')

// // Mobile menu elements
// const $hamburger = $('[data-hamburger]')

// // Menu elements
// const $menu = $('[data-menu="main"]')
// const $submenu = $('[data-menu]')
// const $menuLink = $('[data-menu-link]')

// // Classes
// const bodyMenuClass = 'is-hidden'
// const activeMenuClass = 'menu-is-active'
// const activeClass = 'is-active'
// const visibleClass = 'is-visible'

// // Trapped tabbing
// let focusedElementBeforeModal
// var focusableElementsString = "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"


// // Close menu
// function closeMenu() {
// 	$body.removeClass(bodyMenuClass)
//     $hamburger.removeClass(activeClass)
//     $body.removeClass(activeMenuClass)
	
// 	// Hide the menu drawer
//     $menu.removeClass(visibleClass)
//     setTimeout(function () {
// 		$menu.removeClass(activeClass)
		
// 		// Hide submenu
// 		$submenu.removeClass(activeClass)
// 		$submenu.removeClass(visibleClass)
// 	}, 400)
// }


// // Open menu
// function openMenu() {
//     $body.addClass(bodyMenuClass)
//     $menu.addClass(activeClass)

//     setTimeout(function () {
//         $body.addClass(activeMenuClass)
//         $menu.addClass(visibleClass)
//         $hamburger.addClass(activeClass)

//         setFocus.setFocus($menu)

//     }, 50)
// }

// // Don't close the menu when you click the mask (countering below)
// $menu.on('click', function(e) {
//     e.stopPropagation()
// })


// // Close the menu if clicked anywhere
// $(document).on('click', function (e) {
//     if ($body.hasClass(activeMenuClass)) {
//         closeMenu()
//     }
// })


// // Close menu on menu item click
// $menuLink.on('click', function(e) {
//     closeMenu()
// })



// // Open submenu
// function openSubmenu(target) {
//     // Get the target menu
//     const $targetMenu = $(`[data-menu='${target}']`)
    
//     // Show the target item
//     $targetMenu.addClass(activeClass)

//     setTimeout(function () {
//         $targetMenu.addClass(visibleClass)
        
//         if ($(window).width() < 900) {
//             setFocus($targetMenu)
//         }
//     }, 20)
// }

// // Close submenu
// function closeSubmenu(target) {
//     // Get the target menu
//     const $targetMenu = $(`[data-menu='${target}']`)
//     const $parentMenu = $(`[data-parent='${target}']`).closest('[data-menu]')

//     $targetMenu.removeClass(visibleClass)

//     $targetMenu.one('transitionend', function(e) {
//         $targetMenu.removeClass(activeClass)
//         setFocus.setFocus($parentMenu)
//     })
// }

// // Open submenu
// $('[data-more]').on('click', function(e) {
//     e.preventDefault()
//     const target = $(this).attr('data-more')
//     openSubmenu(target)
// })


// // Submenu back button
// $('[data-back]').on('click', function(e) {
//     e.preventDefault()
//     const target = $(this).attr('data-back')
//     closeSubmenu(target)
// })


// // Making the submenus inactive when another top item is focussed
// $(".menu__link--top").focus(function() {
//     if ($(window).width() > 600) {
//         $('.submenu[data-level="2"]').removeClass(activeClass)
//         $('.submenu[data-level="2"]').removeClass(visibleClass)
//     }
// })


// // On hover remove any 'is-active' classes added by JS when user is tabbing.
// $(".menu__item--top").mouseover(function() {
//     if ($(window).width() > 900) {
//         $('.submenu[data-level="2"]').removeClass(activeClass)
//         $('.submenu[data-level="2"]').removeClass(visibleClass)
//     }
// })