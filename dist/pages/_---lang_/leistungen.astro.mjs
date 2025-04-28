import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, d as getListPage, $ as $$Base, f as filteredSupportedLang, m as markdownify, b as $$ImageMod, s as slugSelector } from '../../chunks/Base_CCuEFion.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
function getStaticPaths() {
  const paths = filteredSupportedLang.map((lang) => ({
    params: { lang: lang || void 0 }
  }));
  return paths;
}
const $$Leistungen = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Leistungen;
  const lang = getLangFromUrl(Astro2.url);
  const integrationIndex = await getListPage(
    "integration",
    lang
  );
  const { title, meta_title, description, hero, integrations } = integrationIndex[0].data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container md:w-3/4 lg:1/2 xl:w-full"> <h1 class="text-center text-[32px] md:text-[48px] lg:text-[64px] mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.title))}</h1> <p class="text-center lg:w-1/2 mx-auto mb-14" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.content))}</p> <div class="row g-4 justify-center"> ${integrations.map((i, index) => renderTemplate`<div class="col-12 lg:col-6 xl:col-4 min-h-full" data-aos="zoom-in-sm"${addAttribute(50 + index * 100, "data-aos-delay")}> <div class="bg-light p-6 rounded-2xl flex flex-col justify-between h-full"> <div class="p-2 mb-3 rounded-full bg-body w-fit"> ${renderComponent($$result2, "ImageMod", $$ImageMod, { "width": 42, "height": 42, "src": i.icon, "alt": i.app, "class": "" })} </div> <p class="font-medium text-xl mb-2.5">${unescapeHTML(markdownify(i.app))}</p> <p class="mb-4 text-text/80">${unescapeHTML(markdownify(i.content))}</p> ${i.button.enable && renderTemplate`<a${addAttribute(slugSelector(i.button.link, lang), "href")} class="btn btn-ghost w-fit" target="_blank" rel="noopener noreferrer"> ${i.button.label} </a>`} </div> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/leistungen.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/leistungen.astro";
const $$url = "/[...lang]/leistungen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Leistungen,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
