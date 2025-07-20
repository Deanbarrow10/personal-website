/* empty css                                    */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, u as unescapeHTML, F as Fragment, b as addAttribute } from '../../chunks/astro/server_B8C3cij_.mjs';
import 'kleur/colors';
import { a as $$MainLayout } from '../../chunks/MainLayout_DJAqc3Wq.mjs';
import { $ as $$PrimaryCTA } from '../../chunks/PrimaryCTA_lKaR-4_X.mjs';
import { $ as $$CardSmall, a as $$CardWide } from '../../chunks/CardWide_CWnEiRPC.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BqdmYvMl.mjs';
import { f as featureImage } from '../../chunks/features-image_CmVLaIgX.mjs';
import 'clsx';
import { g as getCollection } from '../../chunks/_astro_content__loN1w1x.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$3 = createAstro("https://screwfast.uk");
const $$FeaturesStatsAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$FeaturesStatsAlt;
  const { title, subTitle, benefits } = Astro2.props;
  const ListItemMarker = `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-0.5 h-6 w-6 text-orange-400 dark:text-orange-300 flex-none"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>`;
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <!-- Grid --> <div class="lg:grid lg:grid-cols-12 lg:items-center lg:gap-16"> <div class="lg:col-span-7"> ${renderComponent($$result, "Image", $$Image, { "class": "rounded-xl", "src": featureImage, "alt": "Mockup of floating boxes" })} </div> <div class="mt-5 sm:mt-10 lg:col-span-5 lg:mt-0"> <div class="space-y-6 sm:space-y-8"> <div class="space-y-2 md:space-y-4"> <h2 class="text-balance text-3xl font-bold text-neutral-800 dark:text-neutral-200 lg:text-4xl"> ${title} </h2> ${subTitle && renderTemplate`<p class="text-pretty text-neutral-600 dark:text-neutral-400"> ${subTitle} </p>`} </div> ${benefits && renderTemplate`<ul class="space-y-2 sm:space-y-4"> ${benefits.map((item) => renderTemplate`<li class="flex space-x-3"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(ListItemMarker)}` })} <span class="text-pretty text-base font-medium text-neutral-600 dark:text-neutral-400"> ${item} </span> </li>`)} </ul>`} </div> </div> </div> </section>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/sections/features/FeaturesStatsAlt.astro", void 0);

const $$Astro$2 = createAstro("https://screwfast.uk");
const $$AvatarTestimonialSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AvatarTestimonialSection;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-shrink-0"> <img class="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy"> </div>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/ui/avatars/AvatarTestimonialSection.astro", void 0);

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$TestimonialsSectionAlt = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TestimonialsSectionAlt;
  const { title, testimonials } = Astro2.props;
  return renderTemplate`<!-- Main div that wraps the testimonials section -->${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full" id="testimonials"> <!-- Title of the testimonials section --> <div class="mb-6 w-3/4 max-w-2xl sm:mb-10 md:mb-16 lg:w-1/2"> <h2 class="text-balance text-2xl font-bold text-neutral-800 dark:text-neutral-200 sm:text-3xl lg:text-4xl"> ${title} </h2> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> <!-- Looping through each testimonial data and rendering it --> ${testimonials.map((testimonial) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col rounded-xl bg-neutral-50 dark:bg-neutral-700"> <div class="flex-auto p-4 md:p-6"> <!-- Testimonial content --> <p class="text-pretty text-base italic text-neutral-600 dark:text-neutral-300 md:text-lg"> ${testimonial.content} </p> </div> <div class="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 md:px-7"> <div class="flex items-center"> ${renderComponent($$result, "AvatarTestimonialSection", $$AvatarTestimonialSection, { "src": testimonial.avatarSrc, "alt": testimonial.avatarAlt })} <div class="ms-3 grow"> <p class="text-sm font-bold text-neutral-800 dark:text-neutral-200 sm:text-base"> ${testimonial.author} </p> <p class="text-xs text-neutral-600 dark:text-neutral-400"> ${testimonial.role} </p> </div> </div> </div> </div> </div>`)} </div> </section>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/sections/testimonials/TestimonialsSectionAlt.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const product = (await getCollection("products")).sort(
    (a, b) => a.data.main.id - b.data.main.id
  );
  const title = "Produits";
  const subTitle = "Explorez la durabilit\xE9 et la pr\xE9cision des outils ScrewFast, con\xE7us aussi bien pour les professionnels que pour les amateurs. Chacun de nos produits est fabriqu\xE9 avec pr\xE9cision et con\xE7u pour durer, garantissant que vous disposez du bon outil pour chaque t\xE2che.";
  const testimonials = [
    {
      content: "Depuis que nous avons adopt\xE9 les outils mat\xE9riels de ScrewFast, l'efficacit\xE9 sur nos chantiers de construction a explos\xE9. La durabilit\xE9 des boulons hexagonaux et la pr\xE9cision des vis machine sont tout simplement in\xE9gal\xE9es. C'est rafra\xEEchissant de travailler avec une entreprise qui comprend vraiment les exigences quotidiennes de l'industrie.",
      author: "Jason Clark",
      role: "Contrema\xEEtre de chantier | TopBuild",
      avatarSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    },
    {
      content: "En tant que designer d'int\xE9rieur, je suis toujours \xE0 la recherche de mat\xE9riaux et d'outils de haute qualit\xE9 qui m'aident \xE0 donner vie \xE0 mes visions. L'assortiment de vis mixtes de ScrewFast a r\xE9volutionn\xE9 mes projets, offrant le m\xE9lange parfait de qualit\xE9 et de vari\xE9t\xE9. Le support client exceptionnel \xE9tait la cerise sur le g\xE2teau !",
      author: "Maria Gonzalez",
      role: "Designer d'int\xE9rieur | Creative Spaces",
      avatarSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    },
    {
      content: "Je suis menuisier professionnel depuis plus de 15 ans, et je peux sinc\xE8rement dire que les boulons et \xE9crous \xE0 tarauder de ScrewFast sont parmi les meilleurs que j'ai utilis\xE9s. Ils adh\xE8rent comme aucun autre, et j'ai une confiance totale dans chaque joint et \xE9l\xE9ment. De plus, le service est impeccable - ils se soucient vraiment du succ\xE8s de mon projet.",
      author: "Richard Kim",
      role: "Menuisier-Ma\xEEtre | WoodWright",
      avatarSrc: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
      avatarAlt: "Description de l'image"
    }
  ];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Produits | ScrewFast", "lang": "fr", "structuredData": {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://screwfast.uk/fr/products",
    url: "https://screwfast.uk/fr/products",
    name: "Outils Mat\xE9riels | ScrewFast",
    description: "Explorez la durabilit\xE9 et la pr\xE9cision des outils ScrewFast, con\xE7us aussi bien pour les professionnels que pour les passionn\xE9s.",
    isPartOf: {
      "@type": "WebSite",
      url: "https://screwfast.uk/fr",
      name: "ScrewFast",
      description: "ScrewFast propose des outils mat\xE9riels de premier ordre et des services de construction experts pour r\xE9pondre \xE0 tous vos besoins de projet."
    },
    inLanguage: "fr"
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full"> <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12"> <div class="flex items-center gap-12"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> ${renderTemplate`<p class="hidden max-w-screen-sm text-pretty text-neutral-600 dark:text-neutral-400 md:block"> ${subTitle} </p>`} </div> ${renderComponent($$result2, "PrimaryCTA", $$PrimaryCTA, { "title": "Histoires de clients", "url": "#testimonials", "noArrow": true })} </div> <!--Displaying products in alternating styles. Alternative product gets different card styling.--> <!--Maps through all product entries and displays them with either CardSmall or CardWide based on their position.--> <section class="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8"> ${product.map((product2, index) => {
    const position = index % 4;
    if (position === 0 || position === 3) {
      return renderTemplate`${renderComponent($$result2, "CardSmall", $$CardSmall, { "product": product2 })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "CardWide", $$CardWide, { "product": product2 })}`;
    }
  })} </section> </div>  ${renderComponent($$result2, "FeaturesStatsAlt", $$FeaturesStatsAlt, { "title": "Pourquoi choisir ScrewFast ?", "subTitle": "Transformez vos id\xE9es en r\xE9sultats tangibles avec les outils ScrewFast. Que vous commenciez par un croquis sur un coin de table ou plongiez dans un projet de construction complet, nos outils sont con\xE7us pour vous aider \xE0 construire en toute confiance.", "benefits": [
    "Outils robustes et fiables pour des performances durables.",
    "Solutions innovantes adapt\xE9es aux besoins de construction modernes.",
    "Support client d\xE9di\xE9 au succ\xE8s de votre projet."
  ] })}  ${renderComponent($$result2, "TestimonialsSectionAlt", $$TestimonialsSectionAlt, { "title": "Ce que disent nos clients", "testimonials": testimonials })} ` })}`;
}, "/Users/deanbarrow/Projects/personal-website/src/pages/fr/products/index.astro", void 0);

const $$file = "/Users/deanbarrow/Projects/personal-website/src/pages/fr/products/index.astro";
const $$url = "/fr/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
