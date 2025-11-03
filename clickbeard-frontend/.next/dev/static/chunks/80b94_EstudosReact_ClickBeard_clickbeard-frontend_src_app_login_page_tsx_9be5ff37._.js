(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LoginPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "b8901dd3f375feb831d97b75301267a6bb15505e077d6e3fbd84957b76f6c393") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b8901dd3f375feb831d97b75301267a6bb15505e077d6e3fbd84957b76f6c393";
    }
    const [isRegister, setIsRegister] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { login, register, loading, isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    let t1;
    if ($[1] !== isAuthenticated || $[2] !== router) {
        t0 = ({
            "LoginPage[useEffect()]": ()=>{
                if (isAuthenticated && ("TURBOPACK compile-time value", "object") !== "undefined") {
                    router.push("/");
                }
            }
        })["LoginPage[useEffect()]"];
        t1 = [
            isAuthenticated,
            router
        ];
        $[1] = isAuthenticated;
        $[2] = router;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[5] !== email || $[6] !== isRegister || $[7] !== login || $[8] !== name || $[9] !== password || $[10] !== register) {
        t2 = ({
            "LoginPage[handleSubmit]": async (e)=>{
                e.preventDefault();
                setError("");
                ;
                try {
                    if (isRegister) {
                        await register(name, email, password);
                    } else {
                        await login(email, password);
                    }
                } catch (t3) {
                    const err = t3;
                    if (err instanceof Error) {
                        setError(err.message);
                    } else {
                        setError("Ocorreu um erro desconhecido.");
                    }
                }
            }
        })["LoginPage[handleSubmit]"];
        $[5] = email;
        $[6] = isRegister;
        $[7] = login;
        $[8] = name;
        $[9] = password;
        $[10] = register;
        $[11] = t2;
    } else {
        t2 = $[11];
    }
    const handleSubmit = t2;
    if (isAuthenticated) {
        return null;
    }
    const t3 = isRegister ? "Crie Sua Conta" : "Acesse Sua Conta";
    let t4;
    if ($[12] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-3xl font-extrabold text-center text-gray-900",
            children: t3
        }, void 0, false, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[12] = t3;
        $[13] = t4;
    } else {
        t4 = $[13];
    }
    let t5;
    if ($[14] !== isRegister || $[15] !== name) {
        t5 = isRegister && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    htmlFor: "name",
                    className: "block text-sm font-medium text-gray-700",
                    children: "Nome Completo"
                }, void 0, false, {
                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
                    lineNumber: 95,
                    columnNumber: 29
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "name",
                    name: "name",
                    type: "text",
                    required: true,
                    value: name,
                    onChange: {
                        "LoginPage[<input>.onChange]": (e_0)=>setName(e_0.target.value)
                    }["LoginPage[<input>.onChange]"],
                    className: "w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
                    lineNumber: 95,
                    columnNumber: 124
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
            lineNumber: 95,
            columnNumber: 24
        }, this);
        $[14] = isRegister;
        $[15] = name;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "block text-sm font-medium text-gray-700",
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[17] = t6;
    } else {
        t6 = $[17];
    }
    let t7;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "LoginPage[<input>.onChange]": (e_1)=>setEmail(e_1.target.value)
        })["LoginPage[<input>.onChange]"];
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    let t8;
    if ($[19] !== email) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "email",
                    name: "email",
                    type: "email",
                    autoComplete: "email",
                    required: true,
                    value: email,
                    onChange: t7,
                    className: "w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
                    lineNumber: 122,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[19] = email;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    let t9;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "password",
            className: "block text-sm font-medium text-gray-700",
            children: "Senha"
        }, void 0, false, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "LoginPage[<input>.onChange]": (e_2)=>setPassword(e_2.target.value)
        })["LoginPage[<input>.onChange]"];
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== password) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    id: "password",
                    name: "password",
                    type: "password",
                    autoComplete: "current-password",
                    required: true,
                    value: password,
                    onChange: t10,
                    className: "w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
                    lineNumber: 146,
                    columnNumber: 20
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
            lineNumber: 146,
            columnNumber: 11
        }, this);
        $[23] = password;
        $[24] = t11;
    } else {
        t11 = $[24];
    }
    let t12;
    if ($[25] !== error) {
        t12 = error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 text-sm font-medium text-red-700 bg-red-100 rounded-md border border-red-300",
            children: error
        }, void 0, false, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
            lineNumber: 154,
            columnNumber: 20
        }, this);
        $[25] = error;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    const t13 = loading ? "Processando..." : isRegister ? "Cadastrar" : "Entrar";
    let t14;
    if ($[27] !== loading || $[28] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            disabled: loading,
            className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50",
            children: t13
        }, void 0, false, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[27] = loading;
        $[28] = t13;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== handleSubmit || $[31] !== t11 || $[32] !== t12 || $[33] !== t14 || $[34] !== t5 || $[35] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "space-y-6",
            onSubmit: handleSubmit,
            children: [
                t5,
                t8,
                t11,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[30] = handleSubmit;
        $[31] = t11;
        $[32] = t12;
        $[33] = t14;
        $[34] = t5;
        $[35] = t8;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    let t16;
    if ($[37] !== isRegister) {
        t16 = ({
            "LoginPage[<button>.onClick]": ()=>setIsRegister(!isRegister)
        })["LoginPage[<button>.onClick]"];
        $[37] = isRegister;
        $[38] = t16;
    } else {
        t16 = $[38];
    }
    const t17 = isRegister ? "J\xE1 tem uma conta? Fa\xE7a login" : "N\xE3o tem uma conta? Crie uma agora";
    let t18;
    if ($[39] !== t16 || $[40] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-sm",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t16,
                className: "font-medium text-yellow-600 hover:text-yellow-500 transition duration-150",
                children: t17
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
                lineNumber: 196,
                columnNumber: 48
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[39] = t16;
        $[40] = t17;
        $[41] = t18;
    } else {
        t18 = $[41];
    }
    let t19;
    if ($[42] !== t15 || $[43] !== t18 || $[44] !== t4) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[calc(100vh-10rem)] bg-gray-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl border border-gray-200",
                children: [
                    t4,
                    t15,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
                lineNumber: 205,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/login/page.tsx",
            lineNumber: 205,
            columnNumber: 11
        }, this);
        $[42] = t15;
        $[43] = t18;
        $[44] = t4;
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    return t19;
}
_s(LoginPage, "QFCOzVi4Qv2rIOviVVAzf27J3/Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=80b94_EstudosReact_ClickBeard_clickbeard-frontend_src_app_login_page_tsx_9be5ff37._.js.map