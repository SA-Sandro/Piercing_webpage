/* empty css                                  */
import { c as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_D7GAM5ol.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Navbar, a as $$Subheader, b as $$Gallery, c as $$SocialMedias, d as $$Layout } from './body-piercing_KnCkg5za.mjs';

const genitalImagesJSON = [
	{
		id: 0,
		url: "img/genital/christina_1.jpg",
		alt: "Christina",
		explicitContent: true
	},
	{
		id: 1,
		url: "img/genital/nipple_1.jpg",
		alt: "Pezón",
		explicitContent: true
	},
	{
		id: 0,
		url: "img/genital/nipple_2.jpg",
		alt: "Pezón",
		explicitContent: true
	}
];

const $$GenitalsPiercing = createComponent(($$result, $$props, $$slots) => {
  const genitalImages = genitalImagesJSON;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Piercing-genitales || Galer\xEDa" }, { "header": ($$result2) => renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Subheader", $$Subheader, {}, { "page-description": ($$result3) => renderTemplate`<div class="page-description">
Los piercings genitales son una forma de modificación corporal que puede
        tener significados personales, culturales y estéticos. Estos piercings
        incluyen una variedad de opciones tanto para hombres como para mujeres,
        como el Prince Albert, el clítoris, los labios vaginales, el frenum,
        entre otros. Además de su aspecto decorativo, muchos eligen los
        piercings genitales por el aumento de la sensibilidad y el placer
        sexual. La cicatrización de estos piercings puede variar y requiere una
        atención y cuidado específicos para evitar infecciones y asegurar una
        sanación adecuada. Es fundamental realizarse este tipo de piercings en
        un entorno profesional y seguir todas las recomendaciones de cuidado
        post-piercing para garantizar una experiencia segura y saludable.
</div>`, "page-title": ($$result3) => renderTemplate`<div class="page-title">Piercing genital</div>` })} </header>`, "main": ($$result2) => renderTemplate`<main> ${renderComponent($$result2, "Gallery", $$Gallery, { "images": genitalImages })} ${renderComponent($$result2, "SocialMedias", $$SocialMedias, { "name": "piercing genitales" })} </main>` })} `;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/pages/genitals-piercing.astro", void 0);

const $$file = "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/pages/genitals-piercing.astro";
const $$url = "/genitals-piercing";

export { $$GenitalsPiercing as default, $$file as file, $$url as url };
