/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent, d as addAttribute, e as createAstro, f as renderSlot, g as renderHead } from '../astro_D7GAM5ol.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Image, a as $$ViewTransitions } from './404_CnQFCZq0.mjs';
/* empty css                                  */
import 'clsx';
/* empty css                          */
/* empty css                                  */

const $$Warning = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="modal-warning" uk-modal bg-close="false"> <div class="uk-modal-dialog uk-modal-body text-justify"> <div class="flex justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": "img/Katapiercing_logo.png", "alt": "Logo de la empresa", "width": 230 })} </div> <h2 class="uk-modal-title mt-0 text-center">
Aviso de Contenido Restringido
</h2> <p class="mt-4 text-xl">
Este sitio web contiene material gráfico de índole sexual y está
      estrictamente restringido a personas mayores de 18 años. El contenido aquí
      presente no es apto para menores de edad y puede ser considerado
      inapropiado para algunos usuarios.
</p> <p class="my-5 text-xl">
Al acceder a esta página, confirmas que tienes al menos 18 años de edad,
      que comprendes que el material gráfico puede incluir representaciones
      explícitas y que accedes de manera voluntaria y consciente a la naturaleza
      del contenido
</p> <p class="uk-text-right"> <button class="back-btn uk-button uk-button-danger uk-modal-close" type="button">
Salir
</button> <button class="continue-btn uk-button uk-button-primary uk-modal-close" type="button">
Entrar
</button> </p> </div> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/warning_modal/Warning.astro", void 0);

const $$Astro$2 = createAstro();
const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Gallery;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="m-auto max-w-7xl mb-12 mt-10"> <div class="title-container"> <div class="py-10">GALERÍA</div> </div> <div class="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-5 gap-x-8" uk-lightbox="animation: slide"> ${images.map((image, key) => renderTemplate`<div${addAttribute([
    "w-72 relative",
    {
      "bg-white shadow-md rounded-xl duration-300 hover:scale-105 hover:shadow-xl": image.explicitContent === false
    }
  ], "class:list")}> <a${addAttribute(`image_${key}`, "id")}${addAttribute(image.url, "href")}${addAttribute(`${image.alt}`, "data-caption")}${addAttribute([
    {
      "explicit-image": image.explicitContent
    }
  ], "class:list")}> ${renderComponent($$result, "ImageComponent", $$Image, { "class": image.explicitContent ? "blurred-image w-80 h-80 rounded-xl" : "w-80 h-80 rounded-xl", "src": image.url, "alt": image.alt })} </a> <div${addAttribute(image.explicitContent ? "button-container" : "hidden", "class")}> <button type="button" class="show-image rounded-full"${addAttribute(`image_${key}`, "data-image-id")}>
Ver imagen
</button> </div> </div>`)} </div> <div class="modal-container hidden" uk-toggle="target: #modal-warning"> <button type="button" class="hidden-input"></button> </div> </section> ${renderComponent($$result, "Warning", $$Warning, {})}`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/gallery/Gallery.astro", void 0);

const $$Drop = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3"> <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path> </svg>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_icons/Drop.astro", void 0);

const $$SitesMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="sites items-center flex flex-col my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:gap-2"> <li> <a href="/#about"> Sobre mí </a> </li> <li> <a href="/#services"> Servicios </a> </li> <li> <a type="button"> <div class="flex justify-center items-center"> <p class="mb-0 mr-1">Piercings</p> ${renderComponent($$result, "Drop", $$Drop, {})} </div> </a> <div uk-dropdown="offset: 10"> <ul class="uk-nav uk-dropdown-nav"> <li><a href="/body-piercing"> Body Piercing </a></li> <li><a href="/ear-piercing"> Piercing en la oreja</a></li> <li><a href="/face-piercing"> Piercing de cara</a></li> <li> <a href="/genitals-piercing" data-astro-reload> Piercing genitales</a> </li> </ul> </div> </li> <li> <a href="/#testimonials"> Testimonios </a> </li> <li> <a href="/#shedule">Calendario </a> </li> </ul>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/header/navbar/sitesMenu/SitesMenu.astro", void 0);

const $$Burguer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-6 h-6 max-w-10"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path> </svg>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_icons/Burguer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<nav class="w-full px-6 py-3 text-white shadow-md bg-opacity-70 bg-[#1b1f24] fixed z-50"> <div class="flex items-center justify-between mx-auto max-w-7xl"> <a class="flex items-center text-white hover:no-underline hover:text-inherit" href="index.html"> ', ' </a> <div class="hidden lg:block"> ', ' </div> <button class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden" type="button"> <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"> ', ' </span> </button> </div> <div id="menuContent" class="p-5 text-center hidden"> ', " </div> </nav> <script defer>\n  const burguerButton = document.querySelector('button');\n\n  burguerButton?.addEventListener('click', () => {\n    document.querySelector('#menuContent')?.classList.toggle('show');\n  });\n<\/script>"])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": "img/Katapiercing_logo.png", "width": 70, "alt": "logo", "class": "bg-white rounded-full px-1" }), renderComponent($$result, "SitesMenu", $$SitesMenu, {}), renderComponent($$result, "Burguer", $$Burguer, {}), renderComponent($$result, "SitesMenu", $$SitesMenu, {}));
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/header/navbar/Navbar.astro", void 0);

const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram bg-[#ac2bac] rounded-full p-1" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path> <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path> <path d="M16.5 7.5l0 .01"></path> </svg>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_icons/Instagram.astro", void 0);

const $$Tiktok = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok bg-[black] rounded-full p-1" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path> </svg>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_icons/Tiktok.astro", void 0);

const $$Location = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center w-max"> <div class="mx-3"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path> </svg> </div> ${renderSlot($$result, $$slots["text-icon"])} </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_icons/Location.astro", void 0);

const $$Phone = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center w-max"> <div class="mx-3"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"></path> </svg> </div> ${renderSlot($$result, $$slots["text-icon"])} </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_icons/Phone.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center w-max"> <div class="mx-3"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path> </svg> </div> ${renderSlot($$result, $$slots["text-icon"])} </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_icons/Mail.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="m-auto max-w-5xl"> <section class="flex justify-center p-4"> <div class="p-3 flex items-center justify-center flex-col sm:flex-row"> <div class="flex justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": "img/Katapiercing_logo.png", "alt": "Logo de la empresa", "width": 150, "class": "bg-white rounded-full px-4 py-2" })} </div> <div class="social-media flex-col"> <div class="rounded-full mx-2 cursor-pointer"> <a class="flex items-center text-white hover:no-underline hover:text-[#d5b981] transition-colors" href="https://www.instagram.com">${renderComponent($$result, "Instagram", $$Instagram, {})}<span class="ml-1">@cuentainventada</span></a> </div> <div class="rounded-full mx-2 cursor-pointer my-2"> <a class="flex items-center text-white hover:no-underline hover:text-[#d5b981]" href="https://www.tiktok.com">${renderComponent($$result, "Tiktok", $$Tiktok, {})}<span class="ml-1">@cuentainventada</span></a> </div> </div> </div> </section> <hr class="divide-line"> <section class=""> <div class="mt-3"> <div class="mt-3 flex justify-around items-center flex-col sm:flex-row mx-auto"> <div class="contact-inf mx-3"> ${renderComponent($$result, "Location", $$Location, {}, { "text-icon": ($$result2) => renderTemplate`<p>C. Arturo Galdós nº23, Cádiz</p>` })} ${renderComponent($$result, "Mail", $$Mail, {}, { "text-icon": ($$result2) => renderTemplate`<p>arturito@gmail.com</p>` })} ${renderComponent($$result, "Phone", $$Phone, {}, { "text-icon": ($$result2) => renderTemplate`<p>876 87 8 7 65</p>` })} </div> <div class="map-container m-3"> <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d85992.08691609325!2d-4.560611670833799!3d36.77776255376358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1730104753169!5m2!1ses!2ses" width="400" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </div> </div> <div class="copy-size text-center p-4 bg-dark text-white flex items-center justify-center">
© 2024 Copyright: Sandro Suárez Aranda
<a href="https://www.linkedin.com/in/sandro-su%C3%A1rez-aranda-76539a1b7/" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "img/linkedin_logo.png", "alt": "logo de linkedin", "width": 25, "class": "mx-2" })} </a> </div> </section> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/footer/Footer.astro", void 0);

const $$WhatsApp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="35" height="35" viewBox="0 0 24 24" stroke-width="1.3" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" fill="none"></path> <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path> <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path> </svg> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_icons/WhatsApp.astro", void 0);

const $$WhatsAppButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="whats-container relative"> <a href="https://api.whatsapp.com/send?phone=34777777777&text=Hola,%20me%20gustaría%20reservar%20una%20cita" class="mailToWha" type="button" target="_blank"> ${renderComponent($$result, "WhatsApp", $$WhatsApp, {})} <div class="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-1 p-2 dark:border-gray-900">
1
</div> <span class="tooltipText rounded shadow p-1">¡Envíanos un mensaje y reserva tu cita ya!</span> </a> </div> `;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/whatsapp_button/WhatsAppButton.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderSlot($$result, $$slots["header"])} ${renderSlot($$result, $$slots["main"])} ${renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, {})} <footer> ${renderComponent($$result, "Footer", $$Footer, {})} </footer>  </body> </html>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/layouts/Layout.astro", void 0);

const bodyImagesJSON = [
	{
		id: 0,
		url: "img/body/bellybuttom_1.jpg",
		alt: "Belly buttom",
		explicitContent: false
	},
	{
		id: 1,
		url: "img/body/bellybuttom_2.jpg",
		alt: "Belly buttom",
		explicitContent: false
	},
	{
		id: 2,
		url: "img/body/microdermal_1.jpg",
		alt: "Microdermal",
		explicitContent: false
	},
	{
		id: 3,
		url: "img/body/microdermal_2.jpg",
		alt: "Microdermal",
		explicitContent: false
	},
	{
		id: 4,
		url: "img/body/microdermal_3.jpg",
		alt: "Microdermal",
		explicitContent: false
	}
];

const $$Astro = createAstro();
const $$SocialMedias = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialMedias;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center p-10"> <div class="bg-gradient-to-r from-white to-yellow-100 p-4 rounded-md text-yellow-600 font-semibold text-center shadow-md">
¡Visita mis redes sociales para ver más ejemplos de <span class="text-yellow-700 text-xl font-bold">${props.name}</span>!
</div> <div class="flex items-center my-3"> <a href="" class="m-1" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "img/instagram_logo.png", "alt": "logo de instagram", "class": "w-12 h-12 rounded-full bg-gradient-to-br from-white to-yellow-100 p-1 shadow-md" })} </a> <a href="" class="m-1" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "img/tiktok_logo.png", "alt": "logo de tiktok", "class": "w-12 h-12 rounded-full bg-gradient-to-br from-white to-yellow-100 p-1 shadow-md" })} </a> </div> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/social_medias/SocialMedias.astro", void 0);

const $$Subheader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="pt-32 info-container"> <div class="info"> ${renderSlot($$result, $$slots["page-title"])} ${renderSlot($$result, $$slots["page-description"])} </div> </div> `;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/subheader/Subheader.astro", void 0);

const $$BodyPiercing = createComponent(($$result, $$props, $$slots) => {
  const bodyImages = bodyImagesJSON;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Body-piercing || Galer\xEDa" }, { "header": ($$result2) => renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Subheader", $$Subheader, {}, { "page-description": ($$result3) => renderTemplate`<div class="page-description">
Los piercings corporales son una forma de modificación corporal que
        puede ser tanto estética como cultural. Este tipo de perforaciones
        incluye una variedad de áreas del cuerpo, como el ombligo, los pezones,
        la clavícula, y más. Cada tipo de piercing corporal tiene su propio
        proceso de cicatrización y cuidados específicos. Los piercings
        corporales permiten una amplia expresión de estilo personal y pueden
        resaltar diferentes partes del cuerpo de manera única. Es esencial
        seguir las recomendaciones de un profesional para asegurar una correcta
        cicatrización y minimizar el riesgo de infecciones.
</div>`, "page-title": ($$result3) => renderTemplate`<div class="page-title">Piercing por el cuerpo</div>` })} </header>`, "main": ($$result2) => renderTemplate`<main> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": bodyImages })} ${renderComponent($$result2, "SocialMedias", $$SocialMedias, { "name": "piercing corporales" })} </main>` })}`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/pages/body-piercing.astro", void 0);

const $$file = "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/pages/body-piercing.astro";
const $$url = "/body-piercing";

const bodyPiercing = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BodyPiercing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Navbar as $, $$Subheader as a, $$Gallery as b, $$SocialMedias as c, $$Layout as d, bodyPiercing as e };
