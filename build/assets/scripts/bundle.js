/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./_src/scripts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_src/scripts/_tools/keyboard-trap.ts":
/*!**********************************************!*\
  !*** ./_src/scripts/_tools/keyboard-trap.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setFocus; });
/*
    Keep a keyboard user where we want them to be
*/

let focusableItems
let numberOfFocusableItems
let focusedItemIndex
let focusedItem
let items

const focusableElementsString = 'a[href], area[href], input:not([disabled]), summary, select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]'

function setFocus(target) {
    setTimeout(function() {
        // Focus on the first element
        const focusElement = target.querySelectorAll('a,input,button')[0]
        focusElement.focus()
    }, 0)

    // Start listening for tab key
    target.addEventListener('keydown', function(e) {
        trapTabKey(target, e)
    })
}

function trapTabKey(target, evt) {

    // if tab or shift-tab pressed
    if (evt.which == 9) {

        // get list of all focusable children elements in given target
        items = target.querySelectorAll(focusableElementsString)

        // get the number of focusable items
        numberOfFocusableItems = items.length
        
        // get currently focused item
        focusedItem = document.activeElement

        // get the index of the currently focused item
        focusedItemIndex = Array.prototype.indexOf.call(items, focusedItem)

        // back tab
        console.log(evt)
        if (evt.shiftKey) {
            // if focused on first item and user preses back-tab, go to the last focusable item
            if (focusedItemIndex == 0) {
                items[numberOfFocusableItems - 1].focus()
                evt.preventDefault()
            }

        // forward tab
        } else {
            console.log('forwards')
            // if focused on the last item and user preses tab, go to the first focusable item
            if (focusedItemIndex == numberOfFocusableItems - 1) {
                items[0].focus()
                evt.preventDefault()
            }
        }
    }
}

/***/ }),

/***/ "./_src/scripts/app.ts":
/*!*****************************!*\
  !*** ./_src/scripts/app.ts ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default/_index */ "./_src/scripts/default/_index.ts");
/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_index */ "./_src/scripts/modules/_index.ts");
// Loaded once on initial page load



Object(_default_index__WEBPACK_IMPORTED_MODULE_0__["default"])()
Object(_modules_index__WEBPACK_IMPORTED_MODULE_1__["default"])()

/***/ }),

/***/ "./_src/scripts/default/_index.ts":
/*!****************************************!*\
  !*** ./_src/scripts/default/_index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultJS; });
/* harmony import */ var _accordions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordions */ "./_src/scripts/default/accordions.ts");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./_src/scripts/default/menu.ts");
/* harmony import */ var _header_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-scroll */ "./_src/scripts/default/header-scroll.ts");
/* harmony import */ var _cookie_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cookie-bar */ "./_src/scripts/default/cookie-bar.ts");
// import pageTransitions from './page-transitions'
// import slider from './slider'
// import player from './player'
// import printPageBtn from './print-page-btn'
// import darkModeBtn from './dark-mode-btn'
// import shareBtns from './share-btns'






function defaultJS() {
    // pageTransitions()
    // slider()
    // player()
    // printPageBtn()
    // darkModeBtn()
    // shareBtns()

    Object(_cookie_bar__WEBPACK_IMPORTED_MODULE_3__["default"])()
    Object(_menu__WEBPACK_IMPORTED_MODULE_1__["default"])()
    Object(_accordions__WEBPACK_IMPORTED_MODULE_0__["default"])()
    Object(_header_scroll__WEBPACK_IMPORTED_MODULE_2__["default"])()
}

/***/ }),

/***/ "./_src/scripts/default/accordions.ts":
/*!********************************************!*\
  !*** ./_src/scripts/default/accordions.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return accordions; });
function accordions() {
    const accordions = document.querySelectorAll('[data-accordion]')
    const accordionTitles = document.querySelectorAll('[data-accordion-title]')
    const hiddenClass = 'is-hidden'
    let thisGroup
    let accordionBody
    let accordionHeight

    if (accordions) {
        accordionTitles.forEach(accordionTitle => {
            accordionBody = accordionTitle.nextElementSibling
            accordionHeight = accordionBody.offsetHeight
            accordionBody.dataset.height = accordionHeight
            accordionTitle.parentElement.classList.add('is-hidden')

            accordionTitle.addEventListener('click', function(el) {
                if (!this.parentElement.classList.contains(hiddenClass)) {
                    closeAccordion(this)
                } else {
                    openAccordion(this)
                }
            })
        })
    }

    function openAccordion(title) {
        // Enable this to close other accordions when one is opened.
        // closeOthers(title)
        accordionHeight = title.nextElementSibling.dataset.height
        console.log(accordionHeight)
        title.nextElementSibling.style.height = `${accordionHeight}px`
        title.parentElement.classList.remove(hiddenClass)
        title.setAttribute('aria-expanded', true)
    }

    function closeAccordion(title) {
        title.parentElement.classList.add(hiddenClass)
        title.nextElementSibling.style.height = null
        title.setAttribute('aria-expanded', false)
    }

    function closeOthers(title) {
        thisGroup = title.closest('[data-accordion-wrap]')
        thisGroup = thisGroup.querySelectorAll('[data-accordion]')

        thisGroup.forEach(accordion => {
            closeAccordion(accordion.querySelector('[data-accordion-title]'))
        })
    }
}

/***/ }),

/***/ "./_src/scripts/default/cookie-bar.ts":
/*!********************************************!*\
  !*** ./_src/scripts/default/cookie-bar.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cookieBar; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);


function cookieBar() {
    const cookieBar = document.querySelector('[data-cookie-bar]')
    const cookieAccept = document.querySelector('[data-cookie-accept]')
    const activeClass = 'is-active'

    if (js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('stp-cookies-accept')) {
        cookieBar.remove()
    } else {
        cookieBar.classList.add(activeClass)
        cookieAccept.addEventListener('click', acceptCookies.bind(this))
    }

    function acceptCookies() {
        js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('stp-cookies-accept', true, { expires: 730 })
        cookieBar.classList.remove(activeClass)
    }

    function resetCookie() {
        js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove('stp-cookies-accept')
    }
}


/***/ }),

/***/ "./_src/scripts/default/header-scroll.ts":
/*!***********************************************!*\
  !*** ./_src/scripts/default/header-scroll.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return headerScroll; });
/*

    Adjust the header styling on scroll

*/

function headerScroll() {
    const activeClass = 'is-scrolled'
    const header = document.querySelector('.header')
    let scrollpos = window.scrollY

    if (header) {
        // Add active class
        function makeActive() {
            header.classList.add(activeClass)
        }

        // Remove active class
        function makeInactive() {
            header.classList.remove(activeClass)
        }

        // Scroll position function
        function getScroll() {
            scrollpos = window.scrollY

            if (scrollpos > 40) {
                makeActive()
            }
            else {
                makeInactive()
            }
        }

        // Checking position on scroll
        window.addEventListener('scroll', function() {
            getScroll()
        })

        // Check scroll position on load
        getScroll()
    }
}

/***/ }),

/***/ "./_src/scripts/default/menu.ts":
/*!**************************************!*\
  !*** ./_src/scripts/default/menu.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return menu; });
/* harmony import */ var _tools_keyboard_trap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_tools/keyboard-trap */ "./_src/scripts/_tools/keyboard-trap.ts");


/*
    Menu. Not much more to say.
*/

function menu() {
    // Elements
    const hamburger = document.querySelector('[data-hamburger]')
    const menu = document.querySelector('[data-menu]')
    const body = document.querySelector('body')

    // Classes
    const activeClass = 'is-active'
    const hiddenClass = 'is-hidden'

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            if (hamburger.classList.contains(activeClass)) {
                closeMenu()
            } else {
                openMenu()
            }

            function closeMenu() {
                hamburger.classList.remove(activeClass)
                menu.classList.remove(activeClass)
                body.classList.remove(hiddenClass)
            }

            function openMenu() {
                hamburger.classList.add(activeClass)
                menu.classList.add(activeClass)
                body.classList.add(hiddenClass)
                Object(_tools_keyboard_trap__WEBPACK_IMPORTED_MODULE_0__["default"])(menu)
            }
        })
    }
}

/***/ }),

/***/ "./_src/scripts/modules/_index.ts":
/*!****************************************!*\
  !*** ./_src/scripts/modules/_index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modulesJS; });
// import function from './file'

function modulesJS() {
    // function()
}

/***/ }),

/***/ "./node_modules/js-cookie/src/js.cookie.js":
/*!*************************************************!*\
  !*** ./node_modules/js-cookie/src/js.cookie.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader;
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		registeredInModuleLoader = true;
	}
	if (true) {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function decode (s) {
		return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
	}

	function init (converter) {
		function api() {}

		function set (key, value, attributes) {
			if (typeof document === 'undefined') {
				return;
			}

			attributes = extend({
				path: '/'
			}, api.defaults, attributes);

			if (typeof attributes.expires === 'number') {
				attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
			}

			// We're using "expires" because "max-age" is not supported by IE
			attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

			try {
				var result = JSON.stringify(value);
				if (/^[\{\[]/.test(result)) {
					value = result;
				}
			} catch (e) {}

			value = converter.write ?
				converter.write(value, key) :
				encodeURIComponent(String(value))
					.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

			key = encodeURIComponent(String(key))
				.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
				.replace(/[\(\)]/g, escape);

			var stringifiedAttributes = '';
			for (var attributeName in attributes) {
				if (!attributes[attributeName]) {
					continue;
				}
				stringifiedAttributes += '; ' + attributeName;
				if (attributes[attributeName] === true) {
					continue;
				}

				// Considers RFC 6265 section 5.2:
				// ...
				// 3.  If the remaining unparsed-attributes contains a %x3B (";")
				//     character:
				// Consume the characters of the unparsed-attributes up to,
				// not including, the first %x3B (";") character.
				// ...
				stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
			}

			return (document.cookie = key + '=' + value + stringifiedAttributes);
		}

		function get (key, json) {
			if (typeof document === 'undefined') {
				return;
			}

			var jar = {};
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all.
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = decode(parts[0]);
					cookie = (converter.read || converter)(cookie, name) ||
						decode(cookie);

					if (json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					jar[name] = cookie;

					if (key === name) {
						break;
					}
				} catch (e) {}
			}

			return key ? jar[key] : jar;
		}

		api.set = set;
		api.get = function (key) {
			return get(key, false /* read as raw */);
		};
		api.getJSON = function (key) {
			return get(key, true /* read as json */);
		};
		api.remove = function (key, attributes) {
			set(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.defaults = {};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map