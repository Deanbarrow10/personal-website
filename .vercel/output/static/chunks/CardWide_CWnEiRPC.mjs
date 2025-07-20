import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from './astro/server_B8C3cij_.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_BqdmYvMl.mjs';
import { $ as $$Icon } from './MainLayout_DJAqc3Wq.mjs';

const $$Astro$1 = createAstro("https://screwfast.uk");
const $$CardSmall = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardSmall;
  const { product } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`<!-- A clickable card that leads to the details of the product-->${maybeRenderHead()}<a${addAttribute("/products/" + product.slug, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-xl shadow-lg outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none md:h-80"> <!-- The product's main image --> ${renderComponent($$result, "Image", $$Image, { "src": product.data.main.imgCard, "alt": product.data.main.imgAlt, "draggable": "false", "class": imageClass, "format": "avif" })} <!-- An overlay gradient that sits on top of the product image--> <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- The product's subtitle and the anchor SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })} </span> </a>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/ui/cards/CardSmall.astro", void 0);

const $$Astro = createAstro("https://screwfast.uk");
const $$CardWide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardWide;
  const { product } = Astro2.props;
  const imageClass = "absolute inset-0 h-full w-full object-cover object-center transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110";
  return renderTemplate`<!-- The anchor tag is the main container for the product card. When clicked, this leads to the details of the product. -->${maybeRenderHead()}<a${addAttribute("/products/" + product.slug, "href")} data-astro-prefetch class="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-xl outline-none ring-zinc-500 focus-visible:ring dark:ring-zinc-200 dark:focus:outline-none md:col-span-2 md:h-80"> <!-- The product's main image --> ${renderComponent($$result, "Image", $$Image, { "src": product.data.main.imgCard, "alt": product.data.main.imgAlt, "draggable": "false", "class": imageClass, "format": "avif" })} <!-- This container includes a gradient overlay over the product's image --> <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-800 via-transparent to-transparent opacity-50"></div> <!-- This container includes product's subtitle and an SVG icon--> <span class="relative mb-3 ml-4 inline-block text-sm font-bold text-neutral-50 transition duration-[600ms] ease-[cubic-bezier(0.45,0,0.55,1)] group-hover:scale-110 md:ml-5 md:text-lg">${product.data.description} ${renderComponent($$result, "Icon", $$Icon, { "name": "openInNew" })}</span> </a>`;
}, "/Users/deanbarrow/Projects/personal-website/src/components/ui/cards/CardWide.astro", void 0);

export { $$CardSmall as $, $$CardWide as a };
