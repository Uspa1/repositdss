/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

  
/***/ (() => {

eval("\n\n// const mockIt = './dist/mock.json';\n// \"use strict\";\n// const cardsWrapper = document.getElementById('cards')\n// cardsWrapper.style.padding = '50px';\n// const url = './dist/mock.json';\n// async function getPosts(url) {\n//     let response = await fetch(url);\n//     if (response.ok) {\n//         let json = await response.json();\n//         json.cards.forEach((element, index) => {\n//             if (index < 2) {\n//                 cardsWrapper.innerHTML +=\n//                     `\n//                         <div class=\"uk-card uk-card-body\">\n//                 <h3 class=\"uk-card-title\"> ${element.imgUrl}</h3>\n//             </div> `\n//             }\n//         });\n//     } else {\n//         alert(\"Ошибка HTTP: \" + response.status);\n//     }\n// }\n// getPosts(url)\n\nwindow.addEventListener('scroll', function(){\n    const logoImage = document.querySelector\n    ('.logo img');\n    const mainNav = document.getElementById\n    ('mainNav');\n   \n    if(window.pageYOffset >    0){\n        logoImage.style.height = \"74px\";\n        mainNav.classList.add('bg-black');\n        mainNav.classList.add('txt-white');\n    } else {\n        logoImage.style.height = \"84px\";\n        mainNav.classList.remove('bg-black');\n        mainNav.classList.remove('txt-white');\n    }\n    \n\n});\n\n//# sourceURL=webpack://projectnew/./src/index.js?");

/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n\nconst mockIt = './dist/mock.json';\n\"use strict\";\n\nconst cardsWrapper = document.querySelector('.cards-wrapper')\nconst itCards = document.querySelector('.it-cards')\nconsole.log('scripts loaded')\n\n\n\n\n//# sourceURL=webpack://projectnew/./src/index.js?");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })();