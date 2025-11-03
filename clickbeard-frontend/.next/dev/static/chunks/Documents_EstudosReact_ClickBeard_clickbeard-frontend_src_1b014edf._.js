(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/services/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// Obtém a URL da API do arquivo .env.local
const API_URL = ("TURBOPACK compile-time value", "http://localhost:3001/api");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// Cria uma instância customizada do Axios
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: API_URL,
    // *** A CORREÇÃO ESTÁ AQUI ***
    // O 'Content-Type' global foi REMOVIDO.
    // O Axios agora irá definir 'application/json' para requisições
    // normais e 'multipart/form-data' para uploads (FormData)
    // automaticamente.
    headers: {
    }
});
// Interceptor para adicionar o token JWT em TODAS as requisições
api.interceptors.request.use((config)=>{
    // Acessa o token do localStorage
    if ("TURBOPACK compile-time truthy", 1) {
        const token = localStorage.getItem('authToken');
        if (token) {
            // Se o token existir, adiciona o cabeçalho Authorization
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/context/AuthContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/services/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthProvider.useEffect": ()=>{
            // Tenta carregar o usuário do localStorage ao iniciar
            const storedToken = localStorage.getItem('authToken');
            const storedUser = localStorage.getItem('authUser');
            if (storedToken && storedUser) {
                try {
                    const parsedUser = JSON.parse(storedUser);
                    setUser(parsedUser);
                } catch (e) {
                    console.error("Erro ao parsear dados do usuário:", e);
                    // Limpa dados inválidos
                    localStorage.removeItem('authToken');
                    localStorage.removeItem('authUser');
                }
            }
            setLoading(false);
        }
    }["AuthProvider.useEffect"], []);
    const handleAuthSuccess = (token, userData)=>{
        localStorage.setItem('authToken', token);
        localStorage.setItem('authUser', JSON.stringify(userData));
        setUser(userData);
    // Note: Usamos api.defaults.headers.common['Authorization'] fora do useEffect
    // para que ele seja re-aplicado após o login
    };
    const login = async (email, password)=>{
        try {
            setLoading(true);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/login', {
                email,
                password
            });
            const { token: token_0, user: userData_0 } = response.data;
            handleAuthSuccess(token_0, userData_0);
            // Redireciona para home ou painel
            router.push(userData_0.role === 'ADMIN' ? '/admin' : '/');
        } catch (error) {
            // <-- Remoção do tipo 'any' aqui
            const axiosError = error; // Tipagem para o AxiosError
            const message = axiosError.response?.data?.error || 'Falha no login. Verifique suas credenciais.';
            throw new Error(message);
        } finally{
            setLoading(false);
        }
    };
    const register = async (name, email_0, password_0)=>{
        try {
            setLoading(true);
            const response_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post('/auth/register', {
                name,
                email: email_0,
                password: password_0
            });
            const { token: token_1, user: userData_1 } = response_0.data;
            handleAuthSuccess(token_1, userData_1);
            // Cadastro bem-sucedido, redireciona
            router.push('/');
        } catch (error_0) {
            // <-- Remoção do tipo 'any' aqui
            const axiosError_0 = error_0; // Tipagem para o AxiosError
            const message_0 = axiosError_0.response?.data?.error || 'Falha no cadastro.';
            throw new Error(message_0);
        } finally{
            setLoading(false);
        }
    };
    const logout = ()=>{
        localStorage.removeItem('authToken');
        localStorage.removeItem('authUser');
        delete __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$services$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaults.headers.common['Authorization'];
        setUser(null);
        router.push('/login');
    };
    const isAuthenticated = !!user;
    const isAdmin = user?.role === 'ADMIN';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            isAuthenticated,
            isAdmin,
            login,
            register,
            logout,
            loading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/context/AuthContext.tsx",
        lineNumber: 127,
        columnNumber: 10
    }, this);
}
_s(AuthProvider, "J17Kp8z+0ojgAqGoY5o3BCjwWms=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "a5023c960a62099a778200e23652dfbae73ead7f034c439027aeeb87b76747c1") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a5023c960a62099a778200e23652dfbae73ead7f034c439027aeeb87b76747c1";
    }
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};
_s1(useAuth, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const navItems = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Agendamento',
        href: '/booking'
    },
    {
        name: 'Meus Agendamentos',
        href: '/my-appointments'
    },
    {
        name: 'Especialidades',
        href: '/specialties'
    },
    {
        name: 'Nossos Barbeiros',
        href: '/barbers'
    }
];
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(46);
    if ($[0] !== "127b3dc29f204c216a93bf2fb64ccd3a159fb7088a754ef64258e0089a5ce1db") {
        for(let $i = 0; $i < 46; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "127b3dc29f204c216a93bf2fb64ccd3a159fb7088a754ef64258e0089a5ce1db";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isAuthenticated, user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    if ($[1] !== isAuthenticated || $[2] !== isMobileMenuOpen || $[3] !== logout || $[4] !== pathname || $[5] !== user?.name) {
        let t5;
        if ($[11] !== isAuthenticated) {
            t5 = ({
                "Header[navItems.filter()]": (item)=>{
                    if (item.name === "Meus Agendamentos" && !isAuthenticated) {
                        return false;
                    }
                    return true;
                }
            })["Header[navItems.filter()]"];
            $[11] = isAuthenticated;
            $[12] = t5;
        } else {
            t5 = $[12];
        }
        const filteredNavItems = navItems.filter(t5);
        t3 = "bg-gray-900 shadow-md sticky top-0 z-50";
        let t6;
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "flex items-center gap-3 text-white text-2xl font-serif font-bold tracking-wider w-fit",
                onClick: {
                    "Header[<Link>.onClick]": ()=>setIsMobileMenuOpen(false)
                }["Header[<Link>.onClick]"],
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/LogoB.png",
                        alt: "ClickBeard Logo",
                        width: 46,
                        height: 46,
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                        lineNumber: 68,
                        columnNumber: 36
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "ClickBeard"
                    }, void 0, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                        lineNumber: 68,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                lineNumber: 66,
                columnNumber: 12
            }, this);
            $[13] = t6;
        } else {
            t6 = $[13];
        }
        let t7;
        if ($[14] !== pathname) {
            t7 = ({
                "Header[filteredNavItems.map()]": (item_0)=>{
                    const isActive = pathname === item_0.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item_0.href,
                        className: `
                    text-sm font-medium transition duration-150 ease-in-out
                    ${isActive ? "text-yellow-400 border-b-2 border-yellow-400" : "text-gray-300 hover:text-white"}
                  `,
                        children: item_0.name
                    }, item_0.name, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                        lineNumber: 78,
                        columnNumber: 18
                    }, this);
                }
            })["Header[filteredNavItems.map()]"];
            $[14] = pathname;
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        let t8;
        if ($[16] !== isAuthenticated || $[17] !== logout || $[18] !== user?.name) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden lg:flex items-center space-x-4",
                children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm text-gray-400 hidden sm:inline",
                            children: [
                                "Olá, ",
                                user?.name.split(" ")[0],
                                "!"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                            lineNumber: 91,
                            columnNumber: 88
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: logout,
                            className: "bg-red-500 hover:bg-red-600 text-white font-bold py-1.5 px-4 rounded-lg shadow-lg transition duration-300 text-sm",
                            children: "Sair"
                        }, void 0, false, {
                            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                            lineNumber: 91,
                            columnNumber: 184
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/login",
                    className: "bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-1.5 px-4 rounded-lg shadow-lg transition duration-300 text-sm",
                    children: "Login / Cadastrar"
                }, void 0, false, {
                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                    lineNumber: 91,
                    columnNumber: 354
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                lineNumber: 91,
                columnNumber: 12
            }, this);
            $[16] = isAuthenticated;
            $[17] = logout;
            $[18] = user?.name;
            $[19] = t8;
        } else {
            t8 = $[19];
        }
        let t9;
        if ($[20] !== isMobileMenuOpen) {
            t9 = ({
                "Header[<button>.onClick]": ()=>setIsMobileMenuOpen(!isMobileMenuOpen)
            })["Header[<button>.onClick]"];
            $[20] = isMobileMenuOpen;
            $[21] = t9;
        } else {
            t9 = $[21];
        }
        let t10;
        if ($[22] !== isMobileMenuOpen) {
            t10 = isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                lineNumber: 111,
                columnNumber: 32
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                className: "w-6 h-6"
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                lineNumber: 111,
                columnNumber: 60
            }, this);
            $[22] = isMobileMenuOpen;
            $[23] = t10;
        } else {
            t10 = $[23];
        }
        let t11;
        if ($[24] !== t10 || $[25] !== t9) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t9,
                    className: "text-gray-300 hover:text-white p-2 rounded-md",
                    "aria-label": "Abrir menu",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                    lineNumber: 119,
                    columnNumber: 58
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                lineNumber: 119,
                columnNumber: 13
            }, this);
            $[24] = t10;
            $[25] = t9;
            $[26] = t11;
        } else {
            t11 = $[26];
        }
        const t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-between items-center h-16",
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden lg:flex space-x-6",
                    children: filteredNavItems.map(t7)
                }, void 0, false, {
                    fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                    lineNumber: 126,
                    columnNumber: 77
                }, this),
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
            lineNumber: 126,
            columnNumber: 17
        }, this);
        if ($[27] !== t12) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                children: t12
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                lineNumber: 128,
                columnNumber: 12
            }, this);
            $[27] = t12;
            $[28] = t4;
        } else {
            t4 = $[28];
        }
        t2 = `${isMobileMenuOpen ? "block" : "hidden"} lg:hidden border-t border-gray-700`;
        t0 = "px-2 pt-2 pb-3 space-y-1 sm:px-3";
        let t13;
        if ($[29] !== pathname) {
            t13 = ({
                "Header[filteredNavItems.map()]": (item_1)=>{
                    const isActive_0 = pathname === item_1.href;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: item_1.href,
                        onClick: {
                            "Header[filteredNavItems.map() > <Link>.onClick]": ()=>setIsMobileMenuOpen(false)
                        }["Header[filteredNavItems.map() > <Link>.onClick]"],
                        className: `
                  block px-3 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out
                  ${isActive_0 ? "bg-yellow-500 text-gray-900" : "text-gray-300 hover:bg-gray-700 hover:text-white"}
                `,
                        children: item_1.name
                    }, item_1.name, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                        lineNumber: 141,
                        columnNumber: 18
                    }, this);
                }
            })["Header[filteredNavItems.map()]"];
            $[29] = pathname;
            $[30] = t13;
        } else {
            t13 = $[30];
        }
        t1 = filteredNavItems.map(t13);
        $[1] = isAuthenticated;
        $[2] = isMobileMenuOpen;
        $[3] = logout;
        $[4] = pathname;
        $[5] = user?.name;
        $[6] = t0;
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t0 = $[6];
        t1 = $[7];
        t2 = $[8];
        t3 = $[9];
        t4 = $[10];
    }
    let t5;
    if ($[31] !== t0 || $[32] !== t1) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
            lineNumber: 174,
            columnNumber: 10
        }, this);
        $[31] = t0;
        $[32] = t1;
        $[33] = t5;
    } else {
        t5 = $[33];
    }
    let t6;
    if ($[34] !== isAuthenticated || $[35] !== logout || $[36] !== user?.name) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-t border-gray-700 pt-4 pb-3 px-4",
            children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-base font-medium text-gray-300",
                        children: [
                            "Olá, ",
                            user?.name.split(" ")[0],
                            "!"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                        lineNumber: 183,
                        columnNumber: 127
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "Header[<button>.onClick]": ()=>{
                                logout();
                                setIsMobileMenuOpen(false);
                            }
                        }["Header[<button>.onClick]"],
                        className: "w-full text-left bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg shadow-lg transition duration-300 text-sm",
                        children: "Sair"
                    }, void 0, false, {
                        fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                        lineNumber: 183,
                        columnNumber: 220
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                lineNumber: 183,
                columnNumber: 86
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/login",
                onClick: {
                    "Header[<Link>.onClick]": ()=>setIsMobileMenuOpen(false)
                }["Header[<Link>.onClick]"],
                className: "block w-full text-center bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 text-sm",
                children: "Login / Cadastrar"
            }, void 0, false, {
                fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
                lineNumber: 188,
                columnNumber: 203
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
            lineNumber: 183,
            columnNumber: 10
        }, this);
        $[34] = isAuthenticated;
        $[35] = logout;
        $[36] = user?.name;
        $[37] = t6;
    } else {
        t6 = $[37];
    }
    let t7;
    if ($[38] !== t2 || $[39] !== t5 || $[40] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        $[38] = t2;
        $[39] = t5;
        $[40] = t6;
        $[41] = t7;
    } else {
        t7 = $[41];
    }
    let t8;
    if ($[42] !== t3 || $[43] !== t4 || $[44] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: t3,
            children: [
                t4,
                t7
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/EstudosReact/ClickBeard/clickbeard-frontend/src/components/Header/Header.tsx",
            lineNumber: 210,
            columnNumber: 10
        }, this);
        $[42] = t3;
        $[43] = t4;
        $[44] = t7;
        $[45] = t8;
    } else {
        t8 = $[45];
    }
    return t8;
}
_s(Header, "gnc6Bc1i0O3NEBPOOsvKRlaZUDc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$EstudosReact$2f$ClickBeard$2f$clickbeard$2d$frontend$2f$src$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_EstudosReact_ClickBeard_clickbeard-frontend_src_1b014edf._.js.map