"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "components_home_latest_jsx";
exports.ids = ["components_home_latest_jsx"];
exports.modules = {

/***/ "./components/home/latest.jsx":
/*!************************************!*\
  !*** ./components/home/latest.jsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Latest)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _lib_api_position__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/api/position */ \"./lib/api/position.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_userContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/userContext */ \"./context/userContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _lib_api_position__WEBPACK_IMPORTED_MODULE_2__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _lib_api_position__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction Latest() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { state , dispatch  } = react__WEBPACK_IMPORTED_MODULE_4___default().useContext(_context_userContext__WEBPACK_IMPORTED_MODULE_5__.UserContext);\n    const { data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        queryKey: [\n            \"positions\"\n        ],\n        queryFn: _lib_api_position__WEBPACK_IMPORTED_MODULE_2__.getAllPositions\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"container mx-auto py-20 flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-6xl w-full p-4 lg:p-6 shadow-[6px_6px_24px_rgba(0,0,0,0.12)] bg-white space-y-5\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-center text-[32px] leading-[42px] font-poppins font-semibold\",\n                    children: \"Latest open positions\"\n                }, void 0, false, {\n                    fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-1 lg:grid-cols-3 gap-8 \",\n                    children: data?.data?.positions?.slice(0, 3).map((position, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-5 shadow-[0px_0px_16px_rgba(68,68,68,0.08)] bg-white border-b-2 border-addgray\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-lg font-semibold font-poppins\",\n                                    children: position.jobTitle\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-sm font-semibold text-primary font-inter\",\n                                    children: position.rate\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"py-5\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                        className: \"border-[#E7E7E7]\"\n                                    }, void 0, false, {\n                                        fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 33\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between items-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-inter text-xs leading-[22px] text-addblack \",\n                                            children: position.location\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-inter text-xs leading-[22px] text-addblack \",\n                                            children: position.jobType\n                                        }, void 0, false, {\n                                            fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm text-addgray\",\n                                    children: [\n                                        position.description?.slice(0, 120),\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, key, true, {\n                            fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"text-white font-semibold font-inter p-3 bg-primary hover:bg-opacity-80 active:bg-opacity-60\",\n                        onClick: ()=>{\n                            router.push(\"/professional\");\n                            dispatch({\n                                type: \"SET_ACTIVE_TAB\",\n                                payload: \"postions\"\n                            });\n                        },\n                        children: \"Check open positions\"\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\components\\\\home\\\\latest.jsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvbGF0ZXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNJO0FBQ2I7QUFDZDtBQUMwQjtBQUVyQyxTQUFTSyxTQUFTO0lBQzdCLE1BQU1DLFNBQVNKLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVLLE1BQUssRUFBRUMsU0FBUSxFQUFFLEdBQUdMLHVEQUFnQixDQUFDQyw2REFBV0E7SUFFeEQsTUFBTSxFQUFFTSxLQUFJLEVBQUUsR0FBR1YsK0RBQVFBLENBQUM7UUFDdEJXLFVBQVU7WUFBQztTQUFZO1FBQ3ZCQyxTQUFTWCw4REFBZUE7SUFDNUI7SUFFQSxxQkFDSSw4REFBQ1k7UUFBUUMsV0FBVTtrQkFDZiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ1gsOERBQUNFO29CQUFHRixXQUFVOzhCQUFvRTs7Ozs7OzhCQUVsRiw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ1ZKLE1BQU1BLE1BQU1PLFdBQVdDLE1BQU0sR0FBRyxHQUFHQyxHQUFHLENBQUMsQ0FBQ0MsVUFBVUMsb0JBQy9DLDhEQUFDTjs0QkFBY0QsV0FBVTs7OENBQ3JCLDhEQUFDRTtvQ0FBR0YsV0FBVTs4Q0FBc0NNLFNBQVNFLFFBQVE7Ozs7Ozs4Q0FDckUsOERBQUNDO29DQUFFVCxXQUFVOzhDQUFpRE0sU0FBU0ksSUFBSTs7Ozs7OzhDQUMzRSw4REFBQ1Q7b0NBQUlELFdBQVU7OENBQ1gsNEVBQUNXO3dDQUFHWCxXQUFVOzs7Ozs7Ozs7Ozs4Q0FHbEIsOERBQUNDO29DQUFJRCxXQUFVOztzREFDWCw4REFBQ1M7NENBQUVULFdBQVU7c0RBQW9ETSxTQUFTTSxRQUFROzs7Ozs7c0RBQ2xGLDhEQUFDSDs0Q0FBRVQsV0FBVTtzREFBb0RNLFNBQVNPLE9BQU87Ozs7Ozs7Ozs7Ozs4Q0FHckYsOERBQUNaO29DQUFJRCxXQUFVOzt3Q0FBd0JNLFNBQVNRLFdBQVcsRUFBRVYsTUFBTSxHQUFHO3dDQUFLOzs7Ozs7OzsyQkFackVHOzs7Ozs7Ozs7OzhCQWlCbEIsOERBQUNOO29CQUFJRCxXQUFVOzhCQUNYLDRFQUFDZTt3QkFDR2YsV0FBVTt3QkFDVmdCLFNBQVMsSUFBTTs0QkFDWHhCLE9BQU95QixJQUFJLENBQUM7NEJBQ1p2QixTQUFTO2dDQUFFd0IsTUFBTTtnQ0FBa0JDLFNBQVM7NEJBQVc7d0JBQzNEO2tDQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3JCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2NvbXBvbmVudHMvaG9tZS9sYXRlc3QuanN4P2FmMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCB7IGdldEFsbFBvc2l0aW9ucyB9IGZyb20gXCJAL2xpYi9hcGkvcG9zaXRpb25cIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L3VzZXJDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXRlc3QoKSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSBSZWFjdC51c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KHtcclxuICAgICAgICBxdWVyeUtleTogW1wicG9zaXRpb25zXCJdLFxyXG4gICAgICAgIHF1ZXJ5Rm46IGdldEFsbFBvc2l0aW9ucyxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHktMjAgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCB3LWZ1bGwgcC00IGxnOnAtNiBzaGFkb3ctWzZweF82cHhfMjRweF9yZ2JhKDAsMCwwLDAuMTIpXSBiZy13aGl0ZSBzcGFjZS15LTVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LVszMnB4XSBsZWFkaW5nLVs0MnB4XSBmb250LXBvcHBpbnMgZm9udC1zZW1pYm9sZFwiPkxhdGVzdCBvcGVuIHBvc2l0aW9uczwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIGxnOmdyaWQtY29scy0zIGdhcC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhPy5kYXRhPy5wb3NpdGlvbnM/LnNsaWNlKDAsIDMpLm1hcCgocG9zaXRpb24sIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJwLTUgc2hhZG93LVswcHhfMHB4XzE2cHhfcmdiYSg2OCw2OCw2OCwwLjA4KV0gYmctd2hpdGUgYm9yZGVyLWItMiBib3JkZXItYWRkZ3JheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBmb250LXBvcHBpbnNcIj57cG9zaXRpb24uam9iVGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LXByaW1hcnkgZm9udC1pbnRlclwiPntwb3NpdGlvbi5yYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJib3JkZXItWyNFN0U3RTddXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1pbnRlciB0ZXh0LXhzIGxlYWRpbmctWzIycHhdIHRleHQtYWRkYmxhY2sgXCI+e3Bvc2l0aW9uLmxvY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LWludGVyIHRleHQteHMgbGVhZGluZy1bMjJweF0gdGV4dC1hZGRibGFjayBcIj57cG9zaXRpb24uam9iVHlwZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1hZGRncmF5XCI+e3Bvc2l0aW9uLmRlc2NyaXB0aW9uPy5zbGljZSgwLCAxMjApfS4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBmb250LWludGVyIHAtMyBiZy1wcmltYXJ5IGhvdmVyOmJnLW9wYWNpdHktODAgYWN0aXZlOmJnLW9wYWNpdHktNjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9wcm9mZXNzaW9uYWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0FDVElWRV9UQUJcIiwgcGF5bG9hZDogXCJwb3N0aW9uc1wiIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2sgb3BlbiBwb3NpdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsImdldEFsbFBvc2l0aW9ucyIsInVzZVJvdXRlciIsIlJlYWN0IiwiVXNlckNvbnRleHQiLCJMYXRlc3QiLCJyb3V0ZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwidXNlQ29udGV4dCIsImRhdGEiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJwb3NpdGlvbnMiLCJzbGljZSIsIm1hcCIsInBvc2l0aW9uIiwia2V5Iiwiam9iVGl0bGUiLCJwIiwicmF0ZSIsImhyIiwibG9jYXRpb24iLCJqb2JUeXBlIiwiZGVzY3JpcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCIsInR5cGUiLCJwYXlsb2FkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/latest.jsx\n");

/***/ }),

/***/ "./context/userContext.js":
/*!********************************!*\
  !*** ./context/userContext.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext),\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    user: null,\n    token: null,\n    currentTab: \"active\",\n    xlsx: [],\n    activeTab: \"join\"\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case \"SET_USER\":\n            return {\n                ...state,\n                user: action.payload.user,\n                token: action.payload.token\n            };\n        case \"LOGOUT\":\n            return {\n                ...state,\n                user: null,\n                token: null\n            };\n        case \"SET_CURRENT_TAB\":\n            return {\n                ...state,\n                currentTab: action.payload\n            };\n        case \"SET_XLSX\":\n            return {\n                ...state,\n                xlsx: action.payload\n            };\n        case \"SET_ACTIVE_TAB\":\n            return {\n                ...state,\n                activeTab: action.payload\n            };\n        default:\n            return state;\n    }\n};\nconst UserProvider = ({ children  })=>{\n    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UserContext.Provider, {\n        value: {\n            state,\n            dispatch\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"H:\\\\Fiverr\\\\Works\\\\nekwow7\\\\app\\\\frontend\\\\context\\\\userContext.js\",\n        lineNumber: 54,\n        columnNumber: 12\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L3VzZXJDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUQ7QUFFbEQsTUFBTUcsNEJBQWNGLG9EQUFhQSxHQUFHO0FBRTNDLE1BQU1HLGVBQWU7SUFDakJDLE1BQU0sSUFBSTtJQUNWQyxPQUFPLElBQUk7SUFDWEMsWUFBWTtJQUNaQyxNQUFNLEVBQUU7SUFDUkMsV0FBVztBQUNmO0FBRUEsTUFBTUMsVUFBVSxDQUFDQyxPQUFPQyxTQUFXO0lBQy9CLE9BQVFBLE9BQU9DLElBQUk7UUFDZixLQUFLO1lBQ0QsT0FBTztnQkFDSCxHQUFHRixLQUFLO2dCQUNSTixNQUFNTyxPQUFPRSxPQUFPLENBQUNULElBQUk7Z0JBQ3pCQyxPQUFPTSxPQUFPRSxPQUFPLENBQUNSLEtBQUs7WUFDL0I7UUFFSixLQUFLO1lBQ0QsT0FBTztnQkFDSCxHQUFHSyxLQUFLO2dCQUNSTixNQUFNLElBQUk7Z0JBQ1ZDLE9BQU8sSUFBSTtZQUNmO1FBQ0osS0FBSztZQUNELE9BQU87Z0JBQ0gsR0FBR0ssS0FBSztnQkFDUkosWUFBWUssT0FBT0UsT0FBTztZQUM5QjtRQUVKLEtBQUs7WUFDRCxPQUFPO2dCQUNILEdBQUdILEtBQUs7Z0JBQ1JILE1BQU1JLE9BQU9FLE9BQU87WUFDeEI7UUFFSixLQUFLO1lBQ0QsT0FBTztnQkFDSCxHQUFHSCxLQUFLO2dCQUNSRixXQUFXRyxPQUFPRSxPQUFPO1lBQzdCO1FBRUo7WUFDSSxPQUFPSDtJQUNmO0FBQ0o7QUFFTyxNQUFNSSxlQUFlLENBQUMsRUFBRUMsU0FBUSxFQUFFLEdBQUs7SUFDMUMsTUFBTSxDQUFDTCxPQUFPTSxTQUFTLEdBQUdmLGlEQUFVQSxDQUFDUSxTQUFTTjtJQUU5QyxxQkFBTyw4REFBQ0QsWUFBWWUsUUFBUTtRQUFDQyxPQUFPO1lBQUVSO1lBQU9NO1FBQVM7a0JBQUlEOzs7Ozs7QUFDOUQsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vY29udGV4dC91c2VyQ29udGV4dC5qcz8yN2ZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VyOiBudWxsLFxyXG4gICAgdG9rZW46IG51bGwsXHJcbiAgICBjdXJyZW50VGFiOiBcImFjdGl2ZVwiLFxyXG4gICAgeGxzeDogW10sXHJcbiAgICBhY3RpdmVUYWI6IFwiam9pblwiLFxyXG59O1xyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcIlNFVF9VU0VSXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgICAgICAgICAgICB0b2tlbjogYWN0aW9uLnBheWxvYWQudG9rZW4sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgXCJMT0dPVVRcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHRva2VuOiBudWxsLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgXCJTRVRfQ1VSUkVOVF9UQUJcIjpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhYjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNhc2UgXCJTRVRfWExTWFwiOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB4bHN4OiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2FzZSBcIlNFVF9BQ1RJVkVfVEFCXCI6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYjogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICByZXR1cm4gPFVzZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCB9fT57Y2hpbGRyZW59PC9Vc2VyQ29udGV4dC5Qcm92aWRlcj47XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiVXNlckNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwidG9rZW4iLCJjdXJyZW50VGFiIiwieGxzeCIsImFjdGl2ZVRhYiIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiVXNlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/userContext.js\n");

/***/ }),

/***/ "./lib/api/position.js":
/*!*****************************!*\
  !*** ./lib/api/position.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changePositionStatus\": () => (/* binding */ changePositionStatus),\n/* harmony export */   \"createPosition\": () => (/* binding */ createPosition),\n/* harmony export */   \"deletePosition\": () => (/* binding */ deletePosition),\n/* harmony export */   \"editPosition\": () => (/* binding */ editPosition),\n/* harmony export */   \"getAllPositions\": () => (/* binding */ getAllPositions),\n/* harmony export */   \"getPositionsByActiveOrClosedStatus\": () => (/* binding */ getPositionsByActiveOrClosedStatus),\n/* harmony export */   \"getPositionsByInactiveStatus\": () => (/* binding */ getPositionsByInactiveStatus),\n/* harmony export */   \"getPositionsByOrderStatus\": () => (/* binding */ getPositionsByOrderStatus),\n/* harmony export */   \"getSinglePositionById\": () => (/* binding */ getSinglePositionById)\n/* harmony export */ });\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/axios */ \"./utils/axios.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_axios__WEBPACK_IMPORTED_MODULE_0__]);\n_utils_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst createPosition = async (data)=>{\n    try {\n        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"/api/v1/positions/create\", data);\n        return response;\n    } catch (err) {\n        return err;\n    }\n};\nconst getAllPositions = async ({ page =1 , limit =9  })=>{\n    try {\n        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/api/v1/positions/positions?page=${page}&limit=${limit}`);\n        return response;\n    } catch (err) {\n        return err;\n    }\n};\nconst getPositionsByActiveOrClosedStatus = async ({ status , search  })=>{\n    try {\n        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/api/v1/positions/active-closed?status=${status}&search=${search}`);\n        return response;\n    } catch (err) {\n        return err;\n    }\n};\nconst getPositionsByInactiveStatus = async ({ search  })=>{\n    try {\n        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/api/v1/positions/inactive?search=${search}`);\n        return response;\n    } catch (err) {\n        return err;\n    }\n};\nconst getPositionsByOrderStatus = async ({ search  })=>{\n    try {\n        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/api/v1/positions/order?search=${search}`);\n        return response;\n    } catch (err) {\n        return err;\n    }\n};\n// delete position\nconst deletePosition = async (positionId)=>{\n    try {\n        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](`/api/v1/positions/positions/${positionId}`);\n        return response;\n    } catch (err) {\n        return err;\n    }\n};\nconst changePositionStatus = async ({ positionId , status  })=>{\n    try {\n        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(`/api/v1/positions/positions/${positionId}`, {\n            status\n        });\n        return response;\n    } catch (err) {\n        return err;\n    }\n};\nconst getSinglePositionById = async (positionId)=>{\n    try {\n        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`/api/v1/positions/positions/${positionId}`);\n        return response;\n    } catch (err) {\n        return err;\n    }\n};\nconst editPosition = async ({ positionId , data  })=>{\n    try {\n        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(`/api/v1/positions/positions/edit/${positionId}`, data);\n        return response;\n    } catch (err) {\n        return err;\n    }\n};\n// named export\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBpL3Bvc2l0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDbEMsTUFBTUMsaUJBQWlCLE9BQU9DLE9BQVM7SUFDbkMsSUFBSTtRQUNBLE1BQU1DLFdBQVcsTUFBTUgseURBQVUsQ0FBQyw0QkFBNEJFO1FBQzlELE9BQU9DO0lBQ1gsRUFBRSxPQUFPRSxLQUFLO1FBQ1YsT0FBT0E7SUFDWDtBQUNKO0FBRUEsTUFBTUMsa0JBQWtCLE9BQU8sRUFBRUMsTUFBTyxFQUFDLEVBQUVDLE9BQVEsRUFBQyxFQUFFLEdBQUs7SUFDdkQsSUFBSTtRQUNBLE1BQU1MLFdBQVcsTUFBTUgsd0RBQVMsQ0FBQyxDQUFDLGlDQUFpQyxFQUFFTyxLQUFLLE9BQU8sRUFBRUMsTUFBTSxDQUFDO1FBQzFGLE9BQU9MO0lBQ1gsRUFBRSxPQUFPRSxLQUFLO1FBQ1YsT0FBT0E7SUFDWDtBQUNKO0FBRUEsTUFBTUsscUNBQXFDLE9BQU8sRUFBRUMsT0FBTSxFQUFFQyxPQUFNLEVBQUUsR0FBSztJQUNyRSxJQUFJO1FBQ0EsTUFBTVQsV0FBVyxNQUFNSCx3REFBUyxDQUFDLENBQUMsdUNBQXVDLEVBQUVXLE9BQU8sUUFBUSxFQUFFQyxPQUFPLENBQUM7UUFDcEcsT0FBT1Q7SUFDWCxFQUFFLE9BQU9FLEtBQUs7UUFDVixPQUFPQTtJQUNYO0FBQ0o7QUFFQSxNQUFNUSwrQkFBK0IsT0FBTyxFQUFFRCxPQUFNLEVBQUUsR0FBSztJQUN2RCxJQUFJO1FBQ0EsTUFBTVQsV0FBVyxNQUFNSCx3REFBUyxDQUFDLENBQUMsa0NBQWtDLEVBQUVZLE9BQU8sQ0FBQztRQUM5RSxPQUFPVDtJQUNYLEVBQUUsT0FBT0UsS0FBSztRQUNWLE9BQU9BO0lBQ1g7QUFDSjtBQUVBLE1BQU1TLDRCQUE0QixPQUFPLEVBQUVGLE9BQU0sRUFBRSxHQUFLO0lBQ3BELElBQUk7UUFDQSxNQUFNVCxXQUFXLE1BQU1ILHdEQUFTLENBQUMsQ0FBQywrQkFBK0IsRUFBRVksT0FBTyxDQUFDO1FBQzNFLE9BQU9UO0lBQ1gsRUFBRSxPQUFPRSxLQUFLO1FBQ1YsT0FBT0E7SUFDWDtBQUNKO0FBRUEsa0JBQWtCO0FBQ2xCLE1BQU1VLGlCQUFpQixPQUFPQyxhQUFlO0lBQ3pDLElBQUk7UUFDQSxNQUFNYixXQUFXLE1BQU1ILDhEQUFZLENBQUMsQ0FBQyw0QkFBNEIsRUFBRWdCLFdBQVcsQ0FBQztRQUMvRSxPQUFPYjtJQUNYLEVBQUUsT0FBT0UsS0FBSztRQUNWLE9BQU9BO0lBQ1g7QUFDSjtBQUVBLE1BQU1hLHVCQUF1QixPQUFPLEVBQUVGLFdBQVUsRUFBRUwsT0FBTSxFQUFFLEdBQUs7SUFDM0QsSUFBSTtRQUNBLE1BQU1SLFdBQVcsTUFBTUgsMERBQVcsQ0FBQyxDQUFDLDRCQUE0QixFQUFFZ0IsV0FBVyxDQUFDLEVBQUU7WUFBRUw7UUFBTztRQUN6RixPQUFPUjtJQUNYLEVBQUUsT0FBT0UsS0FBSztRQUNWLE9BQU9BO0lBQ1g7QUFDSjtBQUVBLE1BQU1lLHdCQUF3QixPQUFPSixhQUFlO0lBQ2hELElBQUk7UUFDQSxNQUFNYixXQUFXLE1BQU1ILHdEQUFTLENBQUMsQ0FBQyw0QkFBNEIsRUFBRWdCLFdBQVcsQ0FBQztRQUM1RSxPQUFPYjtJQUNYLEVBQUUsT0FBT0UsS0FBSztRQUNWLE9BQU9BO0lBQ1g7QUFDSjtBQUVBLE1BQU1nQixlQUFlLE9BQU8sRUFBRUwsV0FBVSxFQUFFZCxLQUFJLEVBQUUsR0FBSztJQUNqRCxJQUFJO1FBQ0EsTUFBTUMsV0FBVyxNQUFNSCwwREFBVyxDQUFDLENBQUMsaUNBQWlDLEVBQUVnQixXQUFXLENBQUMsRUFBRWQ7UUFDckYsT0FBT0M7SUFDWCxFQUFFLE9BQU9FLEtBQUs7UUFDVixPQUFPQTtJQUNYO0FBQ0o7QUFFQSxlQUFlO0FBV2IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL2xpYi9hcGkvcG9zaXRpb24uanM/ZTM3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcIkAvdXRpbHMvYXhpb3NcIjtcclxuY29uc3QgY3JlYXRlUG9zaXRpb24gPSBhc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3YxL3Bvc2l0aW9ucy9jcmVhdGVcIiwgZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycjtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGdldEFsbFBvc2l0aW9ucyA9IGFzeW5jICh7IHBhZ2UgPSAxLCBsaW1pdCA9IDkgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS92MS9wb3NpdGlvbnMvcG9zaXRpb25zP3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWApO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQb3NpdGlvbnNCeUFjdGl2ZU9yQ2xvc2VkU3RhdHVzID0gYXN5bmMgKHsgc3RhdHVzLCBzZWFyY2ggfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS92MS9wb3NpdGlvbnMvYWN0aXZlLWNsb3NlZD9zdGF0dXM9JHtzdGF0dXN9JnNlYXJjaD0ke3NlYXJjaH1gKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UG9zaXRpb25zQnlJbmFjdGl2ZVN0YXR1cyA9IGFzeW5jICh7IHNlYXJjaCB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3YxL3Bvc2l0aW9ucy9pbmFjdGl2ZT9zZWFyY2g9JHtzZWFyY2h9YCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGVycjtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBvc2l0aW9uc0J5T3JkZXJTdGF0dXMgPSBhc3luYyAoeyBzZWFyY2ggfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS92MS9wb3NpdGlvbnMvb3JkZXI/c2VhcmNoPSR7c2VhcmNofWApO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyBkZWxldGUgcG9zaXRpb25cclxuY29uc3QgZGVsZXRlUG9zaXRpb24gPSBhc3luYyAocG9zaXRpb25JZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgL2FwaS92MS9wb3NpdGlvbnMvcG9zaXRpb25zLyR7cG9zaXRpb25JZH1gKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgY2hhbmdlUG9zaXRpb25TdGF0dXMgPSBhc3luYyAoeyBwb3NpdGlvbklkLCBzdGF0dXMgfSkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBhdGNoKGAvYXBpL3YxL3Bvc2l0aW9ucy9wb3NpdGlvbnMvJHtwb3NpdGlvbklkfWAsIHsgc3RhdHVzIH0pO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBlcnI7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRTaW5nbGVQb3NpdGlvbkJ5SWQgPSBhc3luYyAocG9zaXRpb25JZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS92MS9wb3NpdGlvbnMvcG9zaXRpb25zLyR7cG9zaXRpb25JZH1gKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgZWRpdFBvc2l0aW9uID0gYXN5bmMgKHsgcG9zaXRpb25JZCwgZGF0YSB9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucGF0Y2goYC9hcGkvdjEvcG9zaXRpb25zL3Bvc2l0aW9ucy9lZGl0LyR7cG9zaXRpb25JZH1gLCBkYXRhKTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICByZXR1cm4gZXJyO1xyXG4gICAgfVxyXG59O1xyXG5cclxuLy8gbmFtZWQgZXhwb3J0XHJcbmV4cG9ydCB7XHJcbiAgICBjcmVhdGVQb3NpdGlvbixcclxuICAgIGdldEFsbFBvc2l0aW9ucyxcclxuICAgIGdldFBvc2l0aW9uc0J5QWN0aXZlT3JDbG9zZWRTdGF0dXMsXHJcbiAgICBkZWxldGVQb3NpdGlvbixcclxuICAgIGNoYW5nZVBvc2l0aW9uU3RhdHVzLFxyXG4gICAgZ2V0U2luZ2xlUG9zaXRpb25CeUlkLFxyXG4gICAgZWRpdFBvc2l0aW9uLFxyXG4gICAgZ2V0UG9zaXRpb25zQnlJbmFjdGl2ZVN0YXR1cyxcclxuICAgIGdldFBvc2l0aW9uc0J5T3JkZXJTdGF0dXMsXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImNyZWF0ZVBvc2l0aW9uIiwiZGF0YSIsInJlc3BvbnNlIiwicG9zdCIsImVyciIsImdldEFsbFBvc2l0aW9ucyIsInBhZ2UiLCJsaW1pdCIsImdldCIsImdldFBvc2l0aW9uc0J5QWN0aXZlT3JDbG9zZWRTdGF0dXMiLCJzdGF0dXMiLCJzZWFyY2giLCJnZXRQb3NpdGlvbnNCeUluYWN0aXZlU3RhdHVzIiwiZ2V0UG9zaXRpb25zQnlPcmRlclN0YXR1cyIsImRlbGV0ZVBvc2l0aW9uIiwicG9zaXRpb25JZCIsImRlbGV0ZSIsImNoYW5nZVBvc2l0aW9uU3RhdHVzIiwicGF0Y2giLCJnZXRTaW5nbGVQb3NpdGlvbkJ5SWQiLCJlZGl0UG9zaXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/api/position.js\n");

/***/ }),

/***/ "./utils/axios.js":
/*!************************!*\
  !*** ./utils/axios.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:5000\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInstance);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9heGlvcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxnQkFBZ0JELG9EQUFZLENBQUM7SUFDL0JHLFNBQVNDLHVCQUErQjtBQUM1QztBQUVBLGlFQUFlSCxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi91dGlscy9heGlvcy5qcz9hNzIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvc0luc3RhbmNlO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJheGlvc0luc3RhbmNlIiwiY3JlYXRlIiwiYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/axios.js\n");

/***/ })

};
;