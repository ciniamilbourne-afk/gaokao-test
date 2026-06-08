(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/@fontsource/poppins/400.css
var _400 = __webpack_require__(2911);
;// CONCATENATED MODULE: ./theme/index.ts

const theme = (0,react_.extendTheme)({
    colors: {
        primary: {
            "50": "#f2f8fd",
            "100": "#e3effb",
            "200": "#c1dff6",
            "300": "#8ac5ef",
            "400": "#4ca7e4",
            "500": "#4298ff",
            "600": "#176fb2",
            "700": "#145990",
            "800": "#144c78",
            "900": "#164064"
        }
    },
    fonts: {
        heading: `Poppins, sans-serif`,
        body: `'Poppins', sans-serif`
    }
});
/* harmony default export */ const theme_0 = (theme);

;// CONCATENATED MODULE: ./pages/_app.tsx




function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.ChakraProvider, {
        theme: theme_0,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 2911:
/***/ (() => {



/***/ }),

/***/ 8930:
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1255));
module.exports = __webpack_exports__;

})();