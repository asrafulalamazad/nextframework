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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(middleware)/./node_modules/next/dist/esm/server/web/exports/next-response.js\");\n/* harmony import */ var next_dist_build_webpack_loaders_resolve_url_loader_lib_postcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss */ \"(middleware)/./node_modules/next/dist/esm/build/webpack/loaders/resolve-url-loader/lib/postcss.js\");\n\n\nfunction middleware(req, res) {\n    if (req.nextUrl.pathname.startsWith(\"/api/profile\")) {\n        const reqHeader = new Headers(req.headers);\n        const apiPassword = reqHeader.get(\"apiPassword\");\n        if (apiPassword === \"dhaka123\") {\n            reqHeader.set(\"user_id\", \"asraful1988\");\n            const res = next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next({\n                request: {\n                    headers: reqHeader\n                }\n            });\n        } else {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                \"message\": \"apiKey not match\"\n            }, {\n                \"status\": \"401\"\n            });\n        // return NextResponse.next()\n        }\n    } else if (req.nextUrl.pathname.startsWith(\"/api/about\")) {\n        console.log(\"about api\");\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    } else {\n        // let msg = {message:\"failed\", status:\"404\"}\n        //    return NextResponse.json({\"message\":\"Not API\", \"status\" :\"404\"})\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].next();\n    }\n} // export const config={\n //     matcher:[\"/api/:patch*\", \"/site\"]\n // }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBQzRDO0FBRTlFLFNBQVNFLFdBQVdDLEdBQUcsRUFBRUMsR0FBRztJQUMvQixJQUFHRCxJQUFJRSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsVUFBVSxDQUFDLGlCQUFnQjtRQUUvQyxNQUFNQyxZQUFXLElBQUtDLFFBQVFOLElBQUlPLE9BQU87UUFFekMsTUFBTUMsY0FBYUgsVUFBVUksR0FBRyxDQUFDO1FBRWpDLElBQUlELGdCQUFjLFlBQVc7WUFDekJILFVBQVVLLEdBQUcsQ0FBQyxXQUFVO1lBQ3hCLE1BQU1ULE1BQU1KLGtGQUFZQSxDQUFDYyxJQUFJLENBQ3pCO2dCQUFDQyxTQUFRO29CQUFDTCxTQUFRRjtnQkFBUztZQUFDO1FBR3BDLE9BQ0s7WUFDQSxPQUFPUixrRkFBWUEsQ0FBQ2dCLElBQUksQ0FBQztnQkFBQyxXQUFVO1lBQWtCLEdBQUc7Z0JBQUMsVUFBVTtZQUFLO1FBQzNFLDZCQUE2QjtRQUNoQztJQUNKLE9BS0UsSUFBR2IsSUFBSUUsT0FBTyxDQUFDQyxRQUFRLENBQUNDLFVBQVUsQ0FBQyxlQUN4QztRQUNDVSxRQUFRQyxHQUFHLENBQUM7UUFDWixPQUFPbEIsa0ZBQVlBLENBQUNjLElBQUk7SUFDekIsT0FDSztRQUNKLDZDQUE2QztRQUM3QyxzRUFBc0U7UUFDaEUsT0FBT2Qsa0ZBQVlBLENBQUNjLElBQUk7SUFDL0I7QUFFRCxFQUVBLHdCQUF3QjtDQUN4Qix3Q0FBd0M7Q0FDeEMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbWlkZGxld2FyZS5qcz9hNDlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFJlc3BvbnNlfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHByb2Nlc3MgZnJvbSBcIm5leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2xpYi9wb3N0Y3NzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlkZGxld2FyZShyZXEsIHJlcyl7XHJcbiAgICBpZihyZXEubmV4dFVybC5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2FwaS9wcm9maWxlXCIpKXtcclxuXHJcbiAgICAgICAgY29uc3QgcmVxSGVhZGVyPSBuZXcgIEhlYWRlcnMocmVxLmhlYWRlcnMpXHJcblxyXG4gICAgICAgIGNvbnN0IGFwaVBhc3N3b3JkPSByZXFIZWFkZXIuZ2V0KFwiYXBpUGFzc3dvcmRcIik7XHJcblxyXG4gICAgICAgIGlmIChhcGlQYXNzd29yZD09PVwiZGhha2ExMjNcIil7XHJcbiAgICAgICAgICAgIHJlcUhlYWRlci5zZXQoXCJ1c2VyX2lkXCIsXCJhc3JhZnVsMTk4OFwiKVxyXG4gICAgICAgICAgICBjb25zdCByZXM9ICBOZXh0UmVzcG9uc2UubmV4dChcclxuICAgICAgICAgICAgICAgIHtyZXF1ZXN0OntoZWFkZXJzOnJlcUhlYWRlcn19XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1wibWVzc2FnZVwiOlwiYXBpS2V5IG5vdCBtYXRjaFwifSwge1wic3RhdHVzXCIgOlwiNDAxXCJ9KVxyXG4gICAgICAgICAgIC8vIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gLy8gaWYocmVxLm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aChcIi9hcGkvcHJvZmlsZVwiKSl7XHJcbiAvLyAgICAgY29uc29sZS5sb2coXCJwcm9maWxlIGFwaVwiKVxyXG4gLy8gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbiAvLyB9XHJcbiBlbHNlIGlmKHJlcS5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoXCIvYXBpL2Fib3V0XCIpKVxyXG4ge1xyXG4gIGNvbnNvbGUubG9nKFwiYWJvdXQgYXBpXCIpXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XHJcbiB9XHJcbiBlbHNlIHtcclxuICAvLyBsZXQgbXNnID0ge21lc3NhZ2U6XCJmYWlsZWRcIiwgc3RhdHVzOlwiNDA0XCJ9XHJcbiAgLy8gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcIm1lc3NhZ2VcIjpcIk5vdCBBUElcIiwgXCJzdGF0dXNcIiA6XCI0MDRcIn0pXHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KClcclxuIH1cclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBjb25maWc9e1xyXG4vLyAgICAgbWF0Y2hlcjpbXCIvYXBpLzpwYXRjaCpcIiwgXCIvc2l0ZVwiXVxyXG4vLyB9Il0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsInByb2Nlc3MiLCJtaWRkbGV3YXJlIiwicmVxIiwicmVzIiwibmV4dFVybCIsInBhdGhuYW1lIiwic3RhcnRzV2l0aCIsInJlcUhlYWRlciIsIkhlYWRlcnMiLCJoZWFkZXJzIiwiYXBpUGFzc3dvcmQiLCJnZXQiLCJzZXQiLCJuZXh0IiwicmVxdWVzdCIsImpzb24iLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.js\n");

/***/ })

});