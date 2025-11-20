module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/react-router-dom [external] (react-router-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-router-dom", () => require("react-router-dom"));

module.exports = mod;
}),
"[externals]/react-top-loading-bar [external] (react-top-loading-bar, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-top-loading-bar", () => require("react-top-loading-bar"));

module.exports = mod;
}),
"[project]/src/App.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
(()=>{
    const e = new Error("Cannot find module './Components/Navbar'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module './Components/News'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router$2d$dom__$5b$external$5d$__$28$react$2d$router$2d$dom$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-router-dom [external] (react-router-dom, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$top$2d$loading$2d$bar__$5b$external$5d$__$28$react$2d$top$2d$loading$2d$bar$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-top-loading-bar [external] (react-top-loading-bar, cjs)");
;
;
;
;
;
;
;
const App = (props)=>{
    let pageSize = 12;
    let apiKey = process.env.REACT_APP_NEWS_API;
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router$2d$dom__$5b$external$5d$__$28$react$2d$router$2d$dom$2c$__cjs$29$__["BrowserRouter"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Navbar, {}, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 28,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$top$2d$loading$2d$bar__$5b$external$5d$__$28$react$2d$top$2d$loading$2d$bar$2c$__cjs$29$__["default"], {
                    color: "#f11946",
                    progress: progress,
                    height: 3
                }, void 0, false, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 29,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router$2d$dom__$5b$external$5d$__$28$react$2d$router$2d$dom$2c$__cjs$29$__["Routes"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router$2d$dom__$5b$external$5d$__$28$react$2d$router$2d$dom$2c$__cjs$29$__["Route"], {
                            path: "/",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(News, {
                                setProgress: setProgress,
                                apiKey: apiKey,
                                pageSize: pageSize,
                                country: "us",
                                category: "general"
                            }, "general", false, {
                                fileName: "[project]/src/App.js",
                                lineNumber: 36,
                                columnNumber: 38
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 36,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router$2d$dom__$5b$external$5d$__$28$react$2d$router$2d$dom$2c$__cjs$29$__["Route"], {
                            path: "/business",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(News, {
                                setProgress: setProgress,
                                apiKey: apiKey,
                                pageSize: pageSize,
                                country: "us",
                                category: "business"
                            }, "business", false, {
                                fileName: "[project]/src/App.js",
                                lineNumber: 37,
                                columnNumber: 46
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 37,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router$2d$dom__$5b$external$5d$__$28$react$2d$router$2d$dom$2c$__cjs$29$__["Route"], {
                            path: "/entertainment",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(News, {
                                setProgress: setProgress,
                                apiKey: apiKey,
                                pageSize: pageSize,
                                country: "us",
                                category: "entertainment"
                            }, "entertainment", false, {
                                fileName: "[project]/src/App.js",
                                lineNumber: 38,
                                columnNumber: 51
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 38,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router$2d$dom__$5b$external$5d$__$28$react$2d$router$2d$dom$2c$__cjs$29$__["Route"], {
                            path: "/health",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(News, {
                                setProgress: setProgress,
                                apiKey: apiKey,
                                pageSize: pageSize,
                                country: "us",
                                category: "health"
                            }, "health", false, {
                                fileName: "[project]/src/App.js",
                                lineNumber: 39,
                                columnNumber: 44
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 39,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router$2d$dom__$5b$external$5d$__$28$react$2d$router$2d$dom$2c$__cjs$29$__["Route"], {
                            path: "/science",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(News, {
                                setProgress: setProgress,
                                apiKey: apiKey,
                                pageSize: pageSize,
                                country: "us",
                                category: "science"
                            }, "science", false, {
                                fileName: "[project]/src/App.js",
                                lineNumber: 40,
                                columnNumber: 45
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 40,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router$2d$dom__$5b$external$5d$__$28$react$2d$router$2d$dom$2c$__cjs$29$__["Route"], {
                            path: "/sports",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(News, {
                                setProgress: setProgress,
                                apiKey: apiKey,
                                pageSize: pageSize,
                                country: "us",
                                category: "sports"
                            }, "sports", false, {
                                fileName: "[project]/src/App.js",
                                lineNumber: 41,
                                columnNumber: 44
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 41,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$router$2d$dom__$5b$external$5d$__$28$react$2d$router$2d$dom$2c$__cjs$29$__["Route"], {
                            path: "/technology",
                            element: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(News, {
                                setProgress: setProgress,
                                apiKey: apiKey,
                                pageSize: pageSize,
                                country: "us",
                                category: "technology"
                            }, "technology", false, {
                                fileName: "[project]/src/App.js",
                                lineNumber: 42,
                                columnNumber: 48
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/App.js",
                            lineNumber: 42,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/App.js",
                    lineNumber: 35,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/App.js",
            lineNumber: 27,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/App.js",
        lineNumber: 24,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = App;
}),
"[project]/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/App.js [ssr] (ecmascript)");
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$App$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/pages/index.js",
        lineNumber: 4,
        columnNumber: 10
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6834bd52._.js.map