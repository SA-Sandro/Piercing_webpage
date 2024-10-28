/* empty css                                  */
import { c as createComponent, r as renderTemplate, d as addAttribute, e as createAstro, f as renderSlot, g as renderHead, h as renderComponent, m as maybeRenderHead } from '../astro_D7GAM5ol.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/node_modules/astro/components/ViewTransitions.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$ErrorLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ErrorLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es" class="bg-gray-100"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>', "</title>", '<!-- UIKIT --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.21.5/dist/css/uikit.min.css">', "</head> <body> ", ' <script defer src="https://cdn.jsdelivr.net/npm/uikit@3.21.5/dist/js/uikit.min.js"><\/script> <script defer src="https://cdn.jsdelivr.net/npm/uikit@3.21.5/dist/js/uikit-icons.min.js"><\/script>  </body> </html>'])), title, renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderSlot($$result, $$slots["main"]));
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/layouts/ErrorLayout.astro", void 0);

const $$Astro = createAstro();
const $$Image = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Image;
  const { src, width, height, class: className, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<img loading="lazy"${addAttribute(src, "src")}${addAttribute(width, "width")}${addAttribute(height, "height")}${addAttribute(className, "class")}${addAttribute(alt, "alt")}>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_images/Image.astro", void 0);

const $$Back = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-left" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#d5b981" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 12l14 0"></path> <path d="M5 12l6 6"></path> <path d="M5 12l6 -6"></path> </svg>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_icons/Back.astro", void 0);

const $$Error404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="sm:bg-white sm:shadow sm:m-10 sm:p-10 error-container"> <div> ${renderComponent($$result, "Image", $$Image, { "src": "img/404-error.png", "alt": "error 404", "width": 270, "class": "p-5" })} </div> <div class="flex flex-col md:flex-row items-center justify-center p-7 text-gray-700"> <div class="max-w-md m-auto"> <div class="text-5xl text-[#EB5B00] font-dark font-bold text-center">
Error 404
</div> <p class="text-2xl md:text-3xl font-light leading-normal mt-4">
Lamentamos comunicarle que no pudimos encontrar la página especificada
</p> <p class="mt-4 mb-8">
Pero no te preocupes, puedes volver a la página inicial y continuar con
        su navegación
</p> <div class="text-center"> <a slot="icon" type="button" class="back-anchor" href="index.html">${renderComponent($$result, "Back", $$Back, {})}Volver
</a> </div> </div> </div> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/404_error/Error404.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "ErrorLayout", $$ErrorLayout, { "title": "404 Error" }, { "main": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="h-screen error-container"> ${renderComponent($$result2, "Error404", $$Error404, {})} </div>` })}`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/pages/404.astro", void 0);

const $$file = "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Image as $, _404 as _, $$ViewTransitions as a };
