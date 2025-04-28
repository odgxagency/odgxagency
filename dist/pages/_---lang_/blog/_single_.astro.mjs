import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { r as renderEntry, $ as $$Base, f as filteredSupportedLang, e as getSinglePage, m as markdownify, b as $$ImageMod } from '../../../chunks/Base_CCuEFion.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
async function getStaticPaths() {
  const paths = await Promise.all(
    filteredSupportedLang.map(async (lang) => {
      const posts = await getSinglePage("blog", lang);
      return posts.map((post) => ({
        params: {
          lang: lang || void 0,
          single: post.id.split("/").pop()
        },
        props: {
          post
        }
      }));
    })
  );
  return paths.flat();
}
const $$single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$single;
  const { post } = Astro2.props;
  const { title, meta_title, description, image } = post.data;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row justify-center"> <article class="lg:col-10"> <h1 class="text-center text-balance mb-14 text-[32px] md:text-[48px] lg:text-[64px]" data-aos="fade-up-sm">${unescapeHTML(markdownify(title))}</h1> ${image && renderTemplate`<div data-aos="fade-up-sm"> ${renderComponent($$result2, "ImageMod", $$ImageMod, { "src": image, "alt": title, "class": "mb-16 mx-auto aspect-video object-cover rounded-2xl", "width": 1021, "height": 552 })} </div>`} <div class="content lg:px-[10%]" data-aos="fade-up-sm"> ${renderComponent($$result2, "Content", Content, {})} </div> </article> </div> </div> </section> ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/blog/[single].astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/blog/[single].astro";
const $$url = "/[...lang]/blog/[single]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$single,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
