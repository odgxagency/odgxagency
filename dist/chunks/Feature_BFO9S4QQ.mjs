import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent, u as unescapeHTML } from './astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, m as markdownify, s as slugSelector, B as Button, b as $$ImageMod } from './Base_KJslVqZp.mjs';
import { $ as $$Icon } from './Icon_RZ146u-B.mjs';
import { $ as $$Card } from './Card_C48VjxLe.mjs';
import 'clsx';

const $$Astro$1 = createAstro("https://sapick-astro.vercel.app");
const $$ThreeDot = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ThreeDot;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex gap-[0.625rem] ${className}`, "class")}> <div class="h-[0.625rem] w-[0.625rem] bg-yellow-400 rounded-full"></div> <div class="h-[0.625rem] w-[0.625rem] bg-purple-600 rounded-full"></div> <div class="h-[0.625rem] w-[0.625rem] bg-orange-500 rounded-full"></div> </div>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/ThreeDot.astro", void 0);

const $$Astro = createAstro("https://sapick-astro.vercel.app");
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Feature;
  const lang = getLangFromUrl(Astro2.url);
  const { feature } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section overflow-hidden"> <div class="container md:w-3/4 lg:1/2 xl:w-full"> ${feature.map((item, i) => renderTemplate`<div class="flex flex-col xl:flex-row max-xl:gap-y-10 justify-between items-center mb-24 last:mb-0"> <div${addAttribute(`w-[100%] xl:w-[48%] min-h-full ${i % 2 !== 0 && "xl:order-2"}`, "class")}${addAttribute(i % 2 === 0 ? "fade-right-sm" : "fade-left-sm", "data-aos")}${addAttribute(i * 100, "data-aos-delay")}> ${item.images.length === 1 ? renderTemplate`${renderComponent($$result, "Card", $$Card, {}, { "default": ($$result2) => renderTemplate` <div class="h-full bg-light"> <div class="h-1/3 w-auto p-8 md:p-20"> ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": item.images[0], "width": 0, "height": 0, "alt": "feature", "class": "flex justify-center items-center object-contain image-card relative z-10" })} </div> </div> ` })}` : renderTemplate`${renderComponent($$result, "Card", $$Card, { "className": "bg-light" }, { "default": ($$result2) => renderTemplate` <div class="h-full  relative"> <div class="p-8 md:p-20"> ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": item.images[0], "width": 0, "height": 0, "alt": "feature", "class": "max-md:mb-4 flex justify-center items-center object-contain image-card relative z-10" })} ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": item.images[1], "width": 0, "height": 0, "alt": "feature", "class": "max-md:mb-4 max-md:w-full max-md:mx-auto md:w-[40%] md:absolute image-card md:z-20 md:top-1/2 md:right-5 md:transform md:-translate-y-1/2" })} ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": item.images[2], "width": 0, "height": 0, "alt": "feature", "class": "max-md:w-full max-md:mx-auto md:w-[25%] md:absolute image-card md:z-20 md:bottom-5 md:right-5" })} </div> </div> ` })}`} </div> <div${addAttribute(`w-[100%] xl:w-[47%] ${i % 2 !== 0 && "order-1"}`, "class")} data-aos="fade-up-sm"> ${renderComponent($$result, "ThreeDot", $$ThreeDot, { "className": "mb-6" })} <h2 class="mb-6">${unescapeHTML(markdownify(item.title))}</h2> <p class="mb-10 text-lg">${unescapeHTML(markdownify(item.content))}</p> <ul class="mb-10"> ${item.features.map((feature2) => renderTemplate`<li class="mb-4 last:mb-0 flex items-center font-medium text-xl"> <span class="mr-2 inline-block p-1 border border-text text-primary rounded-full"> ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-right" })} </span> ${feature2} </li>`)} </ul> ${renderComponent($$result, "Button", Button, { "link": slugSelector(item.button.link, lang), "label": item.button.label, "icon": true })} </div> </div>`)} </div> </section>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/home/Feature.astro", void 0);

export { $$Feature as $, $$ThreeDot as a };
