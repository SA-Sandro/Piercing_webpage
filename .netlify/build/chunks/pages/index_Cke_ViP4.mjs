/* empty css                                  */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, h as renderComponent, d as addAttribute, e as createAstro } from '../astro_D7GAM5ol.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Navbar, d as $$Layout } from './body-piercing_BlUwpGwU.mjs';
/* empty css                          */
import { $ as $$Image } from './404_CAWn86lA.mjs';
import 'clsx';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="about"> <div class="max-w-5xl grid lg:grid-cols-2 sm:grid-cols-1 items-center justify-center px-6 py-5 m-auto"> <div class="m-5 flex flex-col justify-center relative z-20"> <div class="ab-title">SOBRE MÍ</div> <div class="ab-experience sm:max-w-lg m-auto">10 años de experiencia</div> <div class="p-3 text-justify sm:max-w-lg m-auto">
Desde hace una década, <span class="text-xl text-[#3a3a3a] font-bold">Kata</span> se ha dedicado a perfeccionar el arte del piercing corporal, convirtiendo
        su pasión en una carrera llena de satisfacción y orgullo. Con una trayectoria
        de 10 años en la industria, Kata se especializa en la realización de todo
        tipo de piercings, siempre garantizando la máxima precisión, rapidez y fiabilidad.
</div> </div> <di v class="flex justify-center items-center"> <div class="relative"> ${renderComponent($$result, "Image", $$Image, { "class": "image1", "src": "img/imagen_sobremi_1.jpg", "alt": "Realizaci\xF3n piercing" })} <div class="image2-container"> ${renderComponent($$result, "Image", $$Image, { "class": "image2", "src": "img/imagen_sobremi_2.jpg", "alt": "Anillador" })} </div> </div> </di> </div> <div class="max-w-4xl m-auto grid md:grid-cols-2 sm:grid-cols-1 items-center justify-center px-6"> <div class="video-container flex justify-center"> <video autoplay muted loop width="150" class="grayscale md:w-full rounded-lg shadow-2xl blur-sm"> <source src="media/proceso_piercing.mp4" type="video/mp4">
Tu navegador no soporta el formato de este vídeo
</video> </div> <div class="text-justify sm:max-w-lg m-auto p-4">
El <span class="text-xl text-[#3a3a3a] font-bold">objetivo</span> principal
      es proporcionar a cada cliente una experiencia única y segura, asegurando de
      que cada procedimiento se realice con el mayor cuidado y profesionalismo. En
      sus trabajos, <span class="text-xl text-[#3a3a3a] font-bold">Kata</span> usa
      únicamente materiales de la más alta calidad y sigue estrictamente todas las
      normas de higiene y esterilización. Ya sea tu primer piercing o uno más para
      la colección, Kata ofrece un servicio personalizado y adaptado a tus necesidades
      y deseos.
</div> </div> <div class="max-w-4xl m-auto grid md:grid-cols-2 sm:grid-cols-1 items-center justify-between px-6"> <div class="text-justify sm:max-w-lg p-4"> <span class="text-xl text-[#3a3a3a] font-bold">Kata</span> también se dedica
      a la enseñanza y formación de nuevas personas en el arte del piercing, ofreciendo
      cursos detallados y prácticos que abarcan desde los conceptos básicos hasta
      técnicas avanzadas. Sus programas están diseñados para proporcionar a los estudiantes
      una comprensión profunda de la anatomía, higiene y seguridad, así como las
      últimas tendencias y estilos en piercings.
</div> <div class="mx-auto"> <video autoplay loop muted width="250" class="grayscale rounded-lg shadow-2xl blur-sm"> <source src="media/video_formacion1.mp4" type="video/mp4">
Tu navegador no soporta el formato de este vídeo
</video> </div> </div> </div> <div class="ab-experience-sub max-w-xl text-justify m-auto my-5 p-5">
¡Ven y descubre por qué tantos clientes apuestan por Kata!
</div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/about_me/About.astro", void 0);

const piercing = new Proxy({"src":"/_astro/coloured_piercing.DfqCU0h0.png","width":64,"height":64,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/public/img/coloured_piercing.png";
							}
							
							return target[name];
						}
					});

const services_name = "Piercings Quartier";
const services = [
	{
		name: "Oreja",
		routeToGallery: "/ear-piercing",
		list: [
			{
				name: "Lobe",
				price: 25
			},
			{
				name: "Upper Lobe",
				price: 35
			},
			{
				name: "Helix",
				price: 30
			},
			{
				name: "Forward Helix",
				price: 30
			},
			{
				name: "Industrial",
				price: 35
			},
			{
				name: "Daith",
				price: 30
			},
			{
				name: "Rook",
				price: 30
			},
			{
				name: "Snug",
				price: 30
			},
			{
				name: "Tragus",
				price: 30
			},
			{
				name: "Anti Tragus",
				price: 25
			},
			{
				name: "Inner Conch",
				price: 35
			},
			{
				name: "Orbital Conch",
				price: 35
			}
		]
	},
	{
		name: "Rostro",
		routeToGallery: "/face-piercing",
		list: [
			{
				name: "Ceja",
				price: 35
			},
			{
				name: "Nostril",
				price: 25
			},
			{
				name: "Septum",
				price: 35
			},
			{
				name: "Bridge",
				price: 35
			},
			{
				name: "Tongue",
				price: 30
			},
			{
				name: "Eyes Snake",
				price: 40
			},
			{
				name: "Multi Tongue",
				price: 50
			},
			{
				name: "Smile",
				price: 30
			},
			{
				name: "Medusa",
				price: 30
			},
			{
				name: "Monroe",
				price: 35
			},
			{
				name: "Madonna",
				price: 35
			}
		]
	},
	{
		name: "Body",
		routeToGallery: "/body-piercing",
		list: [
			{
				name: "Labret",
				price: 30
			},
			{
				name: "Labret Lateral",
				price: 30
			},
			{
				name: "Madison Surface",
				price: 40
			},
			{
				name: "Ashley",
				price: 35
			},
			{
				name: "Belly Button",
				price: 35
			},
			{
				name: "Microdermal",
				price: 60
			},
			{
				name: "Microdermal Face",
				price: 80
			},
			{
				name: "Piercing Corset",
				price: 120
			}
		]
	}
];
const servicesJson = {
	services_name: services_name,
	services: services
};

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-2"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-photo-search" width="28" height="28" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M15 8h.01"></path> <path d="M11.5 21h-5.5a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v5.5"></path> <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path> <path d="M20.2 20.2l1.8 1.8"></path> <path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l2 2"></path> </svg> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_icons/Gallery.astro", void 0);

const $$Astro = createAstro();
const $$ServicesList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesList;
  const { services } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center justify-between mx-auto w-72"> <div class="py-2 mx-4"> <div class="service">${services[0].name}</div> </div> <a class="gallery-button"${addAttribute(services[0].routeToGallery, "href")}> Ver galería ${renderComponent($$result, "Gallery", $$Gallery, {})} </a> </div> <div class="flex justify-center my-2"> <ul> ${services[0].list.map((servicio) => renderTemplate`<li class="flex"> <div class="min-w-36">${servicio.name}</div> <div class="services-prize ml-16">${servicio.price}€</div> </li>`)} </ul> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_services/services_list/ServicesList.astro", void 0);

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="services-title">
SERVICIOS
<div class="flex justify-center"> ${renderComponent($$result, "Image", $$Image, { "src": piercing.src, "width": 50, "height": 80, "alt": "piercing icon", "class": "mx-4" })} </div> </div> <div class="services-list grid justify-center lg:grid-cols-3 sm:grid-cols-2"> <div class="p-3"> ${renderComponent($$result, "ServicesList", $$ServicesList, { "services": servicesJson.services.filter(
    (service) => service.name === "Oreja"
  ) })} </div> <div class="p-3"> ${renderComponent($$result, "ServicesList", $$ServicesList, { "services": servicesJson.services.filter(
    (service) => service.name === "Rostro"
  ) })} </div> <div class="p-3 sm:col-span-2 lg:col-span-1"> ${renderComponent($$result, "ServicesList", $$ServicesList, { "services": servicesJson.services.filter(
    (service) => service.name === "Body"
  ) })} </div> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/my_services/Services.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="main-container"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <div class="header-container p-28"> <div class="header-content rounded-xl p-10"> <div class="flex justify-center items-center mt-10"> ${renderComponent($$result, "Image", $$Image, { "src": "img/Katapiercing_logo.png", "alt": "Logo de la empresa", "width": 250, "class": "bg-white rounded-full px-4" })} </div> <div class="subt-text text-center my-4">Professional Body Piercing</div> <div class="header-description">
Experiencia y calidad en cada perforación
</div> </div> </div> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/header/Header.astro", void 0);

const location_info = {
	title: "Templo Piercing y Tattoo",
	address: "C. Frailes, 12, 2B, Málaga, España",
	avgRating: "5.0",
	totalReviews: "62 opiniones"
};
const topics = [
	{
		keyword: "simpático",
		mentions: "4"
	},
	{
		keyword: "precio",
		mentions: "3"
	},
	{
		keyword: "pezón",
		mentions: "3"
	},
	{
		keyword: "confianza",
		mentions: "2"
	},
	{
		keyword: "volveré",
		mentions: "2"
	},
	{
		keyword: "fosa nasal",
		mentions: "2"
	},
	{
		keyword: "lengua",
		mentions: "2"
	},
	{
		keyword: "ombligo",
		mentions: "2"
	},
	{
		keyword: "limpieza",
		mentions: "2"
	},
	{
		keyword: "higiénico",
		mentions: "2"
	}
];
const reviews = [
	{
		name: "León Martínez",
		link: "https://www.google.com/maps/contrib/105715140506484215478?hl=es-419&ved=1t:31294&ictx=111",
		thumbnail: "https://lh3.googleusercontent.com/a/ACg8ocIZ4x1CvnruXmN5Gmfr6akDKlBCruHRBje2xk_CLLo4XP4EiuA=s40-c-rp-mo-br100",
		reviews: "6 opinione",
		photos: "2",
		localGuide: false,
		rating: "5.0",
		duration: "22/06/2024",
		snippet: "Buenas, pasaba a contar un poco mi historia. Resulta que fui a un sitio diferente a este (Zima tatoo) y me hicieron un nostril en la nariz, muy poco profesional ya que no era un pendiente para nostril y tampoco la medida. Asi que realmente dios me puso en mi camino a templo tatoo y me ayudaron sin costo alguno, muy amablemente y profesionalmente, sacaron todas mis dudas, me dijeron que antibioticos debia consumir para evitar una infección grande, asi que sin nada mas que decir les agradezco muchisimo por lo que hicieron por mi, mas gente como ustedes que si valen la pena y merecen un verdadero reconocimiento",
		likes: "0Me gusta"
	},
	{
		name: "Esther Alvarez",
		link: "https://www.google.com/maps/contrib/115594352892315439127?hl=es-419&ved=1t:31294&ictx=111",
		thumbnail: "https://lh3.googleusercontent.com/a/ACg8ocLg2ZasgwCiUDVfBqHsb40EUVFP0l_EBUtCmI0T41FeNQhP=s40-c-rp-mo-br100",
		reviews: "3 opinione",
		localGuide: false,
		rating: "5.0",
		duration: "22/06/2024",
		snippet: "Me hice piercing Christina y en pezón. Kata un verdadero profesional, te informa muy bien de todo y han quedado genial. Volvimos para hacernos el piercing de la migraña y el tragus y muy bien también",
		likes: "0Me gusta"
	},
	{
		name: "Ionut Oancia",
		link: "https://www.google.com/maps/contrib/102402202020222190452?hl=es-419&ved=1t:31294&ictx=111",
		thumbnail: "https://lh3.googleusercontent.com/a-/ALV-UjW4eZ586l6PisONoXNqNYt9cvdpv1d8_jBU12LVU36Ivl5RvUsU=s40-c-rp-mo-br100",
		reviews: "4 opinione",
		photos: "1",
		localGuide: false,
		rating: "5.0",
		duration: "26/06/2024",
		snippet: "Realmente recomiendo ir aquí y hacerse piercings, el chico es profesional y rápido y además es muy, muy agradable. Para aquellos de ustedes que tienen miedo de hacerlo, ¡haganlo! No me arrepiento de esta experiencia.¡¡¡¡Muy lindo!!!!",
		likes: "0Me gusta"
	},
	{
		name: "Cristina Aguilar Reina",
		link: "https://www.google.com/maps/contrib/104909195825840265535?hl=es-419&ved=1t:31294&ictx=111",
		thumbnail: "https://lh3.googleusercontent.com/a/ACg8ocIbS9tZVDexsAAdVFyLBi31Q8eehPNmRI9LezXAbR37eu_CQQ=s40-c-rp-mo-br100",
		reviews: "1 opinión",
		localGuide: false,
		rating: "5.0",
		duration: "22/06/2024",
		snippet: "Estuvimos mi amiga y yo y nos realizamos un piercing y nos encantó la profesionalidad de Kata, hoy hemos vuelto de nuevo y en esta ocasión mi amiga se ha realizado dos más lo que más me ha sorprendido es el asesoramiento recibido ya que ha sido un verdadero trabajo muy original, sin duda lo recomiendo 100%",
		likes: "0Me gusta"
	},
	{
		name: "Israel Vazquez",
		link: "https://www.google.com/maps/contrib/111483455998098266969?hl=es-419&ved=1t:31294&ictx=111",
		thumbnail: "https://lh3.googleusercontent.com/a-/ALV-UjX3J1aJcW3hnf285uSMYaXsfxAGqvtjeJil0SnNYuz5BDlTIr0=s40-c-rp-mo-br100",
		reviews: "1 opinión",
		localGuide: false,
		rating: "5.0",
		duration: "08/06/2024",
		snippet: "Estuve en el estudio con Kata y el me asesor sobre el piercing Príncipe Alberto y me pareció muy conocedor y profesional, me pareció muy amable y me dio confianza preguntar las dudas que tenia. Lo recomiendo para la comunidad LGBT de Malaga.",
		likes: "1Me gusta"
	},
	{
		name: "Marina Tamayo",
		link: "https://www.google.com/maps/contrib/109294409538040503812?hl=es-419&ved=1t:31294&ictx=111",
		thumbnail: "https://lh3.googleusercontent.com/a-/ALV-UjUdbcQQMHQoOsfou981Avizl5o8g3uvkvugCXG2L0y3kE3Qm6Td=s40-c-rp-mo-br100",
		reviews: "2 opinione",
		localGuide: false,
		rating: "5.0",
		duration: "29/05/2024",
		snippet: "Fui con mi amiga a hacernos un piercing y y Kata nos resolvió todas las dudas, se nota que le gusta su trabajo y sabe lo que hace y dice, limpio y rápido, volveré para futuros piercing, además de ser muy simpático.",
		likes: "1Me gusta"
	},
	{
		name: "Violeta Gómez",
		link: "https://www.google.com/maps/contrib/116970081299252295151?hl=es-419&ved=1t:31294&ictx=111",
		thumbnail: "https://lh3.googleusercontent.com/a-/ALV-UjXhc9Hci7VH2697KVSUaMG3VZFJ1K2zjpd_KNc8HupGc-yes6E=s40-c-rp-mo-br100",
		reviews: "2 opinione",
		localGuide: false,
		rating: "5.0",
		duration: "29/06/2024",
		snippet: "Establecimiento muy limpio, el piercing ha sido muy rápido e indoloro gracias al chico, muy profesional. Sin duda lo recomiendo y volveré a ir",
		likes: "0Me gusta"
	},
	{
		name: "Lolaco 83",
		link: "https://www.google.com/maps/contrib/118235453220364146490?hl=es-419&ved=1t:31294&ictx=111",
		thumbnail: "https://lh3.googleusercontent.com/a-/ALV-UjU2Cs42qAqb5PKcuG3MH2P4r9mG3AaecBYJFfMab95GKsd_dfE13g=s40-c-rp-mo-br100",
		reviews: "3 opinione",
		localGuide: false,
		rating: "5.0",
		duration: "29/05/2024",
		snippet: "Perfectas condiciones, un sitio limpio con un excelente profesional (kata) y una experiencia super profesional. Me hice el microdermal del pómulo y no dió ningún problema o recomiendo venir si quieres un piercing bien hecho",
		likes: "2Me gusta"
	},
	{
		name: "Andrea Bravo",
		link: "https://www.google.com/maps/contrib/106496574237879596082?hl=es-419&ved=1t:31294&ictx=111",
		thumbnail: "https://lh3.googleusercontent.com/a/ACg8ocKi5Jgy47c2geS_q7QccaANcG3Qls5JBgd6ta5_1Ib6LzsPaA=s40-c-rp-mo-br100",
		reviews: "2 opinione",
		localGuide: false,
		rating: "5.0",
		duration: "29/05/2024",
		snippet: "Excelente servicio, súper simpáticos y cuidadosos con absolutamente todo, muy atentos y amables, sin duda los próximos pearcings que vuelva a hacer van a ser aquí, por cierto ni te enteras de lo rápido que lo hacen 10/10Servicios Piercing torre y Piercing en la oreja",
		likes: "1Me gusta"
	},
	{
		name: "Nacho Morata",
		link: "https://www.google.com/maps/contrib/103440170007462959678?hl=es-419&ved=1t:31294&ictx=111",
		thumbnail: "https://lh3.googleusercontent.com/a-/ALV-UjWsJ3k_czJlqfOFdyMyqFbLCiWekYd1uM0o8mSLYRQRlfvkHXJw=s40-c-rp-mo-br100",
		reviews: "6 opinione",
		photos: "2",
		localGuide: false,
		rating: "5.0",
		duration: "08/06/2024",
		snippet: "Kata me explico todo con detalles sobre el piercing del pezon y fue súper simpático, tengo claro que volveré a ponerme en sus manos!!",
		likes: "1Me gusta"
	}
];
const pagination = {
	next: "https://api.serpdog.io/reviews?hl=en&next_page_token=CAESY0NBRVFDaHBFUTJwRlNVRlNTWEJEWjI5QlVEZGZURUYzTldkZlgxOWZSV2hDUVZKclVra3dlRlJ6T0VoalExZEphMEZCUVVGQlIyZHVPVEpYV1VOalFsbzNibU5SV1VGRFNVRQ==&data_id=0xd72f7a8e990f5c1:0xde8d0b5e571ebc91&api_key=667fc1e5914f6800763f9a1e",
	next_page_token: "CAESY0NBRVFDaHBFUTJwRlNVRlNTWEJEWjI5QlVEZGZURUYzTldkZlgxOWZSV2hDUVZKclVra3dlRlJ6T0VoalExZEphMEZCUVVGQlIyZHVPVEpYV1VOalFsbzNibU5SV1VGRFNVRQ=="
};
const reviewsJson = {
	location_info: location_info,
	topics: topics,
	reviews: reviews,
	pagination: pagination
};

const $$Carrousel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="section-background"> <div class="reviews-title pt-10">RESEÑAS</div> <div class="text-center text-white flex items-center justify-center"> <div class="mx-3"> ${renderComponent($$result, "Image", $$Image, { "src": "img/google_logo.png", "alt": "Logo de google", "width": 30 })} </div> <div> <div class="rating_string">Excelente</div> ${renderComponent($$result, "Image", $$Image, { "class": "m-auto", "src": "img/five_starts.png", "alt": "5 estrellas", "width": 100 })} </div> </div> <div class="text-white text-center pb-7">
Basado en ${reviewsJson.location_info.totalReviews} </div> <div class="px-10 max-w-5xl m-auto uk-position-relative"> <div class="uk-visible-toggle uk-light" uk-slider="sets: true"> <div class="uk-slider-items uk-child-width-1-2@m"> ${reviewsJson.reviews.map((review) => renderTemplate`<div class=" mx-1 my-10 card max-h-80  overflow-scroll cursor-grabbing "> <div class="flex justify-center select-none p-5"> ${renderComponent($$result, "Image", $$Image, { "src": review.thumbnail, "width": 40, "alt": "usuario", "class": "mr-3" })} <div> <p class="text-black m-0">${review.name}</p> <p class="text-gray-500 m-0">${review.duration}</p> </div> </div> <div class="snippet-container flex flex-col justify-center text-justify select-none px-10"> <div class="m-auto p-2 "> ${review.rating === "5.0" ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": "img/five_starts.png", "alt": "5 estrellas", "width": 120 })}` : null} </div> <p class="italic text-black">${review.snippet}</p> </div> </div>`)} </div> <a class="slide-icon-prev uk-position-center-left uk-position-small" uk-slidenav-previous uk-slider-item="previous"></a> <a class="slide-icon-next uk-position-center-right uk-margin-medium-left uk-position-small" uk-slidenav-next uk-slider-item="next"></a> </div> </div> <div class="text-center pb-10"> <a target="_blank" class="reviews-anchor" href="https://www.google.com/maps/place/Templo+Piercing+y+Tattoo/@36.7249744,-4.4177848,16z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a8e990f5c1:0xde8d0b5e571ebc91!8m2!3d36.7249744!4d-4.4177848!16s%2Fg%2F11vzbzh4v5?hl=es&entry=ttu">Ver más reseñas</a> </div> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/carrousel/Carrousel.astro", void 0);

const $$Shedule = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="m-auto max-w-7xl xl:p-10 sm:p-3"> <div class="shedule-title text-center p-5">CALENDARIO</div> <div class="cards-container p-3"> <div> <p>Lun.</p> <span>11:30 a 22:30</span> </div> <div> <p>Mar.</p> <span>11:30 a 22:30</span> </div> <div> <p>Miér.</p> <span>11:30 a 22:30</span> </div> <div> <p>Jue.</p> <span>11:30 a 22:30</span> </div> <div> <p>Vier.</p> <span>11:30 a 22:30</span> </div> <div> <p>Sáb.</p> <span>11:30 a 22:30</span> </div> </div> <div class="sunday-container flex justify-center p-5">
Domingo: cerramos
</div> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/shedule/Shedule.astro", void 0);

const $$Genital = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <div class="genital-title text-center">Piercing genitales</div> <p class="genital-subtitle text-center mb-4 -mt-1">
Nuestros piercing más especiales
</p> <div class="flex flex-col sm:flex-col md:flex-row justify-center items-center"> <div> <div class="genital-description m-auto">
Kata también se especializa en la realización de
<span class="font-bold text-[#d5b981]">piercings genitales</span>, tanto
        masculinos como femeninos. Su principal prioridad es la de proporcionar
        una experiencia <span class="font-bold text-[#d5b981]">segura</span> y <span class="font-bold text-[#d5b981]">cómoda</span>, utilizando técnicas avanzadas y material esterilizado de la más alta
        calidad. Debido a su amplia experiencia como anillador, Kata ofrece una
        amplia variedad de opciones y estilos para que cada cliente pueda elegir
        el piercing que mejor se adapte a sus preferencias y necesidades. Ya sea
        que busques un <span class="font-bold text-[#d5b981]">look discreto</span> o algo más <span class="font-bold text-[#d5b981]">llamativo</span>,
        Kata estará presente para asesorarte y asegurarse de que quedes
        completamente satisfecho con el restultado
</div> </div> <div class="genital-list"> <ul class="list-disc"> <li>Vertical Hood</li> <li>Nipple piercing</li> <li>Christina Piercing</li> <li>Horizontal Hood Piercing</li> <li>Inner Labial Piercing</li> <li>Outer Labial Piercing</li> <li>Piercing Principe Alberto</li> <li>Ampallang Piercing</li> <li>Apadravya Piercing</li> <li>Frenum piercing</li> </ul> </div> </div> <div class="my-10 text-center"> <a type="button" class="redirect-genital-gallery" href="/genitals-piercing" data-astro-reload>¡Mira nuestros trabajos!</a> </div> </div>`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/components/genital_section/Genital.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Katapiercing || Home" }, { "header": ($$result2) => renderTemplate`${maybeRenderHead()}<header> ${renderComponent($$result2, "Header", $$Header, {})} </header>`, "main": ($$result2) => renderTemplate`<main> <section> ${renderComponent($$result2, "About", $$About, {})} </section> <section class="dark-section text-white m-auto" id="services"> <div class="m-auto max-w-7xl py-10" uk-parallax="opacity: 0,9"> ${renderComponent($$result2, "Services", $$Services, {})} </div> </section> <section class="m-auto max-w-5xl p-8"> ${renderComponent($$result2, "Genital", $$Genital, {})} </section> <section uk-parallax="opacity: 0,7" id="testimonials"> ${renderComponent($$result2, "Carrousel", $$Carrousel, {})} </section> <section uk-parallax="opacity: 0,7" id="shedule"> ${renderComponent($$result2, "Shedule", $$Shedule, {})} </section> </main>` })}`;
}, "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/pages/index.astro", void 0);

const $$file = "E:/Importante/DesarrolloSoftware/Oscar_Webpage/Piercing_webpage_astro/Piercing_webpage/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
