import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, a as getTranslations, $ as $$Base, c as config, f as filteredSupportedLang, b as $$ImageMod, m as markdownify, B as Button, s as slugSelector } from '../chunks/Base_KJslVqZp.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
function getStaticPaths() {
  const paths = filteredSupportedLang.map((lang) => ({
    params: { lang: lang || void 0 }
  }));
  return paths;
}
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  let lang = getLangFromUrl(Astro2.url);
  const disabledLanguages = config.settings.disable_languages;
  if (disabledLanguages.includes(lang)) {
    lang = config.settings.default_language;
  }
  const { page_not_found_content, page_not_found, back_to_home } = await getTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Page Not Found" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container md:w-3/4 lg:1/2 w-full"> <div class="row justify-center items-center"> <div class="col-12 lg:col-6" data-aos="fade-right-sm"> ${renderComponent($$result2, "ImageMod", $$ImageMod, { "class": "mx-auto", "src": "/images/404.svg", "alt": "404", "width": 494, "height": 460, "format": "svg" })} </div> <div class="col-12 lg:col-6"> <h1 class="text-[32px] md:text-[48px] lg:text-[64px] mb-6" data-aos="fade-left-sm">${unescapeHTML(markdownify(page_not_found))}</h1> <p class="text-lg mb-10" data-aos="fade-left-sm">${unescapeHTML(markdownify(page_not_found_content))}</p> <div data-aos="fade-left-sm"> ${renderComponent($$result2, "Button", Button, { "label": back_to_home, "link": slugSelector("/", lang), "icon": true })} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/404.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
