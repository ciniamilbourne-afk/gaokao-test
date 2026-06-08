"use strict";
exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 8752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/bi"
var bi_ = __webpack_require__(6652);
;// CONCATENATED MODULE: ./components/common/nav.tsx




function Nav() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        as: "nav",
        py: 2,
        px: 5,
        w: "full",
        h: 20,
        justifyContent: "space-between",
        alignItems: "center",
        overflowX: "hidden",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                gap: 5,
                alignItems: "center",
                overflowX: "hidden",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            colorScheme: "black",
                            variant: "link",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            children: "MBTI 性格测试"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://github.com/vsme/mbti",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "//img.shields.io/github/stars/vsme/mbti",
                            alt: "GitHub Repo stars"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/test/result/history",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                    variant: "solid",
                    leftIcon: /*#__PURE__*/ jsx_runtime_.jsx(bi_.BiHistory, {
                        size: 24
                    }),
                    children: "测试历史"
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/common/footer.tsx



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        as: "footer",
        py: 2,
        w: "100%",
        h: "full",
        bg: "black",
        color: "white",
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                children: [
                    "本网站上的所有测试都基于此",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/MBTI-personality-test.pdf",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            colorScheme: "primary",
                            variant: "link",
                            children: "来源"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                children: [
                    "Made by",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://github.com/vsme",
                        target: "_blank",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                            colorScheme: "primary",
                            variant: "link",
                            children: "vsme"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/layouts/main-layout.tsx





function MainLayout(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "MBTI 性格测试"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "MBTI 性格测试"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                w: "full",
                minH: "100vh",
                background: props.hideBackground ? "transparent" : "linear-gradient(to bottom, rgba(66, 152, 255, 1) 0%, rgba(66, 152, 255, 0.6) 80px, rgba(127, 187, 255, 0.6), rgba(244, 244, 180, 0.6), rgba(252, 242, 59, 0.6))",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Nav, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        as: "main",
                        w: "100%",
                        minH: "calc(100vh - 80px)",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "relative",
                        children: props.children
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
}


/***/ })

};
;