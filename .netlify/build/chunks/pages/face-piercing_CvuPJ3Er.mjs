/* empty css                                  */
import { c as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_D7GAM5ol.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Navbar, a as $$Subheader, b as $$Gallery, c as $$SocialMedias, d as $$Layout } from './body-piercing_KnCkg5za.mjs';

const faceImagesJSON = [
	{
		id: 0,
		url: "img/face/nostril_1.jpg",
		alt: "Nostril",
		explicitContent: false
	},
	{
		id: 1,
		url: "img/face/nostril_2.jpg",
		alt: "Nostril",
		explicitContent: false
	},
	{
		id: 2,
		url: "img/face/septum_1.jpg",
		alt: "Septum",
		explicitContent: false
	},
	{
		id: 3,
		url: "img/face/septum_2.jpg",
		alt: "Septum",
		explicitContent: false
	},
	{
		id: 4,
		url: "img/face/bites_1.jpg",
		alt: "Bites piercing",
		explicitContent: false
	},
	{
		id: 5,
		url: "img/face/bites_2.jpg",
		alt: "Bites piercing",
		explicitContent: false
	},
	{
		id: 6,
		url: "img/face/bridge-eyebrown_1.jpg",
		alt: "Eye brown piercing",
		explicitContent: false
	},
	{
		id: 7,
		url: "img/face/eye_snakes_2.jpg",
		alt: "Eye snake piercing",
		explicitContent: false
	},
	{
		id: 8,
		url: "img/face/eye-brown_1.jpg",
		alt: "Eye brown piercing",
		explicitContent: false
	},
	{
		id: 9,
		url: "img/face/eye-brown_2.jpg",
		alt: "Eye brown piercing",
		explicitContent: false
	},
	{
		id: 10,
		url: "img/face/eye-snake_1.jpg",
		alt: "Eye snake piercing",
		explicitContent: false
	},
	{
		id: 11,
		url: "img/face/eye-snake_3.jpg",
		alt: "Eye snake piercing",
		explicitContent: false
	},
	{
		id: 12,
		url: "img/face/eye-snake_4.jpg",
		alt: "Eye snake piercing",
		explicitContent: false
	},
	{
		id: 13,
		url: "img/face/eye-snake_5.jpg",
		alt: "Eye snake piercing",
		explicitContent: false
	},
	{
		id: 14,
		url: "img/face/eye-snake_6.jpg",
		alt: "Eye snake piercing",
		explicitContent: false
	},
	{
		id: 15,
		url: "img/face/frowni_1.jpg",
		alt: "Frowni",
		explicitContent: false
	},
	{
		id: 16,
		url: "img/face/septum-nostril-bites.jpg",
		alt: "Septum, Nostril y Bites",
		explicitContent: false
	},
	{
		id: 17,
		url: "img/face/smile_1.jpg",
		alt: "Smile",
		explicitContent: false
	},
	{
		id: 18,
		url: "img/face/smile_2.jpg",
		alt: "Smile",
		explicitContent: false
	},
	{
		id: 19,
		url: "img/face/smile_3.jpg",
		alt: "Smile",
		explicitContent: false
	},
	{
		id: 20,
		url: "img/face/smile_4.jpg",
		alt: "Smile",
		explicitContent: false
	},
	{
		id: 21,
		url: "img/face/tongue_1.jpg",
		alt: "Tongue piercing",
		explicitContent: false
	},
	{
		id: 22,
		url: "img/face/tongue_2.jpg",
		alt: "Tongue piercing",
		explicitContent: false
	},
	{
		id: 23,
		url: "img/face/tongue_3.jpg",
		alt: "Tongue piercing",
		explicitContent: false
	}
];

const $$FacePiercing = createComponent(($$result, $$props, $$slots) => {
  const faceImages = faceImagesJSON;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Piercing-rostro || Galer\xEDa" }, { "header": ($$result2) => renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Subheader", $$Subheader, {}, { "page-description": ($$result3) => renderTemplate`<div class="page-description">
Los piercings en la cara son una forma popular de expresión personal y
        estética. Estos piercings pueden incluir áreas como las cejas, la nariz,
        los labios, el labio superior (medusa), y las mejillas (dimple). Cada
        tipo de piercing facial tiene su propio proceso de cicatrización y
        requiere cuidados específicos para asegurar una sanación adecuada. Los
        piercings faciales no solo realzan las características del rostro, sino
        que también permiten una amplia gama de estilos y combinaciones únicas.
        Es crucial seguir las recomendaciones de un profesional para minimizar
        el riesgo de infecciones y asegurar una recuperación saludable.
</div>`, "page-title": ($$result3) => renderTemplate`<div class="page-title">Piercing en el rostro</div>` })} </header>`, "main": ($$result2) => renderTemplate`<main> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": faceImages })} ${renderComponent($$result2, "SocialMedias", $$SocialMedias, { "name": "piercing en el rostro" })} </main>` })}`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/pages/face-piercing.astro", void 0);

const $$file = "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/pages/face-piercing.astro";
const $$url = "/face-piercing";

export { $$FacePiercing as default, $$file as file, $$url as url };
