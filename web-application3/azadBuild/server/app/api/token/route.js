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
exports.id = "app/api/token/route";
exports.ids = ["app/api/token/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.js&appDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.js&appDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_PROJECT_JS_Programming_Deploy_nextFreamwork_web_application3_src_app_api_token_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/token/route.js */ \"(rsc)/./src/app/api/token/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/token/route\",\n        pathname: \"/api/token\",\n        filename: \"route\",\n        bundlePath: \"app/api/token/route\"\n    },\n    resolvedPagePath: \"C:\\\\PROJECT\\\\JS Programming\\\\Deploy\\\\nextFreamwork\\\\web-application3\\\\src\\\\app\\\\api\\\\token\\\\route.js\",\n    nextConfigOutput,\n    userland: C_PROJECT_JS_Programming_Deploy_nextFreamwork_web_application3_src_app_api_token_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/token/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ0b2tlbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdG9rZW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0b2tlbiUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDUFJPSkVDVCU1Q0pTJTIwUHJvZ3JhbW1pbmclNUNEZXBsb3klNUNuZXh0RnJlYW13b3JrJTVDd2ViLWFwcGxpY2F0aW9uMyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1BST0pFQ1QlNUNKUyUyMFByb2dyYW1taW5nJTVDRGVwbG95JTVDbmV4dEZyZWFtd29yayU1Q3dlYi1hcHBsaWNhdGlvbjMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDb0Q7QUFDakk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItYXBwbGljYXRpb24zLz82Y2E1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFBST0pFQ1RcXFxcSlMgUHJvZ3JhbW1pbmdcXFxcRGVwbG95XFxcXG5leHRGcmVhbXdvcmtcXFxcd2ViLWFwcGxpY2F0aW9uM1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0b2tlblxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdG9rZW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90b2tlblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdG9rZW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxQUk9KRUNUXFxcXEpTIFByb2dyYW1taW5nXFxcXERlcGxveVxcXFxuZXh0RnJlYW13b3JrXFxcXHdlYi1hcHBsaWNhdGlvbjNcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdG9rZW5cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvdG9rZW4vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.js&appDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/token/route.js":
/*!************************************!*\
  !*** ./src/app/api/token/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jose */ \"(rsc)/./node_modules/jose/dist/node/esm/index.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n\n\nasync function GET(req, res) {\n    const Key = new TextEncoder().encode(process.env.JWT_KEY);\n    const payload = {\n        email: \"asrafuldata@gmail.com\",\n        userId: \"asraful\"\n    };\n    const token = await new jose__WEBPACK_IMPORTED_MODULE_0__.SignJWT(payload).setProtectedHeader({\n        alg: \"HS256\"\n    }).setIssuedAt().setIssuer(\"google.com\").setExpirationTime(\"1h\").sign(Key);\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json({\n        token: token\n    });\n}\nasync function POST(req, res) {\n    const JsonBody = await req.json();\n    const token = JsonBody[\"token\"];\n    const Key = new TextEncoder().encode(process.env.JWT_KEY);\n    const decodeData = await (0,jose__WEBPACK_IMPORTED_MODULE_0__.jwtVerify)(token, Key);\n    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_1__[\"default\"].json(decodeData);\n} // import {SignJWT} from \"jose\";\n // import {NextResponse} from \"next/server\";\n //\n //\n // export  async  function GET(req, res){\n //\n //     const key= new TextEncoder().encode(process.env.JWT_KEY);\n //     const payload = {email: \"asrafuldata@gmail.com\",userId: \"asraful\"}\n //\n //     let token = new SignJWT(payload)\n //         .setProtectedHeader({alg:'HS256'})\n //         .setIssuedAt()\n //         .setIssuer(\"https://localhost:3000\")\n //         .setExpirationTime(\"2h\")\n //         .sign(key)\n //\n //    return  NextResponse.json(token)\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90b2tlbi9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ3lDO0FBQ0M7QUFHbkMsZUFBZUcsSUFBSUMsR0FBRyxFQUFFQyxHQUFHO0lBRTlCLE1BQU1DLE1BQU0sSUFBSUMsY0FBY0MsTUFBTSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLE9BQU87SUFDeEQsTUFBTUMsVUFBVTtRQUFDQyxPQUFPO1FBQXdCQyxRQUFRO0lBQVM7SUFHakUsTUFBTUMsUUFBUSxNQUFNLElBQUlkLHlDQUFPQSxDQUFDVyxTQUMzQkksa0JBQWtCLENBQUM7UUFBQ0MsS0FBSTtJQUFPLEdBQy9CQyxXQUFXLEdBQ1hDLFNBQVMsQ0FBQyxjQUNWQyxpQkFBaUIsQ0FBQyxNQUNsQkMsSUFBSSxDQUFDZjtJQUVWLE9BQU9KLGtGQUFZQSxDQUFDb0IsSUFBSSxDQUFDO1FBQUNQLE9BQU1BO0lBQUs7QUFFekM7QUFHTyxlQUFlUSxLQUFLbkIsR0FBRyxFQUFDQyxHQUFHO0lBRTlCLE1BQU1tQixXQUFTLE1BQU1wQixJQUFJa0IsSUFBSTtJQUU3QixNQUFNUCxRQUFVUyxRQUFRLENBQUMsUUFBUTtJQUVqQyxNQUFNbEIsTUFBTSxJQUFJQyxjQUFjQyxNQUFNLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsT0FBTztJQUV4RCxNQUFNYyxhQUFhLE1BQU96QiwrQ0FBU0EsQ0FBQ2UsT0FBTVQ7SUFFMUMsT0FBT0osa0ZBQVlBLENBQUNvQixJQUFJLENBQUNHO0FBRzdCLEVBR0EsZ0NBQWdDO0NBQ2hDLDRDQUE0QztDQUM1QyxFQUFFO0NBQ0YsRUFBRTtDQUNGLHlDQUF5QztDQUN6QyxFQUFFO0NBQ0YsZ0VBQWdFO0NBQ2hFLHlFQUF5RTtDQUN6RSxFQUFFO0NBQ0YsdUNBQXVDO0NBQ3ZDLDZDQUE2QztDQUM3Qyx5QkFBeUI7Q0FDekIsK0NBQStDO0NBQy9DLG1DQUFtQztDQUNuQyxxQkFBcUI7Q0FDckIsRUFBRTtDQUNGLHNDQUFzQztDQUN0QyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLWFwcGxpY2F0aW9uMy8uL3NyYy9hcHAvYXBpL3Rva2VuL3JvdXRlLmpzPzZlYjciXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbiBpbXBvcnQge2p3dFZlcmlmeSwgU2lnbkpXVH0gZnJvbSBcImpvc2VcIjtcclxuIGltcG9ydCB7TmV4dFJlc3BvbnNlfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSwgcmVzKXtcclxuXHJcbiAgICBjb25zdCBLZXkgPSBuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocHJvY2Vzcy5lbnYuSldUX0tFWSlcclxuICAgIGNvbnN0IHBheWxvYWQgPSB7ZW1haWw6IFwiYXNyYWZ1bGRhdGFAZ21haWwuY29tXCIsdXNlcklkOiBcImFzcmFmdWxcIn1cclxuXHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBuZXcgU2lnbkpXVChwYXlsb2FkKVxyXG4gICAgICAgIC5zZXRQcm90ZWN0ZWRIZWFkZXIoe2FsZzonSFMyNTYnfSlcclxuICAgICAgICAuc2V0SXNzdWVkQXQoKVxyXG4gICAgICAgIC5zZXRJc3N1ZXIoXCJnb29nbGUuY29tXCIpXHJcbiAgICAgICAgLnNldEV4cGlyYXRpb25UaW1lKCcxaCcpXHJcbiAgICAgICAgLnNpZ24oS2V5KVxyXG5cclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7dG9rZW46dG9rZW59KVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSxyZXMpe1xyXG5cclxuICAgIGNvbnN0IEpzb25Cb2R5PWF3YWl0IHJlcS5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgdG9rZW4gPSAgIEpzb25Cb2R5Wyd0b2tlbiddO1xyXG5cclxuICAgIGNvbnN0IEtleSA9IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShwcm9jZXNzLmVudi5KV1RfS0VZKTtcclxuXHJcbiAgICBjb25zdCBkZWNvZGVEYXRhID0gYXdhaXQgIGp3dFZlcmlmeSh0b2tlbixLZXkpXHJcblxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKGRlY29kZURhdGEpO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4vLyBpbXBvcnQge1NpZ25KV1R9IGZyb20gXCJqb3NlXCI7XHJcbi8vIGltcG9ydCB7TmV4dFJlc3BvbnNlfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuLy9cclxuLy9cclxuLy8gZXhwb3J0ICBhc3luYyAgZnVuY3Rpb24gR0VUKHJlcSwgcmVzKXtcclxuLy9cclxuLy8gICAgIGNvbnN0IGtleT0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKHByb2Nlc3MuZW52LkpXVF9LRVkpO1xyXG4vLyAgICAgY29uc3QgcGF5bG9hZCA9IHtlbWFpbDogXCJhc3JhZnVsZGF0YUBnbWFpbC5jb21cIix1c2VySWQ6IFwiYXNyYWZ1bFwifVxyXG4vL1xyXG4vLyAgICAgbGV0IHRva2VuID0gbmV3IFNpZ25KV1QocGF5bG9hZClcclxuLy8gICAgICAgICAuc2V0UHJvdGVjdGVkSGVhZGVyKHthbGc6J0hTMjU2J30pXHJcbi8vICAgICAgICAgLnNldElzc3VlZEF0KClcclxuLy8gICAgICAgICAuc2V0SXNzdWVyKFwiaHR0cHM6Ly9sb2NhbGhvc3Q6MzAwMFwiKVxyXG4vLyAgICAgICAgIC5zZXRFeHBpcmF0aW9uVGltZShcIjJoXCIpXHJcbi8vICAgICAgICAgLnNpZ24oa2V5KVxyXG4vL1xyXG4vLyAgICByZXR1cm4gIE5leHRSZXNwb25zZS5qc29uKHRva2VuKVxyXG4vLyB9XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImp3dFZlcmlmeSIsIlNpZ25KV1QiLCJOZXh0UmVzcG9uc2UiLCJHRVQiLCJyZXEiLCJyZXMiLCJLZXkiLCJUZXh0RW5jb2RlciIsImVuY29kZSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfS0VZIiwicGF5bG9hZCIsImVtYWlsIiwidXNlcklkIiwidG9rZW4iLCJzZXRQcm90ZWN0ZWRIZWFkZXIiLCJhbGciLCJzZXRJc3N1ZWRBdCIsInNldElzc3VlciIsInNldEV4cGlyYXRpb25UaW1lIiwic2lnbiIsImpzb24iLCJQT1NUIiwiSnNvbkJvZHkiLCJkZWNvZGVEYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/token/route.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/jose","vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Ftoken%2Froute&page=%2Fapi%2Ftoken%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftoken%2Froute.js&appDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CPROJECT%5CJS%20Programming%5CDeploy%5CnextFreamwork%5Cweb-application3&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();