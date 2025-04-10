import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, d as addAttribute, b as renderTemplate } from '../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { m as markdownify, b as $$ImageMod, g as getLangFromUrl, s as slugSelector, B as Button, d as getListPage, $ as $$Base, f as filteredSupportedLang } from '../../chunks/Base_KJslVqZp.mjs';
import { TfiArrowRight } from 'react-icons/tfi';
import { $ as $$Card } from '../../chunks/Card_C48VjxLe.mjs';
import { $ as $$Hero } from '../../chunks/Hero_X2vYgizQ.mjs';
import { $ as $$More } from '../../chunks/More_Dyp6xSoR.mjs';
import { C as Counter } from '../../chunks/Counter_CYQKoyyi.mjs';
import { $ as $$Feature } from '../../chunks/Feature_BFO9S4QQ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://sapick-astro.vercel.app");
const $$Benefits = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Benefits;
  const { benefit } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section pb-0"> <div class="container md:w-3/4 lg:1/2 xl:w-full"> <div class="row justify-center"> <div class="col-12"> <h2 class="text-center mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(benefit.title))}</h2> <p class="text-center lg:w-1/2 mx-auto mb-14" data-aos="fade-up-sm">${unescapeHTML(markdownify(benefit.content))}</p> </div> <div class="col-12"> <div class="row g-4 justify-center"> ${benefit.benefits.map((b, i) => renderTemplate`<div${addAttribute(`col-12 xl:col-6 min-h-full ${benefit.benefits.length - 1 === i && "hidden"}`, "class")} data-aos="fade-up-sm"${addAttribute(`${50 + i * 100}`, "data-aos-delay")}> ${renderComponent($$result, "Card", $$Card, { "className": "bg-light h-full" }, { "default": ($$result2) => renderTemplate` <div class="mx-auto w-fit flex flex-col relative z-10 pt-20 pb-11 px-5"> ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": b.image, "alt": b.title, "width": 336, "height": 441, "class": "image-card mb-10", "format": "webp" })} <div> <h4 class="mb-2">${unescapeHTML(markdownify(b.title))}</h4> <p>${unescapeHTML(markdownify(b.title))}</p> </div> </div> ` })} </div>`)} <div class="col-12"> <div class="bg-light rounded-[2rem]" data-aos="fade-up-sm"> <div class="flex flex-col xl:flex-row items-center gap-11 pt-20 pb-11 px-5 md:px-20 md:py-14"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": benefit.benefits[benefit.benefits.length - 1].image, "alt": "img", "width": 499, "height": 437, "format": "webp", "data-aos": "zoom-in" })} <div> <h3 class="mb-6" data-aos="fade-up">${unescapeHTML(markdownify(
    benefit.benefits[benefit.benefits.length - 1].title
  ))}</h3> <p class="mb-10 text-lg" data-aos="fade-up">${unescapeHTML(markdownify(
    benefit.benefits[benefit.benefits.length - 1].content
  ))}</p> ${benefit.benefits[benefit.benefits.length - 1].points && renderTemplate`<ul class="list-disc list-inside"> ${benefit.benefits[benefit.benefits.length - 1].points.map((p) => renderTemplate`<li class="mb-4 last:mb-0 flex items-center font-medium text-xl" data-aos="fade-up"> <span class="mr-2 inline-block p-1.5 border border-text text-primary rounded-full"> ${renderComponent($$result, "TfiArrowRight", TfiArrowRight, {})} </span> ${p} </li>`)} </ul>`} </div> </div> </div> </div> </div> </div> </div> </div> </section>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/features/Benefits.astro", void 0);

const $$Astro$1 = createAstro("https://sapick-astro.vercel.app");
const $$Trust = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Trust;
  const lang = getLangFromUrl(Astro2.url);
  const { trust } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative bg-primary overflow-hidden"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": "/images/homepage/patternBg.png", "alt": "pattern", "class": "absolute top-0 left-0 z-10 object-cover w-full h-full", "width": 0, "height": 0 })} <div class="absolute flex-none w-[440px] h-[769px] left-[calc(45.62500000000002%-220px)] top-14 bg-gradient-to-r from-[#ffe74b] to-[rgb(255,231,75)] rounded-[769px] blur-[100px] opacity-15 z-1 overflow-visible rotate-[35deg]"></div> <section class="section relative z-20"> <div class="container"> <h2 class="text-center text-text-light mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(trust.title))}</h2> <p class="text-center text-text-light lg:w-1/2 mx-auto mb-14" data-aos="fade-up-sm">${unescapeHTML(markdownify(trust.content))}</p> <div class="row justify-center gy-4"> ${trust.stats.map((stat, i) => renderTemplate`<div class="col-12 lg:col-10 xl:col-9"> <div class="overflow-hidden rounded-[20px]" data-aos="fade-up-sm"${addAttribute(i * 100, "data-aos-delay")}> <div class="flex flex-col md:flex-row lg:items-center justify-between bg-body"> <div class="md:w-[63%] p-8"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": stat.company, "alt": "company logo", "width": 152, "height": 40, "format": "svg", "class": "mb-7" })} <p class="mb-7 text-xl before:content-['“'] after:content-['”']">${unescapeHTML(markdownify(stat.comment))}</p> <div class="flex items-center gap-3"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": stat.author, "alt": "author", "width": 48, "height": 48, "format": "webp" })} <div> <p class="font-medium text-lg">${unescapeHTML(markdownify(stat.name))}</p> <p class="text-sm">${unescapeHTML(markdownify(stat.designation))}</p> </div> </div> </div> <div class="md:w-[32%] bg-light px-12 py-6"> <div class="flex flex-col gap-4"> ${stat.numbers.map((n) => renderTemplate`<div class="flex flex-col max-md:items-center"> <p class="font-medium text-primary text-[3rem] lg:text-[4rem]"> ${renderComponent($$result, "Counter", Counter, { "count": n.value, "duration": 5, "suffix": n.suffix, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/helpers/Counter", "client:component-export": "default" })} </p> <p class="text-lg text-text/60">${unescapeHTML(markdownify(n.subtitle))}</p> </div>`)} </div> </div> </div> </div> </div>`)} </div> ${trust.button && renderTemplate`<div data-aos="fade-up-sm" class="mt-6 w-full flex justify-center"> ${renderComponent($$result, "Button", Button, { "link": slugSelector(trust.button.link, lang), "label": trust.button.label })} </div>`} </div> </section> </div>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/features/Trust.astro", void 0);

const $$Astro = createAstro("https://sapick-astro.vercel.app");
function getStaticPaths() {
  const paths = filteredSupportedLang.map((lang) => ({
    params: { lang: lang || void 0 }
  }));
  return paths;
}
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Features;
  const { lang } = Astro2.params;
  const featureIndex = await getListPage(
    "features",
    lang
  );
  const { title, meta_title, description, hero, benefit, trust, more } = featureIndex[0].data;
  const homepage = await getListPage("homepage", lang);
  const { feature } = homepage[0].data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "hero": hero })} ${renderComponent($$result2, "Benefits", $$Benefits, { "benefit": benefit })} ${renderComponent($$result2, "Feature", $$Feature, { "feature": feature })} ${renderComponent($$result2, "Trust", $$Trust, { "trust": trust })} ${renderComponent($$result2, "More", $$More, { "more": more })} ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/features.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/features.astro";
const $$url = "/[...lang]/features";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Features,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
