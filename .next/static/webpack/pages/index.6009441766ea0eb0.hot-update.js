"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Title */ \"./components/Title.js\");\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    var data = param.data;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                title: \"Home\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Next js\\\\crack course\\\\blog\\\\pages\\\\index.js\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Home page\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Next js\\\\crack course\\\\blog\\\\pages\\\\index.js\",\n                lineNumber: 6,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Lorem, ipsum dolor sit amet con sectetur adipisicing elit. Veniam velit co nsectetur quaerat mollitia illum hic ducimus optio quas quasi laborum.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Next js\\\\crack course\\\\blog\\\\pages\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            data.map(function(post, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"post.title\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Next js\\\\crack course\\\\blog\\\\pages\\\\index.js\",\n                            lineNumber: 16,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"post.body\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Next js\\\\crack course\\\\blog\\\\pages\\\\index.js\",\n                            lineNumber: 17,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, i, true, {\n                    fileName: \"D:\\\\Next js\\\\crack course\\\\blog\\\\pages\\\\index.js\",\n                    lineNumber: 15,\n                    columnNumber: 21\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Next js\\\\crack course\\\\blog\\\\pages\\\\index.js\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQXVDOztBQUN4QixTQUFTQyxJQUFJLENBQUMsS0FBTSxFQUFFO1FBQVIsSUFBSyxHQUFMLEtBQU0sQ0FBTEMsSUFBSTs7SUFDOUIscUJBQ0ksOERBQUNDLEtBQUc7OzBCQUNBLDhEQUFDSCx5REFBSztnQkFBQ0ksS0FBSyxFQUFDLE1BQU07Ozs7O29CQUFFOzBCQUNyQiw4REFBQ0MsSUFBRTswQkFBQyxXQUFTOzs7OztvQkFBSzswQkFDbEIsOERBQUNDLEdBQUM7MEJBQUMsbUpBR0g7Ozs7O29CQUFJO1lBR0VKLElBQUksQ0FBQ0ssR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBQ0MsQ0FBQyxFQUFHO2dCQUNsQixxQkFDQyw4REFBQ04sS0FBRzs7c0NBQ0EsOERBQUNPLElBQUU7c0NBQUMsWUFBVTs7Ozs7aUNBQUs7c0NBQ25CLDhEQUFDSixHQUFDO3NDQUFDLFdBQVM7Ozs7O2lDQUFJOzttQkFGVkcsQ0FBQzs7Ozt5QkFHTCxDQUNOO2FBQ0QsQ0FBQzs7Ozs7O1lBRU4sQ0FDVDtDQUNKO0FBdEJ1QlIsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaXRsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZVwiXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2RhdGF9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxUaXRsZSB0aXRsZT0nSG9tZScvPlxyXG4gICAgICAgICAgICA8aDE+SG9tZSBwYWdlPC9oMT5cclxuICAgICAgICAgICAgPHA+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvblxyXG4gICAgICAgICAgICAgICAgc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gVmVuaWFtIHZlbGl0IGNvXHJcbiAgICAgICAgICAgICAgICBuc2VjdGV0dXIgcXVhZXJhdCBtb2xsaXRpYSBpbGx1bSBoaWMgZHVjaW11cyBvcHRpbyBxdWFzIHF1YXNpIGxhYm9ydW0uXHJcbiAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBkYXRhLm1hcCgocG9zdCxpKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnBvc3QudGl0bGU8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5wb3N0LmJvZHk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpe1xyXG4gICAgLy8gZmVjaGluZyBhcGlcclxuICAgIGNvbnN0IHJlcz0gYXdhaXQgZmV0Y2ggKFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzP19saW1pdD0xMFwiKVxyXG4gICAgY29uc3QgZGF0YT1hd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIGRhdGFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiVGl0bGUiLCJIb21lIiwiZGF0YSIsImRpdiIsInRpdGxlIiwiaDEiLCJwIiwibWFwIiwicG9zdCIsImkiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});