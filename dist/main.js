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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.css */ \"./src/scss/style.css\");\n\n\nconsole.log('scripts loaded');\n\nwindow.addEventListener('scroll', function () {\n    const logoImage = document.querySelector('.logo img');\n    const mainNav = document.getElementById('mainNav');\n\n    if (window.pageYOffset > 0) {\n        logoImage.style.height = \"100px\";\n        mainNav.classList.add('font-size');\n    } else {\n        logoImage.style.height = \"114px\";\n        mainNav.classList.remove('font-size');\n    }\n    window.addEventListener('scroll', function () {\n        const mybutton = document.getElementById('myBtn');\n\n        if (window.pageYOffset > 0) {\n\n            mybutton.classList.add('visible');\n        } else {\n\n            mybutton.classList.remove('visible');\n        }\n    });\n\n    // Run\n\n\n    // фигурные скобки -- объект\n    // квадратные скобки -- массивы\n});\n\nconst time = document.getElementById('time'),\n      greeting = document.getElementById('greeting'),\n      name = document.getElementById('name'),\n      focus = document.getElementById('mood');\n\n// Options\nconst showAmPm = true;\n\n// Show Time\nfunction showTime() {\n    let today = new Date(),\n        hour = today.getHours(),\n        min = today.getMinutes(),\n        sec = today.getSeconds();\n\n    // Set AM or PM\n    const amPm = hour >= 12 ? 'PM' : 'AM';\n\n    // 12hr Format\n\n\n    // Output Time\n    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;\n\n    setTimeout(showTime, 1000);\n}\n\n// Add Zeros\nfunction addZero(n) {\n    return (parseInt(n, 10) < 10 ? '0' : '') + n;\n}\n\n// Set Background and Greeting\nfunction setBgGreet() {\n    let today = new Date(),\n        hour = today.getHours();\n\n    if (hour < 6) {\n        // Night\n\n        greeting.textContent = 'Good Night, ';\n    } else if (hour >= 17) {\n        // Evening\n\n        greeting.textContent = 'Good Evening, ';\n        document.body.style.color = 'white';\n    } else if (hour >= 11) {\n        // Afternoon\n\n        greeting.textContent = 'Good Afternoon, ';\n    } else if (hour >= 6) {\n        // Morning\n\n        greeting.textContent = 'Good Morning, ';\n    }\n}\n\n// Get Name\nfunction getName() {\n    if (localStorage.getItem('name') === null) {\n        name.textContent = 'Enter Name';\n    } else {\n        name.textContent = localStorage.getItem('name');\n    }\n}\n\n// Set Name\nfunction setName(e) {\n    if (e.type === 'keypress') {\n        // Make sure enter is pressed\n        if (e.which == 13 || e.keyCode == 13) {\n            localStorage.setItem('name', e.target.innerText);\n            name.blur();\n        }\n    } else {\n        localStorage.setItem('name', e.target.innerText);\n    }\n}\n\n// Get Focus\nfunction getFocus() {\n    if (localStorage.getItem('mood') === null) {\n        focus.textContent = 'Enter Mood';\n    } else {\n        focus.textContent = localStorage.getItem('mood');\n    }\n}\n\n// Set Focus\nfunction setFocus(e) {\n    if (e.type === 'keypress') {\n        // Make sure enter is pressed\n        if (e.which == 13 || e.keyCode == 13) {\n            localStorage.setItem('mood', e.target.innerText);\n            focus.blur();\n        }\n    } else {\n        localStorage.setItem('mood', e.target.innerText);\n    }\n}\n\nname.addEventListener('keypress', setName);\nname.addEventListener('blur', setName);\nfocus.addEventListener('keypress', setFocus);\nfocus.addEventListener('blur', setFocus);\n\n// Run\nshowTime();\nsetBgGreet();\ngetName();\ngetFocus();\n\n//card section\n\n\n// fetch(\"https://uspa1.github.io/repositdss/mock/mock.json\")\n//     .then(data => {\n\n//        console.log(data);\n\n//         return data.json()\n//     })\n//     .then(data => {\n//         let div = document.getElementById('section-3');\n\n\n//         data.cardsIT.forEach((element) => {\n\n\n//             div.innerHTML += `<div class=\"card-container\"><div class=\"card\">\n//            <div class=\"front face\">\n\n//            </div>\n//            <div class=\"back face\">\n//              <h1>${element['name']}</h1>\n//              <p class=\"artist\">Predskazanie</p>\n\n//            </div>\n//          </div>  \n//        </div>`\n//         });\n//         data.cardsItJoke.forEach((element) => {\n//             div.innerHTML += `<div class=\"card-container\">\n\n//                 <div class=\"card\">\n//                     <div class=\"front face\">\n\n//                     </div>\n//                     <div class=\"back face\">\n//                         <h1>${element['name']}</h1>\n//                         <p class=\"artist\">Predskazanie</p>\n\n//                    </div>\n//               </div>\n//             </div>`\n\n//         });\n//         data.cardsItUseful.forEach((element) => {\n//                 div.innerHTML +=` <div class=\"card-container\">\n\n//                     <div class=\"card\">\n//                         <div class=\"front face\">\n\n//                         </div>\n//                         <div class=\"back face\">\n//                             <h1>${element['name']}</h1>\n//                             <p class=\"artist\">Predskazanie</p>\n\n//                         </div>\n//                     </div>\n//                 </div>`\n\n//         });\n\n\n//     })\nconst cardCase = document.getElementById('section-3');\n\nlet counts = 0;\n\nfetch(\"https://uspa1.github.io/repositdss/mock/mock.json\").then(response => {\n    return response.json();\n}).then(data => {\n    firstRendering(data);\n});\n\nfunction firstRendering(cardsArrays) {\n    if (localStorage.getItem('activeGroup')) {\n        renderCards(cardsArrays[Object.keys(cardsArrays)[localStorage.getItem('activeGroup')]]);\n        checkCard();\n    }\n\n    document.querySelectorAll('.btn').forEach((box, index) => {\n\n        box.addEventListener(\"click\", function () {\n            document.cookie = \"active=true; max-age=20\";\n            myInterval();\n            switch (index) {\n                case 0:\n                    //render first cards\n                    localStorage.setItem('activeGroup', 0);\n                    renderCards(cardsArrays[Object.keys(cardsArrays)[localStorage.getItem('activeGroup')]]);\n                    checkCard();\n\n                    break;\n                case 1:\n                    //render second cards\n                    localStorage.setItem('activeGroup', 1);\n                    renderCards(cardsArrays[Object.keys(cardsArrays)[localStorage.getItem('activeGroup')]]);\n                    checkCard();\n\n                    break;\n                case 2:\n                    //render third cards\n                    localStorage.setItem('activeGroup', 2);\n                    renderCards(cardsArrays[Object.keys(cardsArrays)[localStorage.getItem('activeGroup')]]);\n                    checkCard();\n\n                    break;\n            }\n        });\n    });\n}\n\nfunction renderCards(wichArray) {\n    counts++;\n\n    wichArray.forEach((item, index) => {\n        if (localStorage.getItem('currentActive') == index) {\n            cardCase.innerHTML += `<div class=\"card active\">\n            <img src = \"${item.imgUrl}\"> \n            <p>${item.name} </p>\n            </div>`;\n        } else {\n            cardCase.innerHTML += `<div class=\"card \">\n                <img src = \"${item.imgBack}\"> \n                \n                </div>`;\n        }\n    });\n}\n\nfunction checkCard() {\n\n    document.querySelectorAll('.card').forEach((box, index) => box.addEventListener(\"click\", function () {\n        if (!localStorage.getItem('currentActive')) {\n            box.classList.toggle(\"flip\");\n            location.reload();\n            localStorage.setItem('currentActive', index);\n            document.querySelectorAll('.btn ').forEach((box, index) => {\n                box.setAttribute('disabled', true);\n            });\n        } else {\n            alert('карта уже открыта, карты будут доступны спустя 20 секунд');\n        }\n    }));\n}\n\nif (counts > 0 || localStorage.getItem('activeGroup')) {\n    document.querySelectorAll('.btn').forEach((box, index) => {\n        box.setAttribute('disabled', true);\n    });\n}\n\n//localclear\nlet button = document.querySelector('.local');\nbutton.addEventListener(\"click\", function () {\n    localStorage.clear();\n    location.reload();\n    document.querySelectorAll('.btn ').forEach((box, index) => {\n        box.setAttribute('disabled', false);\n    });\n});\nlet myInterval = function () {\n    setInterval(() => {\n        if (!document.cookie.split('=')[1]) {\n            localStorage.clear();\n            location.reload();\n            document.querySelectorAll('.btn').forEach((box, index) => {\n                box.setAttribute('disabled', false);\n            });\n            clearInterval(myInterval);\n        }\n    }, 1000);\n};\n\nconst mybutton = document.getElementById(\"myBtn\");\n\n// When the user scrolls down 20px from the top of the document, show the button\nwindow.onscroll = function () {\n    scrollFunction();\n};\n\nfunction scrollFunction() {\n    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {\n        mybutton.classList.add(\"visible\");\n    } else {\n        mybutton.classList.add(\"unvisible\");\n    }\n}\n\n// When the user clicks on the button, scroll to the top of the document\nfunction topFunction() {\n    document.body.scrollTop = 0; // For Safari\n    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera\n}\n\nmybutton.addEventListener(\"click\", function () {\n    document.body.scrollTop = 0;\n    document.documentElement.scrollTop = 0;\n});\n\n//# sourceURL=webpack://projectnew/./src/index.js?");

/***/ }),

/***/ "./src/scss/style.css":
/*!****************************!*\
  !*** ./src/scss/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://projectnew/./src/scss/style.css?");

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