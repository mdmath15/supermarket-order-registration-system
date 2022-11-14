"use strict";
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

/***/ "./src/config/axios.ts":
/*!*****************************!*\
  !*** ./src/config/axios.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"axiosClient\": () => (/* binding */ axiosClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst axiosClient = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: process.env.API_URL || \"http://localhost:3500/api/v1/\"\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2F4aW9zLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUV6QixNQUFNQyxXQUFXLEdBQUdELG1EQUFrQixDQUFDO0lBQzFDRyxPQUFPLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxPQUFPLElBQUlGLCtCQUErQjtDQUNsRSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvY29uZmlnL2F4aW9zLnRzP2E4ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zQ29uZmlnIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgYXhpb3NDbGllbnQgPSBheGlvc0NvbmZpZy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IHByb2Nlc3MuZW52LkFQSV9VUkwgfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCxcbn0pO1xuIl0sIm5hbWVzIjpbImF4aW9zQ29uZmlnIiwiYXhpb3NDbGllbnQiLCJjcmVhdGUiLCJiYXNlVVJMIiwicHJvY2VzcyIsImVudiIsIkFQSV9VUkwiLCJORVhUX1BVQkxJQ19BUElfVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/config/axios.ts\n");

/***/ }),

/***/ "./src/hooks/index.tsx":
/*!*****************************!*\
  !*** ./src/hooks/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_theme_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/theme/default */ \"./src/styles/theme/default.ts\");\n/* harmony import */ var _useCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useCart */ \"./src/hooks/useCart/index.tsx\");\n/* harmony import */ var _useNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useNotification */ \"./src/hooks/useNotification/index.tsx\");\n\n\n\n\n\nconst AppContext = ({ children  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_useNotification__WEBPACK_IMPORTED_MODULE_4__.NotificationProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_useCart__WEBPACK_IMPORTED_MODULE_3__.CartProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider, {\n                theme: _styles_theme_default__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                children: children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mathe\\\\Desktop\\\\Repositories\\\\teste-shopper\\\\frontend\\\\src\\\\hooks\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mathe\\\\Desktop\\\\Repositories\\\\teste-shopper\\\\frontend\\\\src\\\\hooks\\\\index.tsx\",\n            lineNumber: 9,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mathe\\\\Desktop\\\\Repositories\\\\teste-shopper\\\\frontend\\\\src\\\\hooks\\\\index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDa0Q7QUFDQztBQUNWO0FBQ2dCO0FBRXpELE1BQU1JLFVBQVUsR0FBc0MsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsaUJBQy9ELDhEQUFDRixrRUFBb0I7a0JBQ2pCLDRFQUFDRCxrREFBWTtzQkFDVCw0RUFBQ0YsNERBQWE7Z0JBQUNNLEtBQUssRUFBRUwsNkRBQVk7MEJBQUdJLFFBQVE7Ozs7O3lCQUFpQjs7Ozs7cUJBQ25EOzs7OztpQkFDSTtBQUN6QjtBQUVGLGlFQUFlRCxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvaG9va3MvaW5kZXgudHN4P2M1MzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgRGVmYXVsdFRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWUvZGVmYXVsdFwiO1xuaW1wb3J0IHsgQ2FydFByb3ZpZGVyIH0gZnJvbSBcIi4vdXNlQ2FydFwiO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJvdmlkZXIgfSBmcm9tIFwiLi91c2VOb3RpZmljYXRpb25cIjtcblxuY29uc3QgQXBwQ29udGV4dDogUmVhY3QuRkM8eyBjaGlsZHJlbjogUmVhY3ROb2RlIH0+ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICAgIDxOb3RpZmljYXRpb25Qcm92aWRlcj5cbiAgICAgICAgPENhcnRQcm92aWRlcj5cbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtEZWZhdWx0VGhlbWV9PntjaGlsZHJlbn08L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgIDwvQ2FydFByb3ZpZGVyPlxuICAgIDwvTm90aWZpY2F0aW9uUHJvdmlkZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHBDb250ZXh0O1xuIl0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJEZWZhdWx0VGhlbWUiLCJDYXJ0UHJvdmlkZXIiLCJOb3RpZmljYXRpb25Qcm92aWRlciIsIkFwcENvbnRleHQiLCJjaGlsZHJlbiIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/index.tsx\n");

/***/ }),

/***/ "./src/hooks/useCart/index.tsx":
/*!*************************************!*\
  !*** ./src/hooks/useCart/index.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartProvider\": () => (/* binding */ CartProvider),\n/* harmony export */   \"useCart\": () => (/* binding */ useCart)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/axios */ \"./src/config/axios.ts\");\n/* harmony import */ var _useNotification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../useNotification */ \"./src/hooks/useNotification/index.tsx\");\n\n\n\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)({});\nconst CartProvider = ({ children  })=>{\n    const { handleNotification  } = (0,_useNotification__WEBPACK_IMPORTED_MODULE_4__.useNotification)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const refreshData = ()=>{\n        router.replace(router.asPath);\n    };\n    const handleCart = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(async (cart)=>{\n        try {\n            const response = await _config_axios__WEBPACK_IMPORTED_MODULE_3__.axiosClient.post(\"/carts/create-cart\", {\n                cart\n            });\n            if (response.status !== 200) {\n                throw response;\n            }\n            handleNotification({\n                title: \"Sucesso\",\n                message: \"Seu pedido foi realizado\",\n                type: \"success\"\n            });\n            return refreshData();\n        } catch (error) {\n            if (error.status === 507) {\n                return handleNotification({\n                    title: \"Erro\",\n                    message: \"N\\xe3o h\\xe1 estoque suficiente para seu pedido\",\n                    type: \"alert\"\n                });\n            }\n            return handleNotification({\n                title: \"Erro\",\n                message: \"Erro ao processar seu pedido\",\n                type: \"alert\"\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            handleCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mathe\\\\Desktop\\\\Repositories\\\\teste-shopper\\\\frontend\\\\src\\\\hooks\\\\useCart\\\\index.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\nfunction useCart() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(CartContext);\n    if (!context) {\n        throw new Error(\"useCart must be used within an CartProvider \");\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlQ2FydC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN3QztBQUM4QjtBQUNyQjtBQUNJO0FBcUI5QyxNQUFNTyxXQUFXLGlCQUFHTCxvREFBYSxDQUFDLEVBQUUsQ0FBWSxDQUFDO0FBRWpELE1BQU1NLFlBQVksR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQzFDLE1BQU0sRUFBRUMsa0JBQWtCLEdBQUUsR0FBR0osaUVBQWUsRUFBRTtJQUNoRCxNQUFNSyxNQUFNLEdBQUdYLHNEQUFTLEVBQUU7SUFFMUIsTUFBTVksV0FBVyxHQUFHLElBQU07UUFDdEJELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDRixNQUFNLENBQUNHLE1BQU0sQ0FBQyxDQUFDO0tBQ2pDO0lBRUQsTUFBTUMsVUFBVSxHQUFHWixrREFBVyxDQUFDLE9BQU9hLElBQWdCLEdBQUs7UUFDdkQsSUFBSTtZQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNWiwyREFBZ0IsQ0FHckMsb0JBQW9CLEVBQUU7Z0JBQUVXLElBQUk7YUFBRSxDQUFDO1lBQ2pDLElBQUlDLFFBQVEsQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDekIsTUFBTUYsUUFBUSxDQUFDO2FBQ2xCO1lBRURQLGtCQUFrQixDQUFDO2dCQUNmVSxLQUFLLEVBQUUsU0FBUztnQkFDaEJDLE9BQU8sRUFBRSwwQkFBMEI7Z0JBQ25DQyxJQUFJLEVBQUUsU0FBUzthQUNsQixDQUFDLENBQUM7WUFFSCxPQUFPVixXQUFXLEVBQUUsQ0FBQztTQUN4QixDQUFDLE9BQU9XLEtBQUssRUFBRTtZQUNaLElBQUlBLEtBQUssQ0FBQ0osTUFBTSxLQUFLLEdBQUcsRUFBRTtnQkFDdEIsT0FBT1Qsa0JBQWtCLENBQUM7b0JBQ3RCVSxLQUFLLEVBQUUsTUFBTTtvQkFDYkMsT0FBTyxFQUFFLGlEQUEyQztvQkFDcERDLElBQUksRUFBRSxPQUFPO2lCQUNoQixDQUFDLENBQUM7YUFDTjtZQUNELE9BQU9aLGtCQUFrQixDQUFDO2dCQUN0QlUsS0FBSyxFQUFFLE1BQU07Z0JBQ2JDLE9BQU8sRUFBRSw4QkFBOEI7Z0JBQ3ZDQyxJQUFJLEVBQUUsT0FBTzthQUNoQixDQUFDLENBQUM7U0FDTjtLQUNKLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0ksOERBQUNmLFdBQVcsQ0FBQ2lCLFFBQVE7UUFBQ0MsS0FBSyxFQUFFO1lBQUVWLFVBQVU7U0FBRTtrQkFDdENOLFFBQVE7Ozs7O2lCQUNVLENBQ3pCO0NBQ0wsQ0FBQztBQUVLLFNBQVNpQixPQUFPLEdBQVk7SUFDL0IsTUFBTUMsT0FBTyxHQUFHdkIsaURBQVUsQ0FBQ0csV0FBVyxDQUFDO0lBRXZDLElBQUksQ0FBQ29CLE9BQU8sRUFBRTtRQUNWLE1BQU0sSUFBSUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7S0FDbkU7SUFFRCxPQUFPRCxPQUFPLENBQUM7Q0FDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvaG9va3MvdXNlQ2FydC9pbmRleC50c3g/YmM3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXhpb3NDbGllbnQgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2F4aW9zXCI7XG5pbXBvcnQgeyB1c2VOb3RpZmljYXRpb24gfSBmcm9tIFwiLi4vdXNlTm90aWZpY2F0aW9uXCI7XG5cbmludGVyZmFjZSBDYXJ0IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIGNsaWVudF9uYW1lOiBzdHJpbmc7XG4gICAgZGVsaXZlcl9kYXRlOiBudW1iZXI7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBwcm9kdWN0czogbnVtYmVyW107XG59XG5cbmludGVyZmFjZSBDYXJ0VXBkYXRlIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICBjbGllbnRfbmFtZTogc3RyaW5nO1xuICAgIGRlbGl2ZXJfZGF0ZTogbnVtYmVyO1xuICAgIHByb2R1Y3RzOiB7IGlkOiBudW1iZXI7IHF1YW50aXR5OiBudW1iZXIgfVtdO1xufVxuXG5pbnRlcmZhY2UgQ29udGV4dCB7XG4gICAgaGFuZGxlQ2FydChjYXJ0OiBDYXJ0VXBkYXRlKTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb250ZXh0KTtcblxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCB7IGhhbmRsZU5vdGlmaWNhdGlvbiB9ID0gdXNlTm90aWZpY2F0aW9uKCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCByZWZyZXNoRGF0YSA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnJlcGxhY2Uocm91dGVyLmFzUGF0aCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNhcnQgPSB1c2VDYWxsYmFjayhhc3luYyAoY2FydDogQ2FydFVwZGF0ZSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0NsaWVudC5wb3N0PFxuICAgICAgICAgICAgICAgIENhcnRVcGRhdGUsXG4gICAgICAgICAgICAgICAgQXhpb3NSZXNwb25zZTxDYXJ0PlxuICAgICAgICAgICAgPihcIi9jYXJ0cy9jcmVhdGUtY2FydFwiLCB7IGNhcnQgfSk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaGFuZGxlTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTdWNlc3NvXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJTZXUgcGVkaWRvIGZvaSByZWFsaXphZG9cIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVmcmVzaERhdGEoKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChlcnJvci5zdGF0dXMgPT09IDUwNykge1xuICAgICAgICAgICAgICAgIHJldHVybiBoYW5kbGVOb3RpZmljYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTsOjbyBow6EgZXN0b3F1ZSBzdWZpY2llbnRlIHBhcmEgc2V1IHBlZGlkb1wiLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImFsZXJ0XCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFcnJvXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFcnJvIGFvIHByb2Nlc3NhciBzZXUgcGVkaWRvXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJhbGVydFwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgaGFuZGxlQ2FydCB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9DYXJ0Q29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNhcnQoKTogQ29udGV4dCB7XG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xuXG4gICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInVzZUNhcnQgbXVzdCBiZSB1c2VkIHdpdGhpbiBhbiBDYXJ0UHJvdmlkZXIgXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlQ29udGV4dCIsImF4aW9zQ2xpZW50IiwidXNlTm90aWZpY2F0aW9uIiwiQ2FydENvbnRleHQiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImhhbmRsZU5vdGlmaWNhdGlvbiIsInJvdXRlciIsInJlZnJlc2hEYXRhIiwicmVwbGFjZSIsImFzUGF0aCIsImhhbmRsZUNhcnQiLCJjYXJ0IiwicmVzcG9uc2UiLCJwb3N0Iiwic3RhdHVzIiwidGl0bGUiLCJtZXNzYWdlIiwidHlwZSIsImVycm9yIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZUNhcnQiLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useCart/index.tsx\n");

/***/ }),

/***/ "./src/hooks/useNotification/index.tsx":
/*!*********************************************!*\
  !*** ./src/hooks/useNotification/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NotificationContext\": () => (/* binding */ NotificationContext),\n/* harmony export */   \"NotificationProvider\": () => (/* binding */ NotificationProvider),\n/* harmony export */   \"useNotification\": () => (/* binding */ useNotification)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst NotificationContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst NotificationProvider = ({ children  })=>{\n    const { 0: title1 , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Error\");\n    const { 0: message1 , 1: setMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"success\");\n    const { 0: type1 , 1: setType  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"success\");\n    const { 0: showNotification , 1: setShowNotification  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleNotification = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async ({ title , message , type  })=>{\n        if (showNotification) {\n            return;\n        }\n        setTitle(title);\n        setMessage(message);\n        setType(type);\n        setShowNotification(true);\n        setTimeout(()=>{\n            setShowNotification(false);\n        }, 2000);\n    }, [\n        setTitle,\n        setMessage,\n        setType,\n        setShowNotification,\n        showNotification\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NotificationContext.Provider, {\n        value: {\n            handleNotification,\n            title: title1,\n            message: message1,\n            type: type1,\n            showNotification\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mathe\\\\Desktop\\\\Repositories\\\\teste-shopper\\\\frontend\\\\src\\\\hooks\\\\useNotification\\\\index.tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\nfunction useNotification() {\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(NotificationContext);\n    if (!context) {\n        throw new Error(\"useNotification must be used within an NotificationProvider \");\n    }\n    return context;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9va3MvdXNlTm90aWZpY2F0aW9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZ0Y7QUFrQnpFLE1BQU1LLG1CQUFtQixpQkFBR0osb0RBQWEsQ0FBQyxFQUFFLENBQVksQ0FBQztBQUV6RCxNQUFNSyxvQkFBb0IsR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBRSxHQUFLO0lBQ2xELE1BQU0sRUFyQlYsR0FxQldDLE1BQUssR0FyQmhCLEdBcUJrQkMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFTLE9BQU8sQ0FBQztJQUNuRCxNQUFNLEVBdEJWLEdBc0JXTyxRQUFPLEdBdEJsQixHQXNCb0JDLFVBQVUsTUFBSVIsK0NBQVEsQ0FBUyxTQUFTLENBQUM7SUFDekQsTUFBTSxFQXZCVixHQXVCV1MsS0FBSSxHQXZCZixHQXVCaUJDLE9BQU8sTUFBSVYsK0NBQVEsQ0FBbUIsU0FBUyxDQUFDO0lBQzdELE1BQU0sRUF4QlYsR0F3QldXLGdCQUFnQixHQXhCM0IsR0F3QjZCQyxtQkFBbUIsTUFBSVosK0NBQVEsQ0FBVSxLQUFLLENBQUM7SUFFeEUsTUFBTWEsa0JBQWtCLEdBQUdkLGtEQUFXLENBQ2xDLE9BQU8sRUFBRU0sS0FBSyxHQUFFRSxPQUFPLEdBQUVFLElBQUksR0FBZ0IsR0FBSztRQUM5QyxJQUFJRSxnQkFBZ0IsRUFBRTtZQUNsQixPQUFPO1NBQ1Y7UUFFREwsUUFBUSxDQUFDRCxLQUFLLENBQUMsQ0FBQztRQUNoQkcsVUFBVSxDQUFDRCxPQUFPLENBQUMsQ0FBQztRQUNwQkcsT0FBTyxDQUFDRCxJQUFJLENBQUMsQ0FBQztRQUVkRyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUxQkUsVUFBVSxDQUFDLElBQU07WUFDYkYsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUIsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNaLEVBQ0Q7UUFBQ04sUUFBUTtRQUFFRSxVQUFVO1FBQUVFLE9BQU87UUFBRUUsbUJBQW1CO1FBQUVELGdCQUFnQjtLQUFDLENBQ3pFO0lBRUQscUJBQ0ksOERBQUNULG1CQUFtQixDQUFDYSxRQUFRO1FBQ3pCQyxLQUFLLEVBQUU7WUFDSEgsa0JBQWtCO1lBQ2xCUixLQUFLLEVBQUxBLE1BQUs7WUFDTEUsT0FBTyxFQUFQQSxRQUFPO1lBQ1BFLElBQUksRUFBSkEsS0FBSTtZQUNKRSxnQkFBZ0I7U0FDbkI7a0JBRUFQLFFBQVE7Ozs7O2lCQUNrQixDQUNqQztDQUNMLENBQUM7QUFFSyxTQUFTYSxlQUFlLEdBQVk7SUFDdkMsTUFBTUMsT0FBTyxHQUFHakIsaURBQVUsQ0FBQ0MsbUJBQW1CLENBQUM7SUFFL0MsSUFBSSxDQUFDZ0IsT0FBTyxFQUFFO1FBQ1YsTUFBTSxJQUFJQyxLQUFLLENBQ1gsOERBQThELENBQ2pFLENBQUM7S0FDTDtJQUVELE9BQU9ELE9BQU8sQ0FBQztDQUNsQiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3NyYy9ob29rcy91c2VOb3RpZmljYXRpb24vaW5kZXgudHN4P2M5ODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG50eXBlIE5vdGlmaWNhdGlvblR5cGUgPSBcImFsZXJ0XCIgfCBcIndhcm5pbmdcIiB8IFwic3VjY2Vzc1wiO1xuXG5pbnRlcmZhY2UgTm90aWZpY2F0aW9uIHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICB0eXBlOiBOb3RpZmljYXRpb25UeXBlO1xufVxuXG5pbnRlcmZhY2UgQ29udGV4dCB7XG4gICAgaGFuZGxlTm90aWZpY2F0aW9uKGNhcnQ6IE5vdGlmaWNhdGlvbik6IHZvaWQ7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgdHlwZTogTm90aWZpY2F0aW9uVHlwZTtcbiAgICBzaG93Tm90aWZpY2F0aW9uOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ29udGV4dCk7XG5cbmV4cG9ydCBjb25zdCBOb3RpZmljYXRpb25Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJFcnJvclwiKTtcbiAgICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwic3VjY2Vzc1wiKTtcbiAgICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZTxOb3RpZmljYXRpb25UeXBlPihcInN1Y2Nlc3NcIik7XG4gICAgY29uc3QgW3Nob3dOb3RpZmljYXRpb24sIHNldFNob3dOb3RpZmljYXRpb25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gICAgY29uc3QgaGFuZGxlTm90aWZpY2F0aW9uID0gdXNlQ2FsbGJhY2soXG4gICAgICAgIGFzeW5jICh7IHRpdGxlLCBtZXNzYWdlLCB0eXBlIH06IE5vdGlmaWNhdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKHNob3dOb3RpZmljYXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNldFRpdGxlKHRpdGxlKTtcbiAgICAgICAgICAgIHNldE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICBzZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgICBzZXRTaG93Tm90aWZpY2F0aW9uKHRydWUpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRTaG93Tm90aWZpY2F0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9LFxuICAgICAgICBbc2V0VGl0bGUsIHNldE1lc3NhZ2UsIHNldFR5cGUsIHNldFNob3dOb3RpZmljYXRpb24sIHNob3dOb3RpZmljYXRpb25dLFxuICAgICk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Tm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlclxuICAgICAgICAgICAgdmFsdWU9e3tcbiAgICAgICAgICAgICAgICBoYW5kbGVOb3RpZmljYXRpb24sXG4gICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24sXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvTm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgICApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU5vdGlmaWNhdGlvbigpOiBDb250ZXh0IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChOb3RpZmljYXRpb25Db250ZXh0KTtcblxuICAgIGlmICghY29udGV4dCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBcInVzZU5vdGlmaWNhdGlvbiBtdXN0IGJlIHVzZWQgd2l0aGluIGFuIE5vdGlmaWNhdGlvblByb3ZpZGVyIFwiLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBjb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiTm90aWZpY2F0aW9uQ29udGV4dCIsIk5vdGlmaWNhdGlvblByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ0aXRsZSIsInNldFRpdGxlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJ0eXBlIiwic2V0VHlwZSIsInNob3dOb3RpZmljYXRpb24iLCJzZXRTaG93Tm90aWZpY2F0aW9uIiwiaGFuZGxlTm90aWZpY2F0aW9uIiwic2V0VGltZW91dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VOb3RpZmljYXRpb24iLCJjb250ZXh0IiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useNotification/index.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.tsx\");\n/* harmony import */ var _styles_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals */ \"./src/styles/globals.ts\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_hooks__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_globals__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mathe\\\\Desktop\\\\Repositories\\\\teste-shopper\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\mathe\\\\Desktop\\\\Repositories\\\\teste-shopper\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\mathe\\\\Desktop\\\\Repositories\\\\teste-shopper\\\\frontend\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFrQztBQUNVO0FBRTVDLGlFQUFlLENBQUMsRUFBRUUsU0FBUyxHQUFFQyxTQUFTLEdBQUUsR0FBSztJQUN6QyxxQkFDSTtrQkFDSSw0RUFBQ0gsOENBQVU7OzhCQUNQLDhEQUFDQyx1REFBVzs7Ozs2QkFBRzs4QkFDZiw4REFBQ0MsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozs2QkFBSTs7Ozs7O3FCQUNuQjtxQkFDZCxDQUNMO0NBQ0wsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBDb250ZXh0IGZyb20gXCIuLi9ob29rc1wiO1xuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gXCIuLi9zdHlsZXMvZ2xvYmFsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxBcHBDb250ZXh0PlxuICAgICAgICAgICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvQXBwQ29udGV4dD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG4iXSwibmFtZXMiOlsiQXBwQ29udGV4dCIsIkdsb2JhbFN0eWxlIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.ts":
/*!*******************************!*\
  !*** ./src/styles/globals.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n  }\n  body {\n    background: ${(props)=>props.theme.colors.background\n};\n    color: ${(props)=>props.theme.colors.text\n};\n    -webkit-font-smoothing: antialiased;\n  }\n  body, input, button {\n    font-family: 'Inter custom',sans-serif;\n    font-size: 16px;\n    font-weight: normal;\n  }\n  h1, h2, h3, h4, h5, h6, strong{\n    font-weight: 500;\n  }\n  button{\n    cursor: pointer;\n    transition: color 500ms ease-out;\n    :hover {\n      color: ${(props)=>props.theme.colors.text\n};\n      opacity:0.8;\n    }\n  }\n`);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dsb2JhbHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNEO0FBRXRELGlFQUFlQSxnRUFBaUIsQ0FBQzs7Ozs7Ozs7Z0JBUWpCLEVBQUVDLENBQUFBLEtBQUssR0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVTtBQUFBLENBQUM7V0FDOUMsRUFBRUgsQ0FBQUEsS0FBSyxHQUFJQSxLQUFLLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxDQUFDRSxJQUFJO0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O2FBZWpDLEVBQUVKLENBQUFBLEtBQUssR0FBSUEsS0FBSyxDQUFDQyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsSUFBSTtBQUFBLENBQUM7Ozs7QUFJaEQsQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vc3JjL3N0eWxlcy9nbG9iYWxzLnRzPzE0NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2xvYmFsU3R5bGVgXG4gICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9ycy5iYWNrZ3JvdW5kfTtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcnMudGV4dH07XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIH1cbiAgYm9keSwgaW5wdXQsIGJ1dHRvbiB7XG4gICAgZm9udC1mYW1pbHk6ICdJbnRlciBjdXN0b20nLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbiAgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgc3Ryb25ne1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgYnV0dG9ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciA1MDBtcyBlYXNlLW91dDtcbiAgICA6aG92ZXIge1xuICAgICAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3JzLnRleHR9O1xuICAgICAgb3BhY2l0eTowLjg7XG4gICAgfVxuICB9XG5gO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImJhY2tncm91bmQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/globals.ts\n");

/***/ }),

/***/ "./src/styles/theme/default.ts":
/*!*************************************!*\
  !*** ./src/styles/theme/default.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst light = {\n    title: \"light\",\n    colors: {\n        background: \"#F6F6F6\",\n        title: \"#231F20\",\n        text: \"#231F20\",\n        background_item: \"#E4E4E4\",\n        border_color: \"#36444C\",\n        button_text: \"#F6F6F6\",\n        button_Background: \"#36444C\"\n    },\n    spacing: {\n        sm: \"4px\",\n        md: \"8px\",\n        lg: \"16px\",\n        xlg: \"32px\"\n    },\n    borderRadius: \"24px\",\n    notification: {\n        alert: \"#dc3545\",\n        warning: \"#ffc107\",\n        success: \"#28a745\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (light);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lL2RlZmF1bHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLEtBQUssR0FBRztJQUNWQyxLQUFLLEVBQUUsT0FBTztJQUNkQyxNQUFNLEVBQUU7UUFDSkMsVUFBVSxFQUFFLFNBQVM7UUFDckJGLEtBQUssRUFBRSxTQUFTO1FBQ2hCRyxJQUFJLEVBQUUsU0FBUztRQUNmQyxlQUFlLEVBQUUsU0FBUztRQUMxQkMsWUFBWSxFQUFFLFNBQVM7UUFDdkJDLFdBQVcsRUFBRSxTQUFTO1FBQ3RCQyxpQkFBaUIsRUFBRSxTQUFTO0tBQy9CO0lBQ0RDLE9BQU8sRUFBRTtRQUNMQyxFQUFFLEVBQUUsS0FBSztRQUNUQyxFQUFFLEVBQUUsS0FBSztRQUNUQyxFQUFFLEVBQUUsTUFBTTtRQUNWQyxHQUFHLEVBQUUsTUFBTTtLQUNkO0lBQ0RDLFlBQVksRUFBRSxNQUFNO0lBQ3BCQyxZQUFZLEVBQUU7UUFDVkMsS0FBSyxFQUFFLFNBQVM7UUFDaEJDLE9BQU8sRUFBRSxTQUFTO1FBQ2xCQyxPQUFPLEVBQUUsU0FBUztLQUNyQjtDQUNKO0FBRUQsaUVBQWVsQixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcHAvLi9zcmMvc3R5bGVzL3RoZW1lL2RlZmF1bHQudHM/OTBjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBsaWdodCA9IHtcbiAgICB0aXRsZTogXCJsaWdodFwiLFxuICAgIGNvbG9yczoge1xuICAgICAgICBiYWNrZ3JvdW5kOiBcIiNGNkY2RjZcIixcbiAgICAgICAgdGl0bGU6IFwiIzIzMUYyMFwiLFxuICAgICAgICB0ZXh0OiBcIiMyMzFGMjBcIixcbiAgICAgICAgYmFja2dyb3VuZF9pdGVtOiBcIiNFNEU0RTRcIixcbiAgICAgICAgYm9yZGVyX2NvbG9yOiBcIiMzNjQ0NENcIixcbiAgICAgICAgYnV0dG9uX3RleHQ6IFwiI0Y2RjZGNlwiLFxuICAgICAgICBidXR0b25fQmFja2dyb3VuZDogXCIjMzY0NDRDXCIsXG4gICAgfSxcbiAgICBzcGFjaW5nOiB7XG4gICAgICAgIHNtOiBcIjRweFwiLFxuICAgICAgICBtZDogXCI4cHhcIixcbiAgICAgICAgbGc6IFwiMTZweFwiLFxuICAgICAgICB4bGc6IFwiMzJweFwiLFxuICAgIH0sXG4gICAgYm9yZGVyUmFkaXVzOiBcIjI0cHhcIixcbiAgICBub3RpZmljYXRpb246IHtcbiAgICAgICAgYWxlcnQ6IFwiI2RjMzU0NVwiLFxuICAgICAgICB3YXJuaW5nOiBcIiNmZmMxMDdcIixcbiAgICAgICAgc3VjY2VzczogXCIjMjhhNzQ1XCIsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxpZ2h0O1xuIl0sIm5hbWVzIjpbImxpZ2h0IiwidGl0bGUiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwidGV4dCIsImJhY2tncm91bmRfaXRlbSIsImJvcmRlcl9jb2xvciIsImJ1dHRvbl90ZXh0IiwiYnV0dG9uX0JhY2tncm91bmQiLCJzcGFjaW5nIiwic20iLCJtZCIsImxnIiwieGxnIiwiYm9yZGVyUmFkaXVzIiwibm90aWZpY2F0aW9uIiwiYWxlcnQiLCJ3YXJuaW5nIiwic3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme/default.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();