"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/middleware.js":
/*!***************************!*\
  !*** ./src/middleware.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(req, res) {\n    if (req.nextUrl.pathname.startsWith(\"/api/profile\")) {\n        console.log(\"profile api\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    } else if (req.nextUrl.pathname.startsWith(\"/api/about\")) {\n        console.log(\"about api\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    } else {\n        // let msg = {message:\"failed\", status:\"404\"}\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            \"message\": \"failed\",\n            \"status\": \"404\"\n        });\n    }\n} // export const config={\n //     matcher:[\"/api/:patch*\", \"/site\"]\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFbEMsU0FBU0MsV0FBV0MsR0FBRyxFQUFFQyxHQUFHO0lBRWxDLElBQUdELElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsaUJBQWdCO1FBQy9DQyxRQUFRQyxHQUFHLENBQUM7UUFDYixPQUFPUixrRkFBWUEsQ0FBQ1MsSUFBSTtJQUMzQixPQUNLLElBQUdQLElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsZUFDeEM7UUFDQ0MsUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBT1Isa0ZBQVlBLENBQUNTLElBQUk7SUFDekIsT0FDSztRQUNKLDZDQUE2QztRQUMxQyxPQUFPVCxrRkFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUMsV0FBVTtZQUFVLFVBQVU7UUFBSztJQUNqRTtBQUVELEVBRUEsd0JBQXdCO0NBQ3hCLHdDQUF3QztDQUN4QyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLmpzP2E0OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UmVzcG9uc2V9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxLCByZXMpe1xyXG5cclxuIGlmKHJlcS5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYXBpL3Byb2ZpbGVcIikpe1xyXG4gICAgIGNvbnNvbGUubG9nKFwicHJvZmlsZSBhcGlcIilcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG4gfVxyXG4gZWxzZSBpZihyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FwaS9hYm91dFwiKSlcclxuIHtcclxuICBjb25zb2xlLmxvZyhcImFib3V0IGFwaVwiKVxyXG4gIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpO1xyXG4gfVxyXG4gZWxzZSB7XHJcbiAgLy8gbGV0IG1zZyA9IHttZXNzYWdlOlwiZmFpbGVkXCIsIHN0YXR1czpcIjQwNFwifVxyXG4gICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XCJtZXNzYWdlXCI6XCJmYWlsZWRcIiwgXCJzdGF0dXNcIiA6XCI0MDRcIn0pXHJcbiB9XHJcblxyXG59XHJcblxyXG4vLyBleHBvcnQgY29uc3QgY29uZmlnPXtcclxuLy8gICAgIG1hdGNoZXI6W1wiL2FwaS86cGF0Y2gqXCIsIFwiL3NpdGVcIl1cclxuLy8gfSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsImNvbnNvbGUiLCJsb2ciLCJuZXh0IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});