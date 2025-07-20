/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent, f as renderSlot } from '../chunks/astro/server_B8C3cij_.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$MainLayout } from '../chunks/MainLayout_DJAqc3Wq.mjs';
import { $ as $$SecondaryCTA, a as $$HeroSection, b as $$ClientsSection, c as $$FeaturesNavs, d as $$FAQ } from '../chunks/FAQ_CJzEDcNY.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BqdmYvMl.mjs';
import 'clsx';
import { f as featureImage } from '../chunks/features-image_CmVLaIgX.mjs';
import { g as getRelativeLocaleUrl } from '../chunks/i18n_NLOdNUDw.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$8 = createAstro("https://screwfast.uk");
const $$GithubBtn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$GithubBtn;
  const { title, url } = Astro2.props;
  const baseClasses = "group inline-flex items-center justify-center gap-x-3 rounded-full px-4 py-3 text-center text-sm font-medium text-neutral-700 ring-zinc-500 focus-visible:ring transition duration-300 outline-none";
  const borderClasses = "border border-transparent";
  const bgColorClasses = "bg-yellow-400 dark:focus:outline-none";
  const hoverClasses = "hover:shadow-2xl hover:shadow-yellow-500";
  const fontSizeClasses = "2xl:text-base";
  const ringClasses = "dark:ring-zinc-200";
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`${baseClasses} ${borderClasses} ${bgColorClasses} ${hoverClasses} ${fontSizeClasses} ${ringClasses}`, "class")}${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "Icon", $$Icon, { "name": "github" })} ${title} </a>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/ui/buttons/GithubBtn.astro", void 0);

const $$Astro$7 = createAstro("https://screwfast.uk");
const $$HeroSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HeroSectionAlt;
  const { title, subTitle, url } = Astro2.props;
  const btnTitle = Astro2.currentLocale === "fr" ? "Continuer avec Github" : "Continue with Github";
  return renderTemplate`${maybeRenderHead()}<section class="relative mx-auto max-w-[85rem] px-4 pb-24 pt-10 sm:px-6 lg:px-8"> <!-- Decorating SVG elements --> <div class="absolute left-0 top-[55%] scale-90 md:top-[20%] xl:left-[10%] xl:top-[25%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#ea580c" viewBox="0 0 24 24"> <path fill="#ea580c" stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"></path> <path stroke="#ea580c" stroke-linecap="round" stroke-linejoin="round" d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"></path> </svg> </div> <div class="absolute left-[85%] top-0 scale-75"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#fbbf24" viewBox="0 0 24 24"> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 10.5V9M5 15v-1.5"></path> <path fill="#fbbf24" stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path> <path stroke="#fbbf24" stroke-linecap="round" stroke-linejoin="round" d="M10.5 19H9M15 19h-1.5"></path> </svg> </div> <div class="absolute bottom-[5%] left-[60%] scale-[.6] xl:bottom-[15%] xl:left-[35%]"> <svg width="64" height="64" fill="none" stroke-width="1.5" color="#a3a3a3" viewBox="0 0 24 24"> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> <path stroke="#a3a3a3" stroke-linecap="round" stroke-linejoin="round" d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"></path> </svg> </div> <!-- Hero Section Heading --> <div class="mx-auto mt-5 max-w-xl text-center"> <h2 class="block text-balance text-4xl font-bold leading-tight tracking-tight text-neutral-800 dark:text-neutral-200 md:text-5xl lg:text-6xl"> ${title} </h2> </div> <!-- Hero Section Sub-heading --> <div class="mx-auto mt-5 max-w-3xl text-center"> ${subTitle && renderTemplate`<p class="text-pretty text-lg text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Github Button --> ${url && renderTemplate`<div class="mt-8 flex justify-center gap-3"> ${renderComponent($$result, "GithubBtn", $$GithubBtn, { "url": url, "title": btnTitle })} </div>`} </section>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/sections/landing/HeroSectionAlt.astro", void 0);

const $$Astro$6 = createAstro("https://screwfast.uk");
const $$IconBlock = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$IconBlock;
  const { heading, content } = Astro2.props;
  const headingClasses = "text-balance text-lg font-bold text-neutral-800 dark:text-neutral-200";
  const contentClasses = "mt-1 text-pretty text-neutral-700 dark:text-neutral-300";
  return renderTemplate`<!-- The root container that arranges your slot and the heading/content -->${maybeRenderHead()}<div class="flex gap-x-5"> <!-- Slot to allow for extensibility of the component --> ${renderSlot($$result, $$slots["default"])} <div class="grow"> <!-- Heading of the section --> <h3${addAttribute(headingClasses, "class")}> ${heading} </h3> <!-- Content text of the section --> <p${addAttribute(contentClasses, "class")}>${content}</p> </div> </div>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/ui/blocks/IconBlock.astro", void 0);

const $$Astro$5 = createAstro("https://screwfast.uk");
const $$FeaturesGeneral = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FeaturesGeneral;
  const { title, subTitle, src, alt, features } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Block to display the feature image --> <div class="relative mb-6 overflow-hidden md:mb-8"> ${src && alt && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "h-full w-full object-cover object-center", "draggable": "false", "format": "avif", "loading": "eager" })}`} </div> <!-- Displaying the main content consisting of title, subtitle, and several \`IconBlock\` components --> <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12"> <!-- Block for title and subtitle --> <div class="lg:col-span-1"> <!-- Rendering title --> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 md:text-3xl"> ${title} </h2> <!-- Rendering subtitle --> ${subTitle && renderTemplate`<p class="mt-2 text-pretty text-neutral-600 dark:text-neutral-400 md:mt-4"> ${subTitle} </p>`} </div> <!-- Block to display the IconBlock components --> <div class="lg:col-span-2"> <div class="grid gap-8 sm:grid-cols-2 md:gap-12"> <!-- Injecting IconBlock components with different properties --> ${features && features.map((feature) => renderTemplate`${renderComponent($$result, "IconBlock", $$IconBlock, { "heading": feature.heading, "content": feature.content }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icon", $$Icon, { "name": feature.svg })} ` })}`)} </div> </div> </div> </section>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/sections/features/FeaturesGeneral.astro", void 0);

const $$Astro$4 = createAstro("https://screwfast.uk");
const $$TestimonialItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TestimonialItem;
  const { content, author, role, avatarSrc } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<blockquote class="relative"> ${renderComponent($$result, "Icon", $$Icon, { "name": "quotation" })} <div class="relative z-10"> <p class="text-xl italic text-neutral-800 dark:text-neutral-200"> ${content} </p> </div> <div class="mt-6"> <div class="flex items-center"> <div class="flex-shrink-0"> ${renderComponent($$result, "Image", $$Image, { "class": "h-8 w-8 rounded-full", "src": avatarSrc, "alt": "Avatar Description", "loading": "eager", "inferSize": true })} </div> <div class="ms-4 grow"> <div class="font-bold text-neutral-800 dark:text-neutral-200"> ${author} </div> <div class="text-xs text-neutral-500">${role}</div> </div> </div> </div> </blockquote>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/sections/testimonials/TestimonialItem.astro", void 0);

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$StatsGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$StatsGrid;
  const { count, description, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="-m-0.5 flex flex-col p-4 sm:p-8"> <div class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-5xl"> ${index === 1 || index === 2 ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "arrowUp" })}` : null} ${count} </div> <p class="text-sm text-neutral-600 dark:text-neutral-400 sm:text-base"> ${description} </p> </li>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/ui/blocks/StatsGrid.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const {
    title,
    subTitle,
    testimonials,
    statistics
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Container for the testimonials --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16"> <div class="lg:col-span-5 lg:col-start-1"> <!-- Title and Subtitle --> <div class="mb-8"> <h2 class="mb-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> <!-- Generate a blockquote for each testimonial in the testimonials array by mapping over the array. --> ${testimonials && testimonials.map((testimonial) => renderTemplate`${renderComponent($$result, "TestimonialItem", $$TestimonialItem, { "content": testimonial.content, "author": testimonial.author, "role": testimonial.role, "avatarSrc": testimonial.avatarSrc })}`)} </div> ${statistics && renderTemplate`<div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <ul class="grid grid-cols-2 divide-x-2 divide-y-2 divide-neutral-300 overflow-hidden dark:divide-neutral-700"> <!-- Generate a list item for each stat in the statistics array by mapping over the array. --> ${statistics.map((stat, index) => renderTemplate`${renderComponent($$result, "StatsGrid", $$StatsGrid, { "count": stat.count, "description": stat.description, "index": index })}`)} </ul> </div> </div>`} </div> </section>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/sections/testimonials/TestimonialsSection.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$PricingSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PricingSection;
  const { pricing } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Section heading and sub-heading --> <div class="mx-auto mb-10 max-w-2xl text-center lg:mb-14"> <h2 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${pricing.title} </h2> <p class="mt-1 text-pretty text-neutral-600 dark:text-neutral-400"> ${pricing.subTitle} </p> </div> <!-- Contains two main product blocks --> <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-0"> <!-- Starter Kit product details --> <div class="w-full rounded-xl bg-gray-800 p-6 sm:w-1/2 sm:rounded-r-none sm:p-8 lg:w-1/3"> <div class="mb-4"> <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl"> ${pricing.starterKit.name} </h3> <p class="text-indigo-300">${pricing.starterKit.description}</p> </div> <div class="mb-4"> <span class="text-4xl font-bold text-neutral-200">${pricing.starterKit.price}</span> <span class="text-lg font-bold text-neutral-300">${pricing.starterKit.cents}</span> <span class="ms-3 text-sm text-indigo-200">${pricing.starterKit.billingFrequency}</span> </div> <!-- Features list - automatically created by mapping over \`features\` array --> <ul class="mb-6 space-y-2 text-neutral-300"> ${pricing.starterKit.features.map((feature) => renderTemplate`<li class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "checkCircle" })} <span>${feature}</span> </li>`)} </ul> <!-- CTA for purchasing the product --> <a${addAttribute(pricing.starterKit.purchaseLink, "href")} class="block rounded-lg bg-gray-500 px-8 py-3 text-center text-sm font-bold text-gray-100 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-600 focus-visible:ring active:text-gray-300 md:text-base">${pricing.starterKit.purchaseBtnTitle}</a> </div> <!-- Professional Toolbox product details --> <div class="w-full rounded-xl bg-gradient-to-tr from-[#FF512F] to-[#F09819] p-6 shadow-xl sm:w-1/2 sm:p-8"> <div class="mb-4 flex flex-col items-start justify-between gap-4 lg:flex-row"> <div> <h3 class="text-2xl font-bold text-neutral-100 sm:text-3xl"> ${pricing.professionalToolbox.name} </h3> <p class="text-orange-200">${pricing.professionalToolbox.description}</p> </div> <span class="order-first inline-block rounded-full bg-orange-200 bg-opacity-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-center text-orange-600 lg:order-none">${pricing.badge}</span> </div> <div class="mb-4"> <span class="text-6xl font-bold text-neutral-100">${pricing.professionalToolbox.price}</span> <span class="text-lg font-bold text-orange-100">${pricing.professionalToolbox.cents}</span> <span class="ms-3 text-orange-200">${pricing.professionalToolbox.billingFrequency}</span> </div> <!-- Features list - automatically created by mapping over \`features\` array --> <ul class="mb-6 space-y-2 text-orange-100"> ${pricing.professionalToolbox.features.map((feature) => renderTemplate`<li class="flex items-center gap-1.5"> ${renderComponent($$result, "Icon", $$Icon, { "name": "checkCircle" })} <span>${feature}</span> </li>`)} </ul> <!-- CTA for purchasing the product --> <a${addAttribute(pricing.professionalToolbox.purchaseLink, "href")} class="block rounded-lg bg-orange-200 bg-opacity-50 px-8 py-3 text-center text-sm font-bold text-neutral-100 outline-none ring-orange-300 transition duration-100 hover:bg-orange-300 hover:bg-opacity-50 focus-visible:ring active:bg-orange-400 md:text-base">${pricing.professionalToolbox.purchaseBtnTitle}</a> </div> </div> <!-- Call to action for Enterprise Solutions --> <div class="mt-8 flex items-center justify-center gap-x-3 md:mt-12"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${pricing.thirdOption} </p> ${renderComponent($$result, "SecondaryCTA", $$SecondaryCTA, { "title": pricing.btnText, "url": "#" })} </div> </section>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/sections/pricing/PricingSection.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero-image.DRPoHq2O.avif","width":4067,"height":2576,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/hero-image.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/hero-image.avif");
							return target[name];
						}
					});

const subTitle$1 = "Posez-nous toutes vos questions sur notre marque et nos produits, et obtenez des réponses factuelles.";
const faqs = [
	{
		question: "Quels types d'outils sont inclus dans le Kit de Démarrage?",
		answer: "Le Kit de Démarrage comprend des outils à main et électriques essentiels pour différents projets de bricolage, notamment des marteaux, des perceuses, des tournevis et une variété de fixations. C'est une sélection soigneusement élaborée pour aider les débutants et les bricoleurs expérimentés à aborder la plupart des tâches d'amélioration de l'habitat."
	},
	{
		question: "Puis-je passer du Kit de Démarrage à la Boîte à Outils Professionnelle?",
		answer: "Absolument ! Vous pouvez passer à la Boîte à Outils Professionnelle à tout moment pour accéder à une gamme plus large d'outils de haute qualité, bénéficier d'un support client prioritaire et recevoir un contenu exclusif. Contactez notre équipe de support pour une transition sans problème."
	},
	{
		question: "Quels sont les rabais disponibles pour les commandes en gros via le plan Boîte à Outils Professionnelle?",
		answer: "Les membres de la Boîte à Outils Professionnelle ont droit à des rabais exclusifs sur les commandes en gros, dont le pourcentage peut varier en fonction du volume de la commande. Contactez-nous pour discuter de vos besoins, et nous vous fournirons une structure de rabais personnalisée."
	},
	{
		question: "À quoi puis-je m'attendre en termes de support client?",
		answer: "Tous nos clients bénéficient d'un support par e-mail dédié. Avec le Kit de Démarrage, vous recevrez notre support standard, tandis que le plan Boîte à Outils Professionnelle vous mettra à niveau vers un support prioritaire, ce qui signifie des temps de réponse plus rapides et une assistance spécialisée."
	},
	{
		question: "À quelle fréquence sont mises à jour les ressources en ligne et les tutoriels?",
		answer: "Nous mettons régulièrement à jour nos ressources en ligne et nos tutoriels pour refléter les dernières tendances en matière de bricolage et de construction, ainsi que les introductions de nouveaux outils et techniques. Notre matériel vise à être complet et convivial pour tous les niveaux de compétence."
	},
	{
		question: "ScrewFast propose-t-il des services pour les grands projets de construction?",
		answer: "Oui, nos Solutions Entreprise sont conçues pour les grandes entreprises ayant besoin de services complets. Nous fournissons des consultations, de la planification et de l'approvisionnement en outils et matériaux de haute qualité, ainsi que des solutions de personnel pour des besoins de construction importants. Contactez-nous pour un devis personnalisé."
	}
];
const faqs$1 = {
	subTitle: subTitle$1,
	faqs: faqs
};

const features = [
	{
		heading: "Équipes dédiées",
		content: "Bénéficiez de nos équipes engagées qui veillent à ce que votre réussite soit personnelle. Comptez sur un accompagnement expert et des résultats exceptionnels tout au long de votre parcours de projet.",
		svg: "groups"
	},
	{
		heading: "Simplicité et accessibilité",
		content: "Trouvez des solutions faciles à utiliser et abordables avec la gamme d'outils et d'équipements de ScrewFast. Nos produits simplifient l'approvisionnement et permettent de respecter les budgets de projet.",
		svg: "verified"
	},
	{
		heading: "Documentation complète",
		content: "Intégrez facilement grâce aux guides exhaustifs et aux bibliothèques de ScrewFast. Réalisez une adoption de produit sans faille avec notre ensemble complet de documentation conçu pour votre succès.",
		svg: "books"
	},
	{
		heading: "Conception centrée sur l'utilisateur",
		content: "Faites l'expérience de la différence avec la conception axée sur l'utilisateur de ScrewFast, où la fonctionnalité rencontre la praticité pour une expérience de travail améliorée.",
		svg: "frame"
	}
];

const title = "Tarification Simple et Transparente";
const subTitle = "Augmentez l'efficacité avec les plans clairs et axés sur la valeur de ScrewFast.";
const badge = "Meilleure valeur";
const thirdOption = "Solutions Entreprise?";
const btnText = "Obtenez un Devis Personnalisé";
const starterKit = {
	name: "Kit de Démarrage",
	description: "Meilleure option pour les projets de bricolage",
	price: "$49",
	cents: ".00",
	billingFrequency: "USD / mensuel",
	features: [
		"Outils matériels essentiels",
		"Accès aux guides et tutoriels",
		"Support standard"
	],
	purchaseBtnTitle: "Obtenez le Kit de Démarrage",
	purchaseLink: "#"
};
const professionalToolbox = {
	name: "Boîte à Outils Professionnelle",
	description: "Idéale pour les utilisations à grande échelle",
	price: "$89",
	cents: ".00",
	billingFrequency: "USD / mensuel",
	features: [
		"Sélection d'outils premium",
		"Support prioritaire",
		"Contenu et offres exclusifs",
		"Remises sur les commandes en gros"
	],
	purchaseBtnTitle: "Obtenez la Boîte à Outils Professionnelle",
	purchaseLink: "#"
};
const pricing = {
	title: title,
	subTitle: subTitle,
	badge: badge,
	thirdOption: thirdOption,
	btnText: btnText,
	starterKit: starterKit,
	professionalToolbox: professionalToolbox
};

const construction = new Proxy({"src":"/_astro/construction-image.6K-xbeL4.avif","width":1600,"height":2400,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/construction-image.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/construction-image.avif");
							return target[name];
						}
					});

const tools = new Proxy({"src":"/_astro/automated-tools.NvGNhe84.avif","width":1920,"height":2560,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/automated-tools.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/automated-tools.avif");
							return target[name];
						}
					});

const dashboard = new Proxy({"src":"/_astro/dashboard-image.DUm-YPUR.avif","width":1920,"height":1920,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/deanbarrow/Projects/personal-website/src/images/dashboard-image.avif";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/deanbarrow/Projects/personal-website/src/images/dashboard-image.avif");
							return target[name];
						}
					});

const $$Astro = createAstro("https://screwfast.uk");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "lang": "fr" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroSection", $$HeroSection, { "title": `\xC9quipez vos projets avec <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span>`, "subTitle": "Outils mat\xE9riels de haute qualit\xE9 et services de construction experts pour tous les besoins en projet.", "primaryBtn": "Commencez \xE0 explorer", "primaryBtnURL": getRelativeLocaleUrl("fr", "products"), "secondaryBtn": "Contacter l'\xE9quipe commerciale", "secondaryBtnURL": getRelativeLocaleUrl("fr", "contact"), "withReview": true, "avatars": avatarSrcs, "rating": `<span class="font-bold">4.8</span> / 5`, "starCount": 4, "reviews": `\xC0 partir de plus de <span class="font-bold">12,8k</span> avis`, "src": heroImage, "alt": "Pile de bo\xEEtes de produits ScrewFast contenant des outils mat\xE9riels assortis" })} ${renderComponent($$result2, "ClientsSection", $$ClientsSection, { "title": "Faites confiance aux leaders de l'industrie", "subTitle": "D\xE9couvrez la fiabilit\xE9 choisie par les g\xE9ants de l'industrie." })} ${renderComponent($$result2, "FeaturesGeneral", $$FeaturesGeneral, { "title": "R\xE9pondre aux exigences de l'industrie", "subTitle": "Chez ScrewFast, nous relevons les d\xE9fis uniques rencontr\xE9s dans les secteurs du mat\xE9riel et de la construction. Des outils de pointe aux services experts, nous sommes d\xE9termin\xE9s \xE0 vous aider \xE0 surmonter les obstacles et \xE0 atteindre vos objectifs.", "src": featureImage, "alt": "Produits ScrewFast dans des bo\xEEtes flottantes", "features": features })} ${renderComponent($$result2, "FeaturesNavs", $$FeaturesNavs, { "title": `Personnalisez les offres de <span class="text-yellow-500 dark:text-yellow-400">ScrewFast</span> pour r\xE9pondre parfaitement \xE0 vos besoins en mat\xE9riel et en construction.`, "tabs": [
    {
      heading: "Outils de pointe",
      content: "Optimisez vos projets avec les outils de pointe de ScrewFast. Faites l'exp\xE9rience d'une efficacit\xE9 accrue dans la gestion de la construction avec nos solutions automatis\xE9es sophistiqu\xE9es.",
      svg: "tools",
      src: tools,
      alt: "\xC9quipement lourd jaune et noir sur un champ d'herbe brune",
      first: true
    },
    {
      heading: "Tableaux de bord intuitifs",
      content: "Naviguez facilement avec les tableaux de bord intuitifs de ScrewFast. Configurez et supervisez vos projets de mani\xE8re transparente, avec des interfaces conviviales con\xE7ues pour une gestion efficace des flux de travail rapide et efficace.",
      svg: "dashboard",
      src: dashboard,
      alt: "Capture d'\xE9cran ou repr\xE9sentation graphique du tableau de bord intuitif",
      second: true
    },
    {
      heading: "Fonctionnalit\xE9s robustes",
      content: "Minimisez la complexit\xE9, maximisez la productivit\xE9. Les fonctionnalit\xE9s robustes de ScrewFast sont con\xE7ues pour rationaliser votre processus de construction, offrant des r\xE9sultats qui se distinguent par leur excellence.",
      svg: "house",
      src: construction,
      alt: "Structure m\xE9tallique grise d'un b\xE2timent pr\xE8s d'une grue \xE0 tour pendant la journ\xE9e"
    }
  ] })} ${renderComponent($$result2, "TestimonialsSection", $$TestimonialsSection, { "title": "Acc\xE9l\xE9rez vos projets", "subTitle": "Chez ScrewFast, nous assurons un d\xE9marrage rapide avec une configuration de compte instantan\xE9e. D\xE9couvrez la vitesse de la construction red\xE9finie.", "testimonials": [
    {
      content: "ScrewFast a consid\xE9rablement augment\xE9 l'efficacit\xE9 de notre projet. La configuration a \xE9t\xE9 instantan\xE9e et leurs temps de r\xE9ponse rapides sont ph\xE9nom\xE9naux. Vraiment un changement de jeu dans le support mat\xE9riel et de construction !",
      author: "Samantha Ruiz",
      role: "Directrice des op\xE9rations | ConstructIt Inc.",
      avatarSrc: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    }
  ], "statistics": [
    {
      count: "70k+",
      description: "clients \xE9quip\xE9s \u2014 des bricoleurs aux grandes entreprises de construction"
    },
    {
      count: "35%",
      description: "hausse de l'efficacit\xE9 des projets avec les outils et services de ScrewFast"
    },
    {
      count: "15,3%",
      description: "r\xE9duction des co\xFBts de maintenance rapport\xE9e par des clients \xE0 long terme"
    },
    {
      count: "2x",
      description: "assemblage plus rapide gr\xE2ce \xE0 des solutions de fixation innovantes"
    }
  ] })} ${renderComponent($$result2, "PricingSection", $$PricingSection, { "pricing": pricing })} ${renderComponent($$result2, "FAQ", $$FAQ, { "title": "Questions<br />fr\xE9quemment pos\xE9es", "faqs": faqs$1 })} ${renderComponent($$result2, "HeroSectionAlt", $$HeroSectionAlt, { "title": "Construisons ensemble", "subTitle": "ScrewFast est un mod\xE8le open source, m\xE9ticuleusement con\xE7u avec les frameworks Astro, Tailwind CSS et Preline UI.", "url": "https://github.com/mearashadowfax/ScrewFast" })} ` })}`;
}, "/Users/deanbarrow/Projects/personal-website/src/pages/fr/index.astro", void 0);

const $$file = "/Users/deanbarrow/Projects/personal-website/src/pages/fr/index.astro";
const $$url = "/fr";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
