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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware(req, res) {\n    if (req.nextUrl.pathname.startsWith(\"/api/profile\")) {\n        console.log(\"profile api\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    } else if (req.nextUrl.pathname.startsWith(\"/api/about\")) {\n        console.log(\"about api\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    }\n// else {\n//  // let msg = {message:\"failed\", status:\"404\"}\n//     return NextResponse.json({\"message\":\"failed\", \"status\" :\"404\"})\n// }\n} // export const config={\n //     matcher:[\"/api/:patch*\", \"/site\"]\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFbEMsU0FBU0MsV0FBV0MsR0FBRyxFQUFFQyxHQUFHO0lBRWxDLElBQUdELElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsaUJBQWdCO1FBQy9DQyxRQUFRQyxHQUFHLENBQUM7UUFDYixPQUFPUixrRkFBWUEsQ0FBQ1MsSUFBSTtJQUMzQixPQUNLLElBQUdQLElBQUlFLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxVQUFVLENBQUMsZUFDeEM7UUFDQ0MsUUFBUUMsR0FBRyxDQUFDO1FBQ1osT0FBT1Isa0ZBQVlBLENBQUNTLElBQUk7SUFDekI7QUFDQSxTQUFTO0FBQ1QsaURBQWlEO0FBQ2pELHNFQUFzRTtBQUN0RSxJQUFJO0FBRUwsRUFFQSx3QkFBd0I7Q0FDeEIsd0NBQXdDO0NBQ3hDLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUuanM/YTQ5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05leHRSZXNwb25zZX0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEsIHJlcyl7XHJcblxyXG4gaWYocmVxLm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hcGkvcHJvZmlsZVwiKSl7XHJcbiAgICAgY29uc29sZS5sb2coXCJwcm9maWxlIGFwaVwiKVxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbiB9XHJcbiBlbHNlIGlmKHJlcS5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYXBpL2Fib3V0XCIpKVxyXG4ge1xyXG4gIGNvbnNvbGUubG9nKFwiYWJvdXQgYXBpXCIpXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbiB9XHJcbiAvLyBlbHNlIHtcclxuIC8vICAvLyBsZXQgbXNnID0ge21lc3NhZ2U6XCJmYWlsZWRcIiwgc3RhdHVzOlwiNDA0XCJ9XHJcbiAvLyAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcIm1lc3NhZ2VcIjpcImZhaWxlZFwiLCBcInN0YXR1c1wiIDpcIjQwNFwifSlcclxuIC8vIH1cclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjb25maWc9e1xyXG4vLyAgICAgbWF0Y2hlcjpbXCIvYXBpLzpwYXRjaCpcIiwgXCIvc2l0ZVwiXVxyXG4vLyB9Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIm1pZGRsZXdhcmUiLCJyZXEiLCJyZXMiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJzdGFydHNXaXRoIiwiY29uc29sZSIsImxvZyIsIm5leHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});