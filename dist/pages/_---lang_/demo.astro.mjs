import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { $ as $$ContactForm } from '../../chunks/ContactForm_CBtV9G7V.mjs';
import { $ as $$Faq } from '../../chunks/Faq_B6OklX56.mjs';
import { $ as $$Hero } from '../../chunks/Hero_BiQ3ieJ9.mjs';
import { d as getListPage, $ as $$Base, f as filteredSupportedLang, m as markdownify } from '../../chunks/Base_D1Km_fHl.mjs';
import { GoArrowRight } from 'react-icons/go';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
function getStaticPaths() {
  const paths = filteredSupportedLang.map((lang) => ({
    params: { lang: lang || void 0 }
  }));
  return paths;
}
const $$Demo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Demo;
  const { lang } = Astro2.params;
  const demoIndex = await getListPage("demo", lang);
  const { title, meta_title, description, hero } = demoIndex[0].data;
  const featureIndex = await getListPage(
    "features",
    lang
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container md:w-3/4 lg:1/2 xl:w-full"> <div class="row justify-between gy-4"> <div class="col-12 xl:col-4 min-h-full"> <div class="flex flex-col justify-between h-full"> <div class="mb-6"> <h1 class="text-[32px] md:text-[48px] lg:text-[64px] mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.title))}</h1> <p data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.content))}</p> </div> <ul> ${hero.points.map((point, index) => renderTemplate`<li class="bg-light p-4 rounded-2xl mb-2 w-full flex items-center text-sm" data-aos="fade-left-sm"${addAttribute(50 + index * 100, "data-aos-delay")}> <span class="mr-2 inline-block bg-primary p-2 rounded-full text-text-light w-fit h-fit"> ${renderComponent($$result2, "GoArrowRight", GoArrowRight, {})}${" "} </span> ${point} </li>`)} </ul> </div> </div> <div class="col-12 xl:col-7"> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </div> </section> ${renderComponent($$result2, "Hero", $$Hero, { "hero": featureIndex[0].data.hero, "titleBg": false })} ${renderComponent($$result2, "Faq", $$Faq, {})} ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/demo.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/demo.astro";
const $$url = "/[...lang]/demo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Demo,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
