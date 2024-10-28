import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DoERr7X9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_k736vELz.mjs');
const _page1 = () => import('./chunks/404_BuZzkWHR.mjs');
const _page2 = () => import('./chunks/body-piercing_AlO72ZdF.mjs');
const _page3 = () => import('./chunks/ear-piercing_uBV9XEWm.mjs');
const _page4 = () => import('./chunks/face-piercing_Ccx4XLE_.mjs');
const _page5 = () => import('./chunks/genitals-piercing_Cr5dO_vM.mjs');
const _page6 = () => import('./chunks/index_CgN0H6nJ.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/body-piercing.astro", _page2],
    ["src/pages/ear-piercing.astro", _page3],
    ["src/pages/face-piercing.astro", _page4],
    ["src/pages/genitals-piercing.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "cc644dc7-2a84-45ff-8876-cee3730775d2"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
