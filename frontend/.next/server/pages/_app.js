/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/auth */ \"./lib/auth.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Layout({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setUser((0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.getUser)());\n    }, [\n        router.asPath\n    ]);\n    const logout = ()=>{\n        (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.removeToken)();\n        (0,_lib_auth__WEBPACK_IMPORTED_MODULE_3__.removeUser)();\n        setUser(null);\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen bg-slate-50 text-slate-900\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"border-b bg-white/90 shadow-sm sticky top-0 z-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            href: \"/\",\n                            className: \"font-semibold text-xl\",\n                            children: \"E-Commerce\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex flex-wrap items-center gap-3 text-sm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/products\",\n                                    className: \"hover:text-sky-600\",\n                                    children: \"Products\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/cart\",\n                                    className: \"hover:text-sky-600\",\n                                    children: \"Cart\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/orders\",\n                                    className: \"hover:text-sky-600\",\n                                    children: \"Orders\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this),\n                                user?.isAdmin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: \"/admin\",\n                                    className: \"hover:text-sky-600\",\n                                    children: \"Admin\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 31\n                                }, this),\n                                user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: logout,\n                                    className: \"ml-2 rounded bg-slate-900 px-3 py-1 text-white\",\n                                    children: \"Logout\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/login\",\n                                            className: \"hover:text-sky-600\",\n                                            children: \"Login\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                                            lineNumber: 35,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/register\",\n                                            className: \"rounded border px-3 py-1 hover:bg-slate-100\",\n                                            children: \"Register\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"mx-auto max-w-6xl px-4 py-8\",\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\components\\\\Layout.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDZTtBQUM2QjtBQUNqQztBQUV6QixTQUFTTyxPQUFPLEVBQUVDLFFBQVEsRUFBaUM7SUFDeEUsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLCtDQUFRQSxDQUFrQjtJQUNsRCxNQUFNUyxTQUFTTCxzREFBU0E7SUFFeEJMLGdEQUFTQSxDQUFDO1FBQ1JTLFFBQVFQLGtEQUFPQTtJQUNqQixHQUFHO1FBQUNRLE9BQU9DLE1BQU07S0FBQztJQUVsQixNQUFNQyxTQUFTO1FBQ2JULHNEQUFXQTtRQUNYQyxxREFBVUE7UUFDVkssUUFBUTtRQUNSQyxPQUFPRyxJQUFJLENBQUM7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9ELFdBQVU7MEJBQ2hCLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNoQixrREFBSUE7NEJBQUNrQixNQUFLOzRCQUFJRixXQUFVO3NDQUF3Qjs7Ozs7O3NDQUNqRCw4REFBQ0c7NEJBQUlILFdBQVU7OzhDQUNiLDhEQUFDaEIsa0RBQUlBO29DQUFDa0IsTUFBSztvQ0FBWUYsV0FBVTs4Q0FBcUI7Ozs7Ozs4Q0FDdEQsOERBQUNoQixrREFBSUE7b0NBQUNrQixNQUFLO29DQUFRRixXQUFVOzhDQUFxQjs7Ozs7OzhDQUNsRCw4REFBQ2hCLGtEQUFJQTtvQ0FBQ2tCLE1BQUs7b0NBQVVGLFdBQVU7OENBQXFCOzs7Ozs7Z0NBQ25EUCxNQUFNVyx5QkFBVyw4REFBQ3BCLGtEQUFJQTtvQ0FBQ2tCLE1BQUs7b0NBQVNGLFdBQVU7OENBQXFCOzs7Ozs7Z0NBQ3BFUCxxQkFDQyw4REFBQ1k7b0NBQU9DLFNBQVNUO29DQUFRRyxXQUFVOzhDQUFpRDs7Ozs7eURBRXBGOztzREFDRSw4REFBQ2hCLGtEQUFJQTs0Q0FBQ2tCLE1BQUs7NENBQVNGLFdBQVU7c0RBQXFCOzs7Ozs7c0RBQ25ELDhEQUFDaEIsa0RBQUlBOzRDQUFDa0IsTUFBSzs0Q0FBWUYsV0FBVTtzREFBOEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXpGLDhEQUFDTztnQkFBS1AsV0FBVTswQkFBK0JSOzs7Ozs7Ozs7Ozs7QUFHckQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtZnJvbnRlbmQvLi9jb21wb25lbnRzL0xheW91dC50c3g/M2M4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBnZXRVc2VyLCByZW1vdmVUb2tlbiwgcmVtb3ZlVXNlciwgQXV0aFVzZXIgfSBmcm9tICcuLi9saWIvYXV0aCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8QXV0aFVzZXIgfCBudWxsPihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFVzZXIoZ2V0VXNlcigpKTtcclxuICB9LCBbcm91dGVyLmFzUGF0aF0pO1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVUb2tlbigpO1xyXG4gICAgcmVtb3ZlVXNlcigpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gYmctc2xhdGUtNTAgdGV4dC1zbGF0ZS05MDBcIj5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJib3JkZXItYiBiZy13aGl0ZS85MCBzaGFkb3ctc20gc3RpY2t5IHRvcC0wIHotMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gZmxleCBtYXgtdy02eGwgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBnYXAtNCBweC00IHB5LTRcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsXCI+RS1Db21tZXJjZTwvTGluaz5cclxuICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgaXRlbXMtY2VudGVyIGdhcC0zIHRleHQtc21cIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2t5LTYwMFwiPlByb2R1Y3RzPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIiBjbGFzc05hbWU9XCJob3Zlcjp0ZXh0LXNreS02MDBcIj5DYXJ0PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL29yZGVyc1wiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2t5LTYwMFwiPk9yZGVyczwvTGluaz5cclxuICAgICAgICAgICAge3VzZXI/LmlzQWRtaW4gJiYgPExpbmsgaHJlZj1cIi9hZG1pblwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2t5LTYwMFwiPkFkbWluPC9MaW5rPn1cclxuICAgICAgICAgICAge3VzZXIgPyAoXHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtsb2dvdXR9IGNsYXNzTmFtZT1cIm1sLTIgcm91bmRlZCBiZy1zbGF0ZS05MDAgcHgtMyBweS0xIHRleHQtd2hpdGVcIj5Mb2dvdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiIGNsYXNzTmFtZT1cImhvdmVyOnRleHQtc2t5LTYwMFwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIGNsYXNzTmFtZT1cInJvdW5kZWQgYm9yZGVyIHB4LTMgcHktMSBob3ZlcjpiZy1zbGF0ZS0xMDBcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy02eGwgcHgtNCBweS04XCI+e2NoaWxkcmVufTwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldFVzZXIiLCJyZW1vdmVUb2tlbiIsInJlbW92ZVVzZXIiLCJ1c2VSb3V0ZXIiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwiYXNQYXRoIiwibG9nb3V0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsImhyZWYiLCJuYXYiLCJpc0FkbWluIiwiYnV0dG9uIiwib25DbGljayIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ }),

/***/ "./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getToken: () => (/* binding */ getToken),\n/* harmony export */   getUser: () => (/* binding */ getUser),\n/* harmony export */   removeToken: () => (/* binding */ removeToken),\n/* harmony export */   removeUser: () => (/* binding */ removeUser),\n/* harmony export */   setToken: () => (/* binding */ setToken),\n/* harmony export */   setUser: () => (/* binding */ setUser)\n/* harmony export */ });\nconst TOKEN_KEY = \"ecom_token\";\nconst USER_KEY = \"ecom_user\";\nconst setToken = (token)=>localStorage.setItem(TOKEN_KEY, token);\nconst getToken = ()=> true ? \"\" : 0;\nconst removeToken = ()=>localStorage.removeItem(TOKEN_KEY);\nconst setUser = (user)=>localStorage.setItem(USER_KEY, JSON.stringify(user));\nconst getUser = ()=>{\n    if (true) return null;\n    const value = localStorage.getItem(USER_KEY);\n    return value ? JSON.parse(value) : null;\n};\nconst removeUser = ()=>localStorage.removeItem(USER_KEY);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFPQSxNQUFNQSxZQUFZO0FBQ2xCLE1BQU1DLFdBQVc7QUFFVixNQUFNQyxXQUFXLENBQUNDLFFBQWtCQyxhQUFhQyxPQUFPLENBQUNMLFdBQVdHLE9BQU87QUFDM0UsTUFBTUcsV0FBVyxJQUFNLEtBQWtCLEdBQWMsS0FBS0YsQ0FBbUMsQ0FBRztBQUNsRyxNQUFNSSxjQUFjLElBQU1KLGFBQWFLLFVBQVUsQ0FBQ1QsV0FBVztBQUU3RCxNQUFNVSxVQUFVLENBQUNDLE9BQW1CUCxhQUFhQyxPQUFPLENBQUNKLFVBQVVXLEtBQUtDLFNBQVMsQ0FBQ0YsT0FBTztBQUN6RixNQUFNRyxVQUFVO0lBQ3JCLElBQUksSUFBa0IsRUFBYSxPQUFPO0lBQzFDLE1BQU1DLFFBQVFYLGFBQWFHLE9BQU8sQ0FBQ047SUFDbkMsT0FBT2MsUUFBUUgsS0FBS0ksS0FBSyxDQUFDRCxTQUFTO0FBQ3JDLEVBQUU7QUFDSyxNQUFNRSxhQUFhLElBQU1iLGFBQWFLLFVBQVUsQ0FBQ1IsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1mcm9udGVuZC8uL2xpYi9hdXRoLnRzP2JmN2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBBdXRoVXNlciB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICBpc0FkbWluOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBUT0tFTl9LRVkgPSAnZWNvbV90b2tlbic7XHJcbmNvbnN0IFVTRVJfS0VZID0gJ2Vjb21fdXNlcic7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0VG9rZW4gPSAodG9rZW46IHN0cmluZykgPT4gbG9jYWxTdG9yYWdlLnNldEl0ZW0oVE9LRU5fS0VZLCB0b2tlbik7XHJcbmV4cG9ydCBjb25zdCBnZXRUb2tlbiA9ICgpID0+IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJycgOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShUT0tFTl9LRVkpIHx8ICcnO1xyXG5leHBvcnQgY29uc3QgcmVtb3ZlVG9rZW4gPSAoKSA9PiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShUT0tFTl9LRVkpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFVzZXIgPSAodXNlcjogQXV0aFVzZXIpID0+IGxvY2FsU3RvcmFnZS5zZXRJdGVtKFVTRVJfS0VZLCBKU09OLnN0cmluZ2lmeSh1c2VyKSk7XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gKCk6IEF1dGhVc2VyIHwgbnVsbCA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFVTRVJfS0VZKTtcclxuICByZXR1cm4gdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKSA6IG51bGw7XHJcbn07XHJcbmV4cG9ydCBjb25zdCByZW1vdmVVc2VyID0gKCkgPT4gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVVNFUl9LRVkpO1xyXG4iXSwibmFtZXMiOlsiVE9LRU5fS0VZIiwiVVNFUl9LRVkiLCJzZXRUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldFRva2VuIiwiZ2V0SXRlbSIsInJlbW92ZVRva2VuIiwicmVtb3ZlSXRlbSIsInNldFVzZXIiLCJ1c2VyIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFVzZXIiLCJ2YWx1ZSIsInBhcnNlIiwicmVtb3ZlVXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/auth.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\saksh\\\\Documents\\\\CI CD\\\\frontend\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzBDO0FBQ1g7QUFFaEIsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxxQkFDRSw4REFBQ0gsMERBQU1BO2tCQUNMLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWZyb250ZW5kLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiTGF5b3V0IiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();