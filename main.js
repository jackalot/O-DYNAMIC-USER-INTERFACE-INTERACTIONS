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

/***/ "./src/createDropDown.js":
/*!*******************************!*\
  !*** ./src/createDropDown.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createDropdown(parent, labelText, options) {\n  const split = labelText.split(' ');\n  const joined = split.join('-');\n  //  creates the label and the text for the label\n  function createLabel() {\n    const x = document.createElement('LABEL');\n    const t = document.createTextNode(labelText);\n    x.setAttribute('for', labelText);\n    x.appendChild(t);\n    parent.appendChild(x);\n  }\n  createLabel();\n  function displayOrHideOptionsDiv() {\n    const optionsDiv = document.querySelector(`#${joined}-optionsDiv`);\n    if (optionsDiv.style.display === 'block') {\n      optionsDiv.style.display = 'none';\n    } else {\n      optionsDiv.style.display = 'block';\n    }\n  }\n  function createDropDownButton() {\n    //  creates the dropdown button, gives it an id, and appends it\n    const dropDownButton = document.createElement('button');\n    dropDownButton.id = `${joined}-dropDownButton`;\n    dropDownButton.setAttribute('name', labelText);\n    dropDownButton.textContent = 'dropdown';\n    parent.appendChild(dropDownButton);\n    dropDownButton.addEventListener('click', displayOrHideOptionsDiv);\n  }\n  createDropDownButton();\n  function createOptionsDiv() {\n    const optionsDiv = document.createElement('div');\n    optionsDiv.id = `${joined}-optionsDiv`;\n    parent.appendChild(optionsDiv);\n    console.log(`#${joined}-optionsDiv`);\n  }\n  createOptionsDiv();\n  function changeDropDownSelection(newValue) {\n    //  changes the current dropdown selection according to which button clicks it\n    const dropDownButton = document.querySelector(`#${joined}-dropDownButton`);\n    dropDownButton.textContent = newValue;\n  }\n  function createOptions() {\n    //    creates the options for the dropdown and makes it so that each option has a button that\n    //    calls changeDropDownSelection with their value.\n    console.log(`#${joined}-optionsDiv`);\n    const optionsDiv = document.querySelector(`#${joined}-optionsDiv`);\n    for (let i = 0; i < options.length; i++) {\n      const newSelection = document.createElement('button');\n      newSelection.textContent = options[i];\n      newSelection.classList.add('dropDown-Options');\n      optionsDiv.appendChild(newSelection);\n      newSelection.addEventListener('click', () => {\n        newSelection.classList.add('currently-Selected');\n        changeDropDownSelection(options[i]);\n      });\n    }\n    parent.appendChild(optionsDiv);\n  }\n  createOptions();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDropdown);\n\n\n//# sourceURL=webpack://o-dynamic-user-interface-interactions/./src/createDropDown.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createDropDown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDropDown */ \"./src/createDropDown.js\");\n\n\nconst body = document.querySelector('body');\n(0,_createDropDown__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(body, 'this is a label', ['option1', 'option2']);\n\n\n//# sourceURL=webpack://o-dynamic-user-interface-interactions/./src/index.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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