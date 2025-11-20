module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/pages/api/news.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
async function handler(req, res) {
    const { category = 'general', country = 'us', page = 1, pageSize = 10 } = req.query;
    try {
        const apiKey = process.env.NEWS_API_KEY || ("TURBOPACK compile-time value", "7f14f429d1a24ef184f329a1c8bda3c3");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`);
        // Check if the fetch was successful
        if (!response.ok) {
            const errorData = await response.json();
            console.error('News API Error:', errorData);
            return res.status(response.status).json({
                error: errorData.message || 'Failed to fetch news'
            });
        }
        const data = await response.json();
        res.setHeader("Cache-Control", "no-store");
        res.status(200).json(data);
    } catch (error) {
        console.error('API Route Error:', error);
        res.status(500).json({
            error: 'Internal server error',
            message: error.message
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ef97ca89._.js.map