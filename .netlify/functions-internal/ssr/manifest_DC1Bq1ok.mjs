import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_PrnGsJGW.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.rkpW2osr.css"},{"type":"external","src":"/_astro/about.B0a9OMnn.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.rkpW2osr.css"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.rkpW2osr.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.rkpW2osr.css"}],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.getElementById(\"link-menu-button\"),n=document.getElementById(\"link-menu\"),i=document.getElementById(\"open-indicator\");e.addEventListener(\"click\",()=>{n.classList.contains(\"opacity-0\")?(n.classList.remove(\"pointer-events-none\"),n.classList.remove(\"opacity-0\"),i.innerText=\"-\"):(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});document.addEventListener(\"click\",t=>{const s=t.target===e||e.contains(t.target),c=t.target===n||n.contains(t.target);!s&&!c&&(n.classList.add(\"pointer-events-none\"),n.classList.add(\"opacity-0\"),i.innerText=\"+\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.rkpW2osr.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/davidmf/portfolio/my-portfolio/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/davidmf/portfolio/my-portfolio/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/davidmf/portfolio/my-portfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/davidmf/portfolio/my-portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/davidmf/portfolio/my-portfolio/src/pages/projects.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Nneu3Mfw.mjs","/src/pages/projects.astro":"chunks/pages/projects_tkiTLsiJ.mjs","\u0000@astrojs-manifest":"manifest_DC1Bq1ok.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_IyzZNsnk.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_B03cEWEc.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__DN1KWip4.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"chunks/index_r869oTL5.mjs","\u0000@astro-page:src/pages/projects@_@astro":"chunks/projects_yk_TMrlB.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_DDiridIj.mjs","/home/davidmf/portfolio/my-portfolio/src/content/posts/Test.md?astroContentCollectionEntry=true":"chunks/Test_BHcZQUHB.mjs","/home/davidmf/portfolio/my-portfolio/src/content/posts/Test.md?astroPropagatedAssets":"chunks/Test_DW-DVLVH.mjs","/home/davidmf/portfolio/my-portfolio/src/content/posts/Test.md":"chunks/Test_DliRUteB.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Byshf39-.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.B0a9OMnn.css","/_astro/about.rkpW2osr.css","/bytek.png","/climabcn.jpg","/css.png","/demo-1.jpg","/favicon.svg","/html.png","/image.png","/imagen1.jpeg","/imagen2.jpeg","/logo2.webp","/software.jpg","/yosoyjosema.jpg","/fonts/InterVariable.woff2"],"buildFormat":"directory"});

export { manifest };
