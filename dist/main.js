/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.css":
/*!****************************!*\
  !*** ./src/scss/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://projectnew/./src/scss/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.css */ \"./src/scss/style.css\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('scroll', function() {\r\n    const logoImage = document.querySelector('.logo img');\r\n    const mainNav = document.getElementById('mainNav');\r\n\r\n    if (window.pageYOffset > 0) {\r\n        logoImage.style.height = \"100px\";\r\n        mainNav.classList.add('font-size')\r\n    } else {\r\n        logoImage.style.height = \"114px\";\r\n        mainNav.classList.remove('font-size')\r\n    }\r\n\r\n    // фигурные скобки -- объект\r\n    // квадратные скобки -- массивы\r\n\r\n});\r\n\r\nconst cardsWrapper = document.querySelector('.cards-wrapper');\r\nconst itCards = document.querySelector('.it-cards');\r\nconsole.log('scripts loaded');\r\n\r\n\r\nwindow.addEventListener('scroll', function() {\r\n    const logoImage = document.querySelector('.logo img');\r\n    const mainNav = document.getElementById('mainNav');\r\n\r\n    if (window.pageYOffset > 0) {\r\n        logoImage.style.height = \"100px\";\r\n        mainNav.classList.add('font-size')\r\n    } else {\r\n        logoImage.style.height = \"114px\";\r\n        mainNav.classList.remove('font-size')\r\n    }\r\n    \r\n    \r\n  \r\n  \r\n  // Run\r\n  \r\n  \r\n    \r\n  \r\n\r\n    // фигурные скобки -- объект\r\n    // квадратные скобки -- массивы\r\n\r\n});\r\n\r\n\r\n\r\n\r\n\r\nconst time = document.getElementById('time'),\r\n  greeting = document.getElementById('greeting'),\r\n  name = document.getElementById('name'),\r\n  focus = document.getElementById('mood');\r\n\r\n// Options\r\nconst showAmPm = true;\r\n\r\n// Show Time\r\nfunction showTime() {\r\n  let today = new Date(),\r\n    hour = today.getHours(),\r\n    min = today.getMinutes(),\r\n    sec = today.getSeconds();\r\n\r\n  // Set AM or PM\r\n  const amPm = hour >= 12 ? 'PM' : 'AM';\r\n\r\n  // 12hr Format\r\n \r\n\r\n  // Output Time\r\n  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(\r\n    sec\r\n  )} ${showAmPm ? amPm : ''}`;\r\n\r\n  setTimeout(showTime, 1000);\r\n}\r\n\r\n// Add Zeros\r\nfunction addZero(n) {\r\n  return (parseInt(n, 10) < 10 ? '0' : '') + n;\r\n}\r\n\r\n// Set Background and Greeting\r\nfunction setBgGreet() {\r\n  let today = new Date(),\r\n    hour = today.getHours();\r\n\r\n   \r\n    if (hour < 6) {\r\n      // Night\r\n\r\n      greeting.textContent = 'Good Night, ';\r\n  }\r\n  else if (hour >= 17) {\r\n    // Evening\r\n    \r\n    greeting.textContent = 'Good Evening, ';\r\n    document.body.style.color = 'white';\r\n  }\r\n  else if (hour >= 11) {\r\n    // Afternoon\r\n   \r\n    greeting.textContent = 'Good Afternoon, ';\r\n  }\r\n  else if (hour >= 6) {\r\n    // Morning\r\n   \r\n    greeting.textContent = 'Good Morning, ';\r\n  } \r\n  \r\n    \r\n  \r\n}\r\n\r\n// Get Name\r\nfunction getName() {\r\n  if (localStorage.getItem('name') === null) {\r\n    name.textContent = 'Enter Name';\r\n  } else {\r\n    name.textContent = localStorage.getItem('name');\r\n  }\r\n}\r\n\r\n// Set Name\r\nfunction setName(e) {\r\n  if (e.type === 'keypress') {\r\n    // Make sure enter is pressed\r\n    if (e.which == 13 || e.keyCode == 13) {\r\n      localStorage.setItem('name', e.target.innerText);\r\n      name.blur();\r\n    }\r\n  } else {\r\n    localStorage.setItem('name', e.target.innerText);\r\n  }\r\n}\r\n\r\n// Get Focus\r\nfunction getFocus() {\r\n  if (localStorage.getItem('mood') === null) {\r\n    focus.textContent = 'Enter Mood';\r\n  } else {\r\n    focus.textContent = localStorage.getItem('mood');\r\n  }\r\n}\r\n\r\n// Set Focus\r\nfunction setFocus(e) {\r\n  if (e.type === 'keypress') {\r\n    // Make sure enter is pressed\r\n    if (e.which == 13 || e.keyCode == 13) {\r\n      localStorage.setItem('mood', e.target.innerText);\r\n      focus.blur();\r\n    }\r\n  } else {\r\n    localStorage.setItem('mood', e.target.innerText);\r\n  }\r\n}\r\n\r\n\r\nname.addEventListener('keypress', setName);\r\nname.addEventListener('blur', setName);\r\nfocus.addEventListener('keypress', setFocus);\r\nfocus.addEventListener('blur', setFocus);\r\n\r\n// Run\r\nshowTime();\r\nsetBgGreet();\r\ngetName();\r\ngetFocus();\r\n\n\n//# sourceURL=webpack://projectnew/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;