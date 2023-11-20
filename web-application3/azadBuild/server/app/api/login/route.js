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
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "node:buffer":
/*!******************************!*\
  !*** external "node:buffer" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:buffer");

/***/ }),

/***/ "node:crypto":
/*!******************************!*\
  !*** external "node:crypto" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:crypto");

/***/ }),

/***/ "node:events":
/*!******************************!*\
  !*** external "node:events" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("node:events");

/***/ }),

/***/ "node:http":
/*!****************************!*\
  !*** external "node:http" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:http");

/***/ }),

/***/ "node:https":
/*!*****************************!*\
  !*** external "node:https" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node:https");

/***/ }),

/***/ "node:util":
/*!****************************!*\
  !*** external "node:util" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("node:util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_PROJECT_JS_Programming_Deploy_nextFreamwork_web_application3_src_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/login/route.js */ \"(rsc)/./src/app/api/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\PROJECT\\\\JS Programming\\\\Deploy\\\\nextFreamwork\\\\web-application3\\\\src\\\\app\\\\api\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: C_PROJECT_JS_Programming_Deploy_nextFreamwork_web_application3_src_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/login/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDUFJPSkVDVCU1Q0pTJTIwUHJvZ3JhbW1pbmclNUNEZXBsb3klNUNuZXh0RnJlYW13b3JrJTVDd2ViLWFwcGxpY2F0aW9uMyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1BST0pFQ1QlNUNKUyUyMFByb2dyYW1taW5nJTVDRGVwbG95JTVDbmV4dEZyZWFtd29yayU1Q3dlYi1hcHBsaWNhdGlvbjMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDb0Q7QUFDakk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItYXBwbGljYXRpb24zLz82ZTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFBST0pFQ1RcXFxcSlMgUHJvZ3JhbW1pbmdcXFxcRGVwbG95XFxcXG5leHRGcmVhbXdvcmtcXFxcd2ViLWFwcGxpY2F0aW9uM1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxsb2dpblxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9sb2dpblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxQUk9KRUNUXFxcXEpTIFByb2dyYW1taW5nXFxcXERlcGxveVxcXFxuZXh0RnJlYW13b3JrXFxcXHdlYi1hcHBsaWNhdGlvbjNcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcbG9naW5cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvbG9naW4vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/login/route.js":
/*!************************************!*\
  !*** ./src/app/api/login/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/index.js\");\n\n\nasync function POST(req, res) {\n    const JSONBody = await req.json();\n    const user = JSONBody[\"user\"];\n    const password = JSONBody[\"password\"];\n    if (user === \"asraful\" && password === \"123\") {\n        const payload = {\n            user: user\n        };\n        const KEY = new TextEncoder().encode(process.env.JWT_KEY);\n        const token = await new jose__WEBPACK_IMPORTED_MODULE_1__.SignJWT(payload).setProtectedHeader({\n            alg: \"HS256\"\n        }).setIssuedAt().setIssuer(\"asrafulazad.com\").setExpirationTime(\"12h\").sign(KEY);\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            status: \"login success\",\n            token: token\n        }, {\n            status: 201\n        });\n    } else {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            status: \"login failed\"\n        }, {\n            status: 401\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9sb2dpbi9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBeUM7QUFDWjtBQUd0QixlQUFlRSxLQUFLQyxHQUFHLEVBQUNDLEdBQUc7SUFFOUIsTUFBTUMsV0FBVSxNQUFNRixJQUFJRyxJQUFJO0lBQzlCLE1BQU1DLE9BQU1GLFFBQVEsQ0FBQyxPQUFPO0lBQzVCLE1BQU1HLFdBQVVILFFBQVEsQ0FBQyxXQUFXO0lBRXBDLElBQUdFLFNBQU8sYUFBWUMsYUFBVyxPQUFNO1FBQ25DLE1BQU1DLFVBQVU7WUFBQ0YsTUFBS0E7UUFBSTtRQUUxQixNQUFNRyxNQUFNLElBQUlDLGNBQWNDLE1BQU0sQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxPQUFPO1FBQ3hELE1BQU1DLFFBQVEsTUFBTSxJQUFJZix5Q0FBT0EsQ0FBQ1EsU0FDM0JRLGtCQUFrQixDQUFDO1lBQUNDLEtBQUk7UUFBTyxHQUMvQkMsV0FBVyxHQUNYQyxTQUFTLENBQUMsbUJBQ1ZDLGlCQUFpQixDQUFDLE9BQ2xCQyxJQUFJLENBQUNaO1FBR1gsT0FBUVYsa0ZBQVlBLENBQUNNLElBQUksQ0FBQztZQUFDaUIsUUFBUTtZQUFnQlAsT0FBT0E7UUFBSyxHQUFFO1lBQUNPLFFBQVE7UUFBRztJQUVoRixPQUFNO1FBQ0YsT0FBT3ZCLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBQ2lCLFFBQVE7UUFBYyxHQUFFO1lBQUNBLFFBQVE7UUFBRztJQUNsRTtBQUtKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWFwcGxpY2F0aW9uMy8uL3NyYy9hcHAvYXBpL2xvZ2luL3JvdXRlLmpzP2RiNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UmVzcG9uc2V9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQge1NpZ25KV1R9IGZyb20gXCJqb3NlXCI7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxLHJlcyl7XHJcblxyXG4gICAgY29uc3QgSlNPTkJvZHk9IGF3YWl0IHJlcS5qc29uKCk7XHJcbiAgICBjb25zdCB1c2VyPSBKU09OQm9keVtcInVzZXJcIl1cclxuICAgIGNvbnN0IHBhc3N3b3JkPSBKU09OQm9keVtcInBhc3N3b3JkXCJdXHJcblxyXG4gICAgaWYodXNlcj09PVwiYXNyYWZ1bFwiJiYgcGFzc3dvcmQ9PT1cIjEyM1wiKXtcclxuICAgICAgICBjb25zdCBwYXlsb2FkID0ge3VzZXI6dXNlcn07XHJcblxyXG4gICAgICAgIGNvbnN0IEtFWSA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwcm9jZXNzLmVudi5KV1RfS0VZKVxyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgbmV3IFNpZ25KV1QocGF5bG9hZClcclxuICAgICAgICAgICAgLnNldFByb3RlY3RlZEhlYWRlcih7YWxnOlwiSFMyNTZcIn0pXHJcbiAgICAgICAgICAgIC5zZXRJc3N1ZWRBdCgpXHJcbiAgICAgICAgICAgIC5zZXRJc3N1ZXIoXCJhc3JhZnVsYXphZC5jb21cIilcclxuICAgICAgICAgICAgLnNldEV4cGlyYXRpb25UaW1lKCcxMmgnKVxyXG4gICAgICAgICAgICAuc2lnbihLRVkpXHJcblxyXG5cclxuICAgICAgIHJldHVybiAgTmV4dFJlc3BvbnNlLmpzb24oe3N0YXR1czogXCJsb2dpbiBzdWNjZXNzXCIsdG9rZW46IHRva2VufSx7c3RhdHVzOiAyMDF9KVxyXG5cclxuICAgIH1lbHNlIHtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe3N0YXR1czogXCJsb2dpbiBmYWlsZWRcIn0se3N0YXR1czogNDAxfSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiU2lnbkpXVCIsIlBPU1QiLCJyZXEiLCJyZXMiLCJKU09OQm9keSIsImpzb24iLCJ1c2VyIiwicGFzc3dvcmQiLCJwYXlsb2FkIiwiS0VZIiwiVGV4dEVuY29kZXIiLCJlbmNvZGUiLCJwcm9jZXNzIiwiZW52IiwiSldUX0tFWSIsInRva2VuIiwic2V0UHJvdGVjdGVkSGVhZGVyIiwiYWxnIiwic2V0SXNzdWVkQXQiLCJzZXRJc3N1ZXIiLCJzZXRFeHBpcmF0aW9uVGltZSIsInNpZ24iLCJzdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/login/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/jose"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();