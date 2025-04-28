import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, a as getTranslations, b as $$ImageMod, m as markdownify, s as slugSelector, d as getListPage, e as getSinglePage, $ as $$Base, f as filteredSupportedLang } from '../../chunks/Base_CCuEFion.mjs';
import { HiOutlineArrowRight } from 'react-icons/hi2';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://sapick-astro.vercel.app");
const $$BlogCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogCard;
  const { data, index } = Astro2.props;
  const { title, image } = data.data;
  const lang = getLangFromUrl(Astro2.url);
  const { read_more } = await getTranslations(lang);
  const slugParts = data.id.split("/");
  slugParts[0] = "blog";
  const modifiedSlug = slugParts.join("/");
  data.id = modifiedSlug;
  return renderTemplate`${maybeRenderHead()}<div data-aos="fade-up-sm"${addAttribute(index * 100, "data-aos-delay")} class="relative flex flex-col justify-between bg-light h-full p-4 rounded-2xl group"> <div> ${image && renderTemplate`<div class="rounded-xl overflow-hidden mb-5"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "class": "w-full object-cover group-hover:scale-105 transition-all duration-300 aspect-[371/244]", "src": image, "alt": title, "width": 371, "height": 244, "format": "webp" })} </div>`} <h4 class="mb-6">${unescapeHTML(markdownify(title))}</h4> </div> <a class="stretched-link flex items-center gap-2 text-text/70"${addAttribute(slugSelector(`/${data.id}`, lang), "href")}> ${read_more} ${renderComponent($$result, "HiOutlineArrowRight", HiOutlineArrowRight, {})} </a> </div>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/BlogCard.astro", void 0);

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
  const postIndex = await getListPage("blog", lang);
  const { title, meta_title, description, hero } = postIndex[0].data;
  const posts = await getSinglePage("blog", lang);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row"> <div class="col-12"> <h1 class="text-center text-[32px] md:text-[48px] lg:text-[64px] mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero?.title))}</h1> </div> <div class="col-12"> <p class="text-center lg:w-1/2 mx-auto mb-14" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero?.content))}</p> </div> <div class="col-12"> <div class="row g-4"> ${posts.map((post, index) => renderTemplate`<div class="col-12 md:col-6 xl:col-4 min-h-full"> ${renderComponent($$result2, "BlogCard", $$BlogCard, { "data": post, "index": index })} </div>`)} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/blog/index.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/blog/index.astro";
const $$url = "/[...lang]/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
