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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.css */ \"./src/scss/style.css\");\n\n\n\nwindow.addEventListener('scroll', function() {\n    const logoImage = document.querySelector('.logo img');\n    const mainNav = document.getElementById('mainNav');\n\n    if (window.pageYOffset > 0) {\n        logoImage.style.height = \"100px\";\n        mainNav.classList.add('font-size')\n    } else {\n        logoImage.style.height = \"114px\";\n        mainNav.classList.remove('font-size')\n    }\n\n    // фигурные скобки -- объект\n    // квадратные скобки -- массивы\n\n});\n\nconst cardsWrapper = document.querySelector('.cards-wrapper');\nconst itCards = document.querySelector('.it-cards');\nconsole.log('scripts loaded');\n\n\nwindow.addEventListener('scroll', function() {\n    const logoImage = document.querySelector('.logo img');\n    const mainNav = document.getElementById('mainNav');\n\n    if (window.pageYOffset > 0) {\n        logoImage.style.height = \"100px\";\n        mainNav.classList.add('font-size')\n    } else {\n        logoImage.style.height = \"114px\";\n        mainNav.classList.remove('font-size')\n    }\n    \n    \n  \n  \n  // Run\n  \n  \n    \n  \n\n    // фигурные скобки -- объект\n    // квадратные скобки -- массивы\n\n});\n\n\n\n\n\nconst time = document.getElementById('time'),\n  greeting = document.getElementById('greeting'),\n  name = document.getElementById('name'),\n  focus = document.getElementById('mood');\n\n// Options\nconst showAmPm = true;\n\n// Show Time\nfunction showTime() {\n  let today = new Date(),\n    hour = today.getHours(),\n    min = today.getMinutes(),\n    sec = today.getSeconds();\n\n  // Set AM or PM\n  const amPm = hour >= 12 ? 'PM' : 'AM';\n\n  // 12hr Format\n \n\n  // Output Time\n  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(\n    sec\n  )} ${showAmPm ? amPm : ''}`;\n\n  setTimeout(showTime, 1000);\n}\n\n// Add Zeros\nfunction addZero(n) {\n  return (parseInt(n, 10) < 10 ? '0' : '') + n;\n}\n\n// Set Background and Greeting\nfunction setBgGreet() {\n  let today = new Date(),\n    hour = today.getHours();\n\n   \n    if (hour < 6) {\n      // Night\n\n      greeting.textContent = 'Good Night, ';\n  }\n  else if (hour >= 17) {\n    // Evening\n    \n    greeting.textContent = 'Good Evening, ';\n    document.body.style.color = 'white';\n  }\n  else if (hour >= 11) {\n    // Afternoon\n   \n    greeting.textContent = 'Good Afternoon, ';\n  }\n  else if (hour >= 6) {\n    // Morning\n   \n    greeting.textContent = 'Good Morning, ';\n  } \n  \n    \n  \n}\n\n// Get Name\nfunction getName() {\n  if (localStorage.getItem('name') === null) {\n    name.textContent = 'Enter Name';\n  } else {\n    name.textContent = localStorage.getItem('name');\n  }\n}\n\n// Set Name\nfunction setName(e) {\n  if (e.type === 'keypress') {\n    // Make sure enter is pressed\n    if (e.which == 13 || e.keyCode == 13) {\n      localStorage.setItem('name', e.target.innerText);\n      name.blur();\n    }\n  } else {\n    localStorage.setItem('name', e.target.innerText);\n  }\n}\n\n// Get Focus\nfunction getFocus() {\n  if (localStorage.getItem('mood') === null) {\n    focus.textContent = 'Enter Mood';\n  } else {\n    focus.textContent = localStorage.getItem('mood');\n  }\n}\n\n// Set Focus\nfunction setFocus(e) {\n  if (e.type === 'keypress') {\n    // Make sure enter is pressed\n    if (e.which == 13 || e.keyCode == 13) {\n      localStorage.setItem('mood', e.target.innerText);\n      focus.blur();\n    }\n  } else {\n    localStorage.setItem('mood', e.target.innerText);\n  }\n}\n\n\nname.addEventListener('keypress', setName);\nname.addEventListener('blur', setName);\nfocus.addEventListener('keypress', setFocus);\nfocus.addEventListener('blur', setFocus);\n\n// Run\nshowTime();\nsetBgGreet();\ngetName();\ngetFocus();\n\n\nlet img = document.querySelector(\".face\");\nlet magic = document.querySelector(\".card2\")\n\nimg.addEventListener(\"mouseout\",function(e){\n  \n  e.target.classList.remove(\"back\");\n  e.target.classList.remove(\"front\")\n  e.target.classList.add(\"back-out\");\n  alet\n  \n});\n// magic.addEventListener(\"mouseout\",function(){\n  // magic.classList.remove(\"main\");\n// });\n\n\n//# sourceURL=webpack://projectnew/./src/index.js?");

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