import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DC1Bq1ok.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_IyzZNsnk.mjs');
const _page1 = () => import('./chunks/about_B03cEWEc.mjs');
const _page2 = () => import('./chunks/_slug__DN1KWip4.mjs');
const _page3 = () => import('./chunks/index_r869oTL5.mjs');
const _page4 = () => import('./chunks/projects_yk_TMrlB.mjs');
const _page5 = () => import('./chunks/index_DDiridIj.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/projects.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "cfd80c31-4907-45c6-9f74-3e255b571ccf"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
