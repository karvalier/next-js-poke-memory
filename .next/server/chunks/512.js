"use strict";
exports.id = 512;
exports.ids = [512];
exports.modules = {

/***/ 8512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./styles/logo.png
/* harmony default export */ const logo = ({"src":".//_next/static/media/logo.ad7edca0.png","height":74,"width":201,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/Abqie1b9///0tdkf8isW9UPt+AcfLBXrvZbOHtkpEPz7AbiecsMJB/488vcI/wwH+AHt9Q0AFg3wAPb6BgANCPrgAVdZei9HMf+aCAgCu9rnCd7w9QLi7/oGIEUn6k0QCvjb7fswtnJl9HgAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./components/header.js




const Header = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "bg-gray-600 text-white shadow-xl",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "flex flex-row justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "m-2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo,
                                width: 120,
                                height: 60,
                                alt: "Picture of the author"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        className: "m-2 text-3xl",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "Jugar"
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header = (Header);


/***/ })

};
;