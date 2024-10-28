import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CFIz2Rkc.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_k736vELz.mjs');
const _page1 = () => import('./chunks/404_6uR4BlsX.mjs');
const _page2 = () => import('./chunks/body-piercing_B-JtU1Zw.mjs');
const _page3 = () => import('./chunks/ear-piercing_DcX_VRgW.mjs');
const _page4 = () => import('./chunks/face-piercing_C8xMaS1H.mjs');
const _page5 = () => import('./chunks/genitals-piercing_Dz8C_UKY.mjs');
const _page6 = () => import('./chunks/index_CweQ598t.mjs');
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
    "middlewareSecret": "7ebcd7ce-59e2-48e1-867e-48a53e2752c4"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
