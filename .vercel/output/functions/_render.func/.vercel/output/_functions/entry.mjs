import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BLjnqvRS.mjs';
import { manifest } from './manifest_COLpOCV8.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/logout.astro.mjs');
const _page2 = () => import('./pages/api/subscription/cancel.astro.mjs');
const _page3 = () => import('./pages/api/subscription/checkout.astro.mjs');
const _page4 = () => import('./pages/api/subscription/portal.astro.mjs');
const _page5 = () => import('./pages/api/subscription/resume.astro.mjs');
const _page6 = () => import('./pages/auto-login.astro.mjs');
const _page7 = () => import('./pages/checkout/cancel.astro.mjs');
const _page8 = () => import('./pages/checkout/success.astro.mjs');
const _page9 = () => import('./pages/checkout.astro.mjs');
const _page10 = () => import('./pages/cuenta.astro.mjs');
const _page11 = () => import('./pages/login.astro.mjs');
const _page12 = () => import('./pages/privacidad.astro.mjs');
const _page13 = () => import('./pages/registro.astro.mjs');
const _page14 = () => import('./pages/terminos.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/logout.ts", _page1],
    ["src/pages/api/subscription/cancel.ts", _page2],
    ["src/pages/api/subscription/checkout.ts", _page3],
    ["src/pages/api/subscription/portal.ts", _page4],
    ["src/pages/api/subscription/resume.ts", _page5],
    ["src/pages/auto-login.astro", _page6],
    ["src/pages/checkout/cancel.astro", _page7],
    ["src/pages/checkout/success.astro", _page8],
    ["src/pages/checkout.astro", _page9],
    ["src/pages/cuenta.astro", _page10],
    ["src/pages/login.astro", _page11],
    ["src/pages/privacidad.astro", _page12],
    ["src/pages/registro.astro", _page13],
    ["src/pages/terminos.astro", _page14],
    ["src/pages/index.astro", _page15]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "717f3668-2580-412b-9a1a-65c645b41402",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
