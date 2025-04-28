import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { $ as $$Card } from '../../chunks/Card_C48VjxLe.mjs';
import { d as getListPage, $ as $$Base, f as filteredSupportedLang, m as markdownify, b as $$ImageMod } from '../../chunks/Base_D1Km_fHl.mjs';
import { d as dateFormat } from '../../chunks/dateFormat_BmxpTjpR.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
function getStaticPaths() {
  const paths = filteredSupportedLang.map((lang) => ({
    params: { lang: lang || void 0 }
  }));
  return paths;
}
const $$Changelog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Changelog;
  const { lang } = Astro2.params;
  const changelog = await getListPage("changelog", lang);
  const { title, meta_title, description, content, logs } = changelog[0].data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container lg:1/2 xl:w-full"> <div class="row justify-center g-4"> <div class="col-12"> <h1 class="text-center text-[32px] md:text-[48px] lg:text-[64px] mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(title))}</h1> <p class="text-center lg:w-1/2 mx-auto mb-14" data-aos="fade-up-sm">${unescapeHTML(markdownify(content))}</p> </div> ${logs.map((log, index) => renderTemplate`<div class="col-12 md:col-6 lg:col-4 min-h-full" data-aos="fade-up-sm"${addAttribute(50 + index * 100, "data-aos-delay")}> <div class="border border-border rounded-2xl flex flex-col justify-between h-full"> <div> ${renderComponent($$result2, "Card", $$Card, { "className": "h-[386px] !rounded-2xl bg-light" }, { "default": async ($$result3) => renderTemplate` <div class="flex justify-center items-center w-auto p-10 md:p-20 !min-h-full md:h-full" data-aos="zoom-in-sm"> ${renderComponent($$result3, "ImageMod", $$ImageMod, { "src": log.image, "alt": log.version, "width": 0, "height": 0, "class": "object-contain image-card relative z-10" })} </div> ` })} <div class="p-6"> <h4 class="mb-3">${unescapeHTML(markdownify(log.version))}</h4> <p class="text-text-gray">${unescapeHTML(markdownify(log.note))}</p> </div> </div> <p class="p-6 pt-0 text-text-gray">${dateFormat(log.date)}</p> </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/changelog.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/changelog.astro";
const $$url = "/[...lang]/changelog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Changelog,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
