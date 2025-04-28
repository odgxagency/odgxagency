import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, u as unescapeHTML, d as addAttribute } from '../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { $ as $$ContactForm } from '../../chunks/ContactForm_CBv4635g.mjs';
import { $ as $$Faq } from '../../chunks/Faq_BNeGnriV.mjs';
import { D as DynamicIcon } from '../../chunks/DynamicIcon_Cg6y2Pko.mjs';
import { d as getListPage, e as getSinglePage, $ as $$Base, f as filteredSupportedLang, m as markdownify } from '../../chunks/Base_CCuEFion.mjs';
import { $ as $$TestimonialSlider } from '../../chunks/TestimonialSlider_DKjJ23b6.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
function getStaticPaths() {
  const paths = filteredSupportedLang.map((lang) => ({
    params: { lang: lang || void 0 }
  }));
  return paths;
}
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const { lang } = Astro2.params;
  const contactIndex = await getListPage(
    "contact",
    lang
  );
  const { title, meta_title, description, hero, contact } = contactIndex[0].data;
  const testimonial = await getSinglePage(
    "testimonialSection",
    lang,
    "testimonial"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row g-4 justify-center"> <div class="col-12"> <h1 class="text-center mb-6 text-[32px] md:text-[48px] lg:text-[64px]" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.title))}</h1> <p class="lg:text-balance lg:w-1/2 text-center mx-auto mb-14" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.content))}</p> </div> <div class="col-12 md:col-10 lg:col-8 xl:col-5 min-h-full"> <div class="p-10 rounded-xl bg-light h-full flex flex-col justify-between"> <h3 class="mb-auto max-xl:mb-6" data-aos="fade-up-sm">
Start a Conversation
</h3> <div> ${contact.map((c, i) => renderTemplate`<div class="flex items-center mb-4 last:mb-0" data-aos="fade-up-sm"${addAttribute(i * 100, "data-aos-delay")}> <div class="mr-4 p-5 rounded-full bg-primary w-fit"> ${renderComponent($$result2, "DynamicIcon", DynamicIcon, { "icon": c.icon, "className": "text-text-light text-3xl" })} </div> <p class="text-xl">${unescapeHTML(markdownify(c.name))}</p> </div>`)} </div> </div> </div> <div class="col-12 md:col-10 lg:col-8 xl:col-7 min-h-full"> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "lang": lang })} </div> </div> </div> </section> ${renderComponent($$result2, "TestimonialSlider", $$TestimonialSlider, { "testimonial": testimonial })} ${renderComponent($$result2, "Faq", $$Faq, {})} ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/contact.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/contact.astro";
const $$url = "/[...lang]/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
