import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, u as unescapeHTML, d as addAttribute, b as renderTemplate, e as renderScript } from '../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { $ as $$Faq } from '../chunks/Faq_B6OklX56.mjs';
import { a as $$ThreeDot, $ as $$Feature } from '../chunks/Feature_BTRCuyoi.mjs';
import { g as getLangFromUrl, m as markdownify, s as slugSelector, b as $$ImageMod, d as getListPage, e as getSinglePage, $ as $$Base, f as filteredSupportedLang } from '../chunks/Base_D1Km_fHl.mjs';
import { $ as $$TitleBg } from '../chunks/TitleBg_D_5QumXG.mjs';
import { C as Counter } from '../chunks/Counter_CYQKoyyi.mjs';
import { $ as $$Testimonial } from '../chunks/Testimonial_Ck5YuN5V.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://sapick-astro.vercel.app");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Hero;
  const lang = getLangFromUrl(Astro2.url);
  const { hero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden"> <section class="section"> <div class="container md:w-3/4 lg:1/2 xl:w-full"> <div class="row g-5 justify-center items-center"> <div class="col-12 lg:col-8 xl:col-6" data-aos="fade-up-sm"> ${renderComponent($$result, "ThreeDot", $$ThreeDot, { "className": "mb-6 max-md:justify-center" })} <h1 class="mb-6 max-md:text-center">${unescapeHTML(markdownify(hero.title))}</h1> <p class="mb-10 text-xl max-md:text-center">${unescapeHTML(markdownify(hero.content))}</p> <div class="flex items-center flex-col md:flex-row gap-4"> ${hero.buttons.map((button, i) => renderTemplate`<a${addAttribute(slugSelector(button.link, lang), "href")}${addAttribute(`btn w-fit ${i % 2 === 0 ? "btn-primary" : "btn-ghost"}`, "class")} data-aos="fade-down-sm"> ${button.label} </a>`)} </div> </div> <div class="col-12 xl:col-6" data-aos="zoom-out-sm"> <div> ${console.log("Hero Image URL:", hero.images[0])} ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": hero.images[0], "alt": "hero", "class": "mx-auto xl:scale-125", "format": "webp", "width": 287, "height": 509 })} </div> </div> </div> </div> </section> ${renderComponent($$result, "TitleBg", $$TitleBg, {})} <div class="border-y border-border backdrop-blur-[80px] w-full" data-aos="fade-up-sm"> <div class="flex max-md:flex-wrap justify-center items-center mx-auto md:w-3/4 lg:1/2 xl:w-full"> ${hero.client_logos.map((item) => renderTemplate`<div class="max-md:w-1/2 md:first:border-l md:border-r md:border-border px-4 xl:px-7 py-6 xl:py-9"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "class": "mx-auto grayscale opacity-50", "src": item, "alt": "hero", "width": 179, "height": 48, "format": "webp" })} </div>`)} </div> </div> </div>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/home/Hero.astro", void 0);

const $$Astro$3 = createAstro("https://sapick-astro.vercel.app");
const $$ReasonSlide = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ReasonSlide;
  const { points } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full xl:w-[48%]"> ${points.map((f, i) => renderTemplate`<div${addAttribute(i, "data-tab-trigger")}> <div class="flex flex-col sm:flex-row items-start" data-aos="fade-left-sm"${addAttribute(i * 100, "data-aos-delay")}> <div${addAttribute(`px-9 py-6 border-l-[3px] cursor-pointer transition-colors duration-300`, "class")} data-card-content> <p class="pb-3 font-medium text-xl transition-colors duration-300" data-title>${unescapeHTML(f.title)}</p> <p class="text-lg transition-colors duration-300" data-description>${unescapeHTML(f.content)}</p> </div> </div> </div>`)} </div> <div class="w-full xl:w-[48%] h-[300px] md:h-[630px]" data-aos="fade-left-sm" data-aos-delay="200"> <div class="relative rounded-[2rem] overflow-hidden bg-light w-full h-full"> <img src="/images/card-pattern-1.png" alt="pattern" class="absolute bottom-0 right-0 scale-x-[-1] w-1/3"${addAttribute(0, "width")}${addAttribute(0, "height")}> <img src="/images/card-pattern-2.png" alt="pattern" class="absolute top-0 left-[-9%] scale-x-[-1] w-1/3"${addAttribute(0, "width")}${addAttribute(0, "height")}> ${points.map((f, i) => renderTemplate`<div class="h-full"${addAttribute(i, "data-tab-content")}> <div${addAttribute([
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 w-3/5",
    { "opacity-0 pointer-events-none": i !== 0 }
  ], "class:list")}> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": f.image, "width": 329, "height": 431, "alt": "reason", "class": "h-1/3 mx-auto shadow rounded-[25px] w-full p-2 border border-[#ffffff4d]" })} </div> </div>`)} </div> </div> ${renderScript($$result, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/home/ReasonSlide.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/home/ReasonSlide.astro", void 0);

const $$Astro$2 = createAstro("https://sapick-astro.vercel.app");
const $$Reasons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Reasons;
  const { reason } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container md:w-3/4 lg:1/2 xl:w-full"> ${renderComponent($$result, "ThreeDot", $$ThreeDot, { "className": "mb-10 max-xl:justify-center", "data-aos": "fade-up" })} <h2 class="mb-14 max-xl:text-center" data-aos="fade-right">${unescapeHTML(markdownify(reason.title))}</h2> <div class="flex flex-col xl:flex-row max-xl:gap-8 items-center justify-between"> ${renderComponent($$result, "ReasonSlide", $$ReasonSlide, { "points": reason.points })} </div> </div> </section>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/home/Reasons.astro", void 0);

const $$Astro$1 = createAstro("https://sapick-astro.vercel.app");
const $$Video = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Video;
  const { video } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden bg-primary" data-aos="fade-in"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": "/images/homepage/patternBg.png", "alt": "pattern", "class": "absolute top-0 left-0 z-10 object-cover w-full h-full", "width": 0, "height": 0 })} <div class="absolute flex-none w-[440px] h-[769px] left-[calc(45.62500000000002%-220px)] top-14 bg-gradient-to-r from-[#ffe74b] to-[rgb(255,231,75)] rounded-[769px] blur-[100px] opacity-15 z-1 overflow-visible rotate-[35deg]"></div> <section class="section relative z-20"> <div class="container"> <div class="row justify-center xl:justify-between items-end mb-11 md:w-3/4 lg:1/2 xl:w-full mx-auto"> <div class="col-12 md:col-12 xl:col-7"> ${renderComponent($$result, "ThreeDot", $$ThreeDot, { "className": "mb-6 max-xl:justify-center", "data-aos": "fade-in" })} <h2 class="text-text-light max-xl:text-center text-balance max-xl:mb-4" data-aos="fade-right">${unescapeHTML(markdownify(video.title))}</h2> </div> <div class="col-12 md:col-9 xl:col-5" data-aos="fade-left"> <p class="text-text-light text-lg max-xl:text-center">${unescapeHTML(markdownify(video.content))}</p> </div> </div> <div class="mx-auto p-2 shadow rounded-[20px] border border-[#ffffff36] mb-28" data-aos="zoom-in"> <div class="video-container"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": "/images/homepage/video/video-cover.png", "alt": "Thumbnail", "class": "video-thumbnail", "width": 1100, "height": 492, "loading": "eager" })} <div class="play-button"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--token-834413c1-7886-40c2-905d-025892d495c7, rgb(0, 88, 67))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> <p>Watch how it works</p> </div> <video class="overflow-hidden rounded-lg object-cover video-player" width="full"${addAttribute(550, "height")} controls autoplay> <source src="/videos/video.mp4" type="video/mp4">
"Demo video"
</video> </div> </div> <div class="row g-5 justify-between px-14"> ${video.stats.map((stat, i) => renderTemplate`<div class="col-12 md:col-6 xl:col-3 text-text-light" data-aos="fade-up"${addAttribute(i * 100, "data-aos-delay")}> <h1 class="flex justify-center items-center mb-4"> ${stat.prefix && renderTemplate`<span>${unescapeHTML(markdownify(stat.prefix))}</span>`} <span> ${renderComponent($$result, "Counter", Counter, { "count": stat.value, "duration": 5, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/helpers/Counter", "client:component-export": "default" })} </span> ${stat.suffix && renderTemplate`<span>${unescapeHTML(markdownify(stat.suffix))}</span>`} </h1> <p class="text-center text-base">${unescapeHTML(markdownify(stat.key))}</p> </div>`)} </div> </div> </section> </div> ${renderScript($$result, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/home/Video.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/home/Video.astro", void 0);

const $$Astro = createAstro("https://sapick-astro.vercel.app");
function getStaticPaths() {
  const paths = filteredSupportedLang.map((lang) => ({
    params: { lang: lang || void 0 }
  }));
  return paths;
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { lang } = Astro2.params;
  lang || getLangFromUrl(Astro2.url);
  const homepage = await getListPage("homepage", lang);
  const { feature, video, reason } = homepage[0].data;
  const wpSlug = lang === "en" ? "homepage-en" : "homepage-de";
  const username = "adjective";
  const password = "marvelous";
  const auth = btoa(`${username}:${password}`);
  const res = await fetch(`https://next-boats.localsite.io/wp-json/wp/v2/pages?slug=${wpSlug}`, {
    headers: {
      Authorization: `Basic ${auth}`
    }
  });
  const data = await res.json();
  const wpPage = data.length > 0 ? data[0] : null;
  const buttons = [];
  if (wpPage?.acf?.hero_button_label && wpPage?.acf?.hero_button_link) {
    buttons.push({
      label: wpPage.acf.hero_button_label,
      link: wpPage.acf.hero_button_link
    });
  }
  const hero = {
    title: wpPage?.acf?.hero_title || "Digital X Agency",
    content: wpPage?.acf?.hero_content || "<p>Ihre B2b Agentur f\xFCr Fintech und Business. Wir bringen digitale Strategien auf das n\xE4chste Level und verbinden innovative Technologien mit ma\xDFgeschneiderten Marketingl\xF6sungen. Vertrauen Sie auf unsere Expertise, um Ihre Marke im digitalen Raum erfolgreich zu positionieren.</p>",
    images: wpPage?.acf?.hero_images ? [wpPage.acf.hero_images.url] : ["/images/herobsp.png"],
    buttons,
    client_logos: homepage[0].data.hero.client_logos
  };
  const testimonialData = await getSinglePage(
    "testimonialSection",
    lang,
    "testimonial"
  );
  const testimonial = testimonialData.length > 0 ? testimonialData : [];
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "hero": hero })} ${renderComponent($$result2, "Feature", $$Feature, { "feature": feature })} ${renderComponent($$result2, "Video", $$Video, { "video": video })} ${renderComponent($$result2, "Reasons", $$Reasons, { "reason": reason })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { "testimonial": testimonial })} ${renderComponent($$result2, "Faq", $$Faq, {})} ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/index.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/index.astro";
const $$url = "/[...lang]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
