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
/******/ 	return __webpack_require__(__webpack_require__.s = "./_src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./_src/scripts/_tools/keyboard-trap.js":
/*!**********************************************!*\
  !*** ./_src/scripts/_tools/keyboard-trap.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setFocus; });
/*
    Keep a keyboard user where we want them to be
*/
var focusableItems;
var numberOfFocusableItems;
var focusedItemIndex;
var focusedItem;
var items;
var focusableElementsString = 'a[href], area[href], input:not([disabled]), summary, select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]';
function setFocus(target) {
  setTimeout(function () {
    // Focus on the first element
    var focusElement = target.querySelectorAll('a,input,button')[0];
    focusElement.focus();
  }, 0); // Start listening for tab key

  target.addEventListener('keydown', function (e) {
    trapTabKey(target, e);
  });
}

function trapTabKey(target, evt) {
  // if tab or shift-tab pressed
  if (evt.which == 9) {
    // get list of all focusable children elements in given target
    items = target.querySelectorAll(focusableElementsString); // get the number of focusable items

    numberOfFocusableItems = items.length; // get currently focused item

    focusedItem = document.activeElement; // get the index of the currently focused item

    focusedItemIndex = Array.prototype.indexOf.call(items, focusedItem); // back tab

    console.log(evt);

    if (evt.shiftKey) {
      // if focused on first item and user preses back-tab, go to the last focusable item
      if (focusedItemIndex == 0) {
        items[numberOfFocusableItems - 1].focus();
        evt.preventDefault();
      } // forward tab

    } else {
      console.log('forwards'); // if focused on the last item and user preses tab, go to the first focusable item

      if (focusedItemIndex == numberOfFocusableItems - 1) {
        items[0].focus();
        evt.preventDefault();
      }
    }
  }
}

/***/ }),

/***/ "./_src/scripts/app.js":
/*!*****************************!*\
  !*** ./_src/scripts/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default/_index.js */ "./_src/scripts/default/_index.js");
/* harmony import */ var _modules_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_index.js */ "./_src/scripts/modules/_index.js");
// Loaded once on initial page load


Object(_default_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./_src/scripts/default/_index.js":
/*!****************************************!*\
  !*** ./_src/scripts/default/_index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultJS; });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./_src/scripts/default/menu.js");
/* harmony import */ var _header_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-scroll */ "./_src/scripts/default/header-scroll.js");
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
  Object(_menu__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_header_scroll__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/***/ }),

/***/ "./_src/scripts/default/header-scroll.js":
/*!***********************************************!*\
  !*** ./_src/scripts/default/header-scroll.js ***!
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
  var activeClass = 'is-scrolled';
  var header = document.querySelector('.header');
  var scrollpos = window.scrollY;

  if (header) {
    // Add active class
    var makeActive = function makeActive() {
      header.classList.add(activeClass);
    }; // Remove active class


    var makeInactive = function makeInactive() {
      header.classList.remove(activeClass);
    }; // Scroll position function


    var getScroll = function getScroll() {
      scrollpos = window.scrollY;

      if (scrollpos > 40) {
        makeActive();
      } else {
        makeInactive();
      }
    }; // Checking position on scroll


    window.addEventListener('scroll', function () {
      getScroll();
    }); // Check scroll position on load

    getScroll();
  }
}

/***/ }),

/***/ "./_src/scripts/default/menu.js":
/*!**************************************!*\
  !*** ./_src/scripts/default/menu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return menu; });
/* harmony import */ var _tools_keyboard_trap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_tools/keyboard-trap.js */ "./_src/scripts/_tools/keyboard-trap.js");

/*
    Menu. Not much more to say.
*/

function menu() {
  // Elements
  var hamburger = document.querySelector('[data-hamburger]');
  var menu = document.querySelector('[data-menu]');
  var body = document.querySelector('body'); // Classes

  var activeClass = 'is-active';
  var hiddenClass = 'is-hidden';

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (hamburger.classList.contains(activeClass)) {
        closeMenu();
      } else {
        openMenu();
      }

      function closeMenu() {
        hamburger.classList.remove(activeClass);
        menu.classList.remove(activeClass);
        body.classList.remove(hiddenClass);
      }

      function openMenu() {
        hamburger.classList.add(activeClass);
        menu.classList.add(activeClass);
        body.classList.add(hiddenClass);
        Object(_tools_keyboard_trap_js__WEBPACK_IMPORTED_MODULE_0__["default"])(menu);
      }
    });
  }
}

/***/ }),

/***/ "./_src/scripts/modules/_index.js":
/*!****************************************!*\
  !*** ./_src/scripts/modules/_index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modulesJS; });
// import function from './file'
function modulesJS() {// function()
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map