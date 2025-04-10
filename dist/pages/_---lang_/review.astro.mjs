import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { $ as $$Faq } from '../../chunks/Faq_BSkzWSoi.mjs';
import { d as getListPage, e as getSinglePage, $ as $$Base, f as filteredSupportedLang } from '../../chunks/Base_KJslVqZp.mjs';
import { $ as $$Testimonial } from '../../chunks/Testimonial_BQeIK5f_.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
function getStaticPaths() {
  const paths = filteredSupportedLang.map((lang) => ({
    params: { lang: lang || void 0 }
  }));
  return paths;
}
const $$Review = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Review;
  const { lang } = Astro2.params;
  const reviewIndex = await getListPage("review", lang);
  const { title, meta_title, description } = reviewIndex[0].data;
  const testimonial = await getSinglePage(
    "testimonialSection",
    lang,
    "testimonial"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Testimonial", $$Testimonial, { "testimonial": testimonial })} ${renderComponent($$result2, "Faq", $$Faq, {})} ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/review.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/review.astro";
const $$url = "/[...lang]/review";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Review,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
