import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { r as renderEntry, $ as $$Base, f as filteredSupportedLang, e as getSinglePage, h as humanize } from '../../chunks/Base_KJslVqZp.mjs';
import { d as dateFormat } from '../../chunks/dateFormat_BmxpTjpR.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
async function getStaticPaths() {
  const paths = await Promise.all(
    filteredSupportedLang.map(async (lang) => {
      const pages = await getSinglePage("pages", lang);
      return pages.map((page) => ({
        params: {
          lang: lang || void 0,
          regular: page.id.split("/").pop()
        },
        props: {
          page
        }
      }));
    })
  );
  return paths.flat();
}
const $$regular = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$regular;
  const { page } = Astro2.props;
  const { title, meta_title, description, update, image } = page.data;
  const { Content } = await renderEntry(page);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description, "image": image }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="text-center text-[32px] md:text-[48px] lg:text-[64px]" data-aos="fade-up-sm">${unescapeHTML(humanize(title))}</h1> ${update && renderTemplate`<p class="text-center text-lg mt-6" data-aos="fade-up-sm">
Last Update: ${dateFormat(update)} </p>`} <div class="mt-16 row justify-center"> <div class="lg:col-10"> <div class="content" data-aos="fade-in-sm"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </div> </section> ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/[regular].astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/[regular].astro";
const $$url = "/[...lang]/[regular]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$regular,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
