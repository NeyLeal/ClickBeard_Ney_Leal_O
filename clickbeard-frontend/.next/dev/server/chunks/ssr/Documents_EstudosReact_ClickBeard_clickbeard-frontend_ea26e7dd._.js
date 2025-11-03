module.exports = [
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpecialtyCard",
    ()=>SpecialtyCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/context/AuthContext.tsx [app-ssr] (ecmascript)"); // Importar useAuth para verificar isAdmin
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>"); // Ícone de exclusão
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"); // Importar useState para o modal
;
;
;
;
;
function SpecialtyCard({ specialty, onSpecialtyDeleted }) {
    const { isAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])(); // Pega o status de Admin
    const [isConfirming, setIsConfirming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false); // Estado para visibilidade do modal
    // 1. Abre o modal de confirmação
    const startDelete = (e)=>{
        e.preventDefault();
        setIsConfirming(true);
    };
    // 2. Confirma a exclusão e chama o callback (com verificação de segurança)
    const confirmDelete = ()=>{
        setIsConfirming(false);
        if (onSpecialtyDeleted) {
            onSpecialtyDeleted(specialty.id);
        } else {
            console.error("onSpecialtyDeleted callback is missing.");
        }
    };
    // 3. Cancela a exclusão
    const cancelDelete = ()=>{
        setIsConfirming(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden group relative",
        children: [
            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: startDelete,
                className: "absolute top-2 right-2 p-2 bg-red-600/90 text-white text-center rounded-full hover:bg-red-700 transition duration-200 z-10 shadow-lg",
                title: "Excluir Especialidade",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-900 mb-2 border-b pb-1 border-yellow-500",
                        children: specialty.name
                    }, void 0, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4 text-sm min-h-10",
                        children: specialty.description
                    }, void 0, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center pt-2 border-t",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg font-extrabold text-yellow-600",
                                children: new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(specialty.price)
                            }, void 0, false, {
                                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/booking",
                                className: "text-sm font-semibold text-white bg-gray-900 px-4 py-1.5 rounded-full hover:bg-yellow-600 transition duration-200 shadow-md",
                                children: "Agendar"
                            }, void 0, false, {
                                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            isConfirming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-xl p-6 w-full max-w-sm shadow-2xl border-t-4 border-red-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "text-xl font-bold text-red-700 mb-3",
                            children: "Confirmação de Exclusão"
                        }, void 0, false, {
                            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-700 mb-6",
                            children: [
                                "Tem certeza que deseja excluir o serviço **",
                                specialty.name,
                                "**?",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                "Esta ação é irreversível e excluirá todos os agendamentos e atribuições relacionadas."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: cancelDelete,
                                    className: "px-4 py-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-150",
                                    children: "Cancelar"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: confirmDelete,
                                    className: "px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-150",
                                    children: "Excluir"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                            lineNumber: 82,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpecialtiesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/services/api.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$components$2f$SpecialtyCard$2f$SpecialtyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/SpecialtyCard/SpecialtyCard.tsx [app-ssr] (ecmascript)"); // Assumindo o componente Card
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>"); // Ícones
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/context/AuthContext.tsx [app-ssr] (ecmascript)"); // Contexto de autenticação
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/axios/index.js [app-ssr] (ecmascript) <locals>");
'use client';
;
;
;
;
;
;
;
function SpecialtiesPage() {
    const [specialties, setSpecialties] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { isAdmin, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])(); // Obtendo isAdmin e logout
    // 1. Função de busca inicial
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchSpecialties() {
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('/specialties');
                setSpecialties(response.data);
            } catch (err) {
                setError('Não foi possível carregar as especialidades do servidor.');
                console.error(err);
            } finally{
                setLoading(false);
            }
        }
        fetchSpecialties();
    }, []);
    // Função para adicionar a nova especialidade
    const handleSpecialtyAdded = (newSpecialty)=>{
        // Adiciona a nova especialidade no início da lista
        setSpecialties((currentSpecialties)=>[
                newSpecialty,
                ...currentSpecialties
            ]);
    };
    // 2. FUNÇÃO QUE CHAMA O ENDPOINT DELETE E ATUALIZA A LISTA
    const handleSpecialtyDeleted = async (specialtyId)=>{
        try {
            if (!isAdmin) {
                setError('Erro: Apenas administradores podem excluir serviços.');
                return;
            }
            // Chamada DELETE (Axios) para o endpoint: /api/barbers/specialties/:id
            await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/specialties/${specialtyId}`);
            // Se a requisição for bem-sucedida (status 204), atualiza o estado
            setSpecialties((currentSpecialties)=>currentSpecialties.filter((s)=>s.id !== specialtyId));
        // Sucesso: Idealmente, exiba uma notificação aqui.
        } catch (err) {
            let msg = 'Falha ao excluir especialidade.';
            if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
                if (err.response?.status === 401 || err.response?.status === 403) {
                    msg = 'Acesso negado. Sua sessão expirou ou você não é administrador.';
                    logout(); // Força o logout se a sessão falhar
                } else if (err.response?.data?.error) {
                    msg = err.response.data.error; // Erro do backend (ex: não encontrado)
                }
            }
            setError(msg);
            console.error('Erro de exclusão:', err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-extrabold text-gray-900 mb-3 text-center",
                children: "Nossos Serviços"
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto",
                children: "Conheça os cortes, tratamentos e serviços premium oferecidos pela ClickBeard."
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AddSpecialtyForm, {
                onSpecialtyAdded: handleSpecialtyAdded,
                onAuthError: logout
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                lineNumber: 81,
                columnNumber: 19
            }, this),
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-8 h-8 animate-spin text-yellow-500"
                    }, void 0, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "ml-3 text-gray-600",
                        children: "Carregando serviços..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center",
                children: error
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this),
            !loading && !error && specialties.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg text-center",
                children: "Nenhuma especialidade encontrada. O administrador precisa cadastrar os serviços."
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12",
                children: specialties.map((specialty)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$components$2f$SpecialtyCard$2f$SpecialtyCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpecialtyCard"], {
                        specialty: specialty,
                        // PROPRIEDADE PASSADA PARA O CARD
                        onSpecialtyDeleted: handleSpecialtyDeleted
                    }, specialty.id, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, this);
}
function AddSpecialtyForm({ onSpecialtyAdded, onAuthError }) {
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(''); // Estado para o preço (string para input)
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const parsedPrice = parseFloat(price.replace(',', '.')); // Substitui vírgula por ponto para garantir float
        if (!name || isNaN(parsedPrice) || parsedPrice <= 0) {
            setError('O nome e um preço válido (maior que zero) são obrigatórios.');
            return;
        }
        setIsSubmitting(true);
        setError(null);
        try {
            // Endpoint: /api/barbers/specialties (POST)
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post('/specialties', {
                name,
                description,
                price: parsedPrice
            });
            // Limpa o formulário
            setName('');
            setDescription('');
            setPrice(''); // Limpa o preço
            // Adiciona a nova especialidade à lista na página pai
            onSpecialtyAdded(response.data);
        } catch (err) {
            let msg = 'Erro ao cadastrar especialidade.';
            if (err instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["AxiosError"]) {
                if (err.response?.status === 401 || err.response?.status === 403) {
                    // Se a sessão expirou, dispara o logout global
                    msg = 'Sua sessão expirou. Você será redirecionado para o login.';
                    onAuthError();
                } else if (err.response?.data?.error) {
                    msg = err.response.data.error; // Erro de backend (ex: "Essa especialidade já existe.")
                }
            }
            setError(msg);
            console.error(err);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 p-6 rounded-xl shadow-lg border border-yellow-300 mb-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold text-gray-800 mb-4 flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlusCircle$3e$__["PlusCircle"], {
                        className: "w-6 h-6 mr-2 text-yellow-600"
                    }, void 0, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this),
                    "Cadastrar Novo Serviço"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "spec-name",
                                        className: "block text-sm font-medium text-gray-700",
                                        children: "Nome do Serviço"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                                        lineNumber: 191,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        id: "spec-name",
                                        value: name,
                                        onChange: (e)=>setName(e.target.value),
                                        className: "mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "spec-price",
                                        className: "block text-sm font-medium text-gray-700",
                                        children: "Preço (R$)"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        id: "spec-price",
                                        value: price,
                                        onChange: (e)=>setPrice(e.target.value),
                                        min: "0.01",
                                        step: "0.01",
                                        placeholder: "Ex: 50.00",
                                        className: "mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                                        lineNumber: 202,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "spec-desc",
                                className: "block text-sm font-medium text-gray-700",
                                children: "Descrição (Opcional)"
                            }, void 0, false, {
                                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "spec-desc",
                                rows: 2,
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                className: "mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            }, void 0, false, {
                                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                        lineNumber: 215,
                        columnNumber: 9
                    }, this),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-red-600 text-sm",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                        lineNumber: 226,
                        columnNumber: 19
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isSubmitting,
                            className: "w-full md:w-auto px-6 py-2 bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 disabled:opacity-50 flex items-center justify-center transition duration-150",
                            children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-5 h-5 animate-spin mr-2"
                            }, void 0, false, {
                                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                                lineNumber: 234,
                                columnNumber: 29
                            }, this) : 'Cadastrar Serviço'
                        }, void 0, false, {
                            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/app/specialties/page.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Trash2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10 11v6",
            key: "nco0om"
        }
    ],
    [
        "path",
        {
            d: "M14 11v6",
            key: "outv1u"
        }
    ],
    [
        "path",
        {
            d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
            key: "miytrc"
        }
    ],
    [
        "path",
        {
            d: "M3 6h18",
            key: "d0wm0j"
        }
    ],
    [
        "path",
        {
            d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
            key: "e791ji"
        }
    ]
];
const Trash2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("trash-2", __iconNode);
;
 //# sourceMappingURL=trash-2.js.map
}),
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Trash2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>LoaderCircle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}),
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Loader2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CirclePlus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "path",
        {
            d: "M8 12h8",
            key: "1wcyev"
        }
    ],
    [
        "path",
        {
            d: "M12 8v8",
            key: "napkw2"
        }
    ]
];
const CirclePlus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-plus", __iconNode);
;
 //# sourceMappingURL=circle-plus.js.map
}),
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript) <export default as PlusCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PlusCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/circle-plus.js [app-ssr] (ecmascript)");
}),
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/axios/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Axios",
    ()=>Axios,
    "AxiosError",
    ()=>AxiosError,
    "AxiosHeaders",
    ()=>AxiosHeaders,
    "Cancel",
    ()=>Cancel,
    "CancelToken",
    ()=>CancelToken,
    "CanceledError",
    ()=>CanceledError,
    "HttpStatusCode",
    ()=>HttpStatusCode,
    "VERSION",
    ()=>VERSION,
    "all",
    ()=>all,
    "formToJSON",
    ()=>formToJSON,
    "getAdapter",
    ()=>getAdapter,
    "isAxiosError",
    ()=>isAxiosError,
    "isCancel",
    ()=>isCancel,
    "mergeConfig",
    ()=>mergeConfig,
    "spread",
    ()=>spread,
    "toFormData",
    ()=>toFormData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
// This module is intended to unwrap Axios default export as named.
// Keep top-level export same with static properties
// so that it can keep same with es module or cjs
const { Axios, AxiosError, CanceledError, isCancel, CancelToken, VERSION, all, Cancel, isAxiosError, spread, toFormData, AxiosHeaders, HttpStatusCode, formToJSON, getAdapter, mergeConfig } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
;
}),
];

//# sourceMappingURL=Documents_EstudosReact_ClickBeard_clickbeard-frontend_ea26e7dd._.js.map