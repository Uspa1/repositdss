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

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://projectnew/./src/scss/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n\r\n\r\n\r\n// const mockIt = './dist/mock.json';\r\n// \"use strict\";\r\n// const cardsWrapper = document.getElementById('cards')\r\n// cardsWrapper.style.padding = '50px';\r\n// const url = './dist/mock.json';\r\n// async function getPosts(url) {\r\n//     let response = await fetch(url);\r\n//     if (response.ok) {\r\n//         let json = await response.json();\r\n//         json.cards.forEach((element, index) => {\r\n//             if (index < 2) {\r\n//                 cardsWrapper.innerHTML +=\r\n//                     `\r\n//                         <div class=\"uk-card uk-card-body\">\r\n//                 <h3 class=\"uk-card-title\"> ${element.imgUrl}</h3>\r\n//             </div> `\r\n//             }\r\n//         });\r\n//     } else {\r\n//         alert(\"Ошибка HTTP: \" + response.status);\r\n//     }\r\n// }\r\n// getPosts(url)\r\n\r\nconst cardsWrapper = document.querySelector('.cards-wrapper')\r\nconst itCards = document.querySelector('.it-cards')\r\nconsole.log('scripts loaded')\r\n\r\n\r\nwindow.addEventListener('scroll', function() {\r\n    const logoImage = document.querySelector('.logo img');\r\n    const mainNav = document.getElementById('mainNav');\r\n\r\n    if (window.pageYOffset > 0) {\r\n        logoImage.style.height = \"100px\";\r\n        mainNav.classList.add('font-size')\r\n    } else {\r\n        logoImage.style.height = \"114px\";\r\n        mainNav.classList.remove('font-size')\r\n    }\r\n\r\n    // фигурные скобки -- объект\r\n    // квадратные скобки -- массивы\r\n\r\n});\n\n//# sourceURL=webpack://projectnew/./src/index.js?");

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