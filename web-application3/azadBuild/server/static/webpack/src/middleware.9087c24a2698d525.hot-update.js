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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n\nfunction middleware() {\n    if (req.nextUrl.pathname.startsWith(\"/api/profile\")) {\n        console.log(\"profile api\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    } else if (req.nextUrl.pathname.startsWith(\"/api/about\")) {\n        console.log(\"about api\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    }\n// else {\n//  // let msg = {message:\"failed\", status:\"404\"}\n//     return NextResponse.json({\"message\":\"failed\", \"status\" :\"404\"})\n// }\n} // export const config={\n //     matcher:[\"/api/:patch*\", \"/site\"]\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFbEMsU0FBU0M7SUFFZixJQUFHQyxJQUFJQyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGlCQUFnQjtRQUMvQ0MsUUFBUUMsR0FBRyxDQUFDO1FBQ2IsT0FBT1Asa0ZBQVlBLENBQUNRLElBQUk7SUFDM0IsT0FDSyxJQUFHTixJQUFJQyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGVBQ3hDO1FBQ0NDLFFBQVFDLEdBQUcsQ0FBQztRQUNaLE9BQU9QLGtGQUFZQSxDQUFDUSxJQUFJO0lBQ3pCO0FBQ0EsU0FBUztBQUNULGlEQUFpRDtBQUNqRCxzRUFBc0U7QUFDdEUsSUFBSTtBQUVMLEVBRUEsd0JBQXdCO0NBQ3hCLHdDQUF3QztDQUN4QyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9taWRkbGV3YXJlLmpzP2E0OWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UmVzcG9uc2V9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUoKXtcclxuXHJcbiBpZihyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FwaS9wcm9maWxlXCIpKXtcclxuICAgICBjb25zb2xlLmxvZyhcInByb2ZpbGUgYXBpXCIpXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxuIH1cclxuIGVsc2UgaWYocmVxLm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hcGkvYWJvdXRcIikpXHJcbiB7XHJcbiAgY29uc29sZS5sb2coXCJhYm91dCBhcGlcIilcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLm5leHQoKTtcclxuIH1cclxuIC8vIGVsc2Uge1xyXG4gLy8gIC8vIGxldCBtc2cgPSB7bWVzc2FnZTpcImZhaWxlZFwiLCBzdGF0dXM6XCI0MDRcIn1cclxuIC8vICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1wibWVzc2FnZVwiOlwiZmFpbGVkXCIsIFwic3RhdHVzXCIgOlwiNDA0XCJ9KVxyXG4gLy8gfVxyXG5cclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGNvbmZpZz17XHJcbi8vICAgICBtYXRjaGVyOltcIi9hcGkvOnBhdGNoKlwiLCBcIi9zaXRlXCJdXHJcbi8vIH0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcSIsIm5leHRVcmwiLCJwYXRobmFtZSIsInN0YXJ0c1dpdGgiLCJjb25zb2xlIiwibG9nIiwibmV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});