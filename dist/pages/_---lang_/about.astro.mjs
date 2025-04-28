import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, b as renderTemplate, d as addAttribute } from '../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { C as Counter } from '../../chunks/Counter_CYQKoyyi.mjs';
import { m as markdownify, b as $$ImageMod, d as getListPage, e as getSinglePage, $ as $$Base, f as filteredSupportedLang } from '../../chunks/Base_CCuEFion.mjs';
import { $ as $$Testimonial } from '../../chunks/Testimonial_C7NAuv-j.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$4 = createAstro("https://sapick-astro.vercel.app");
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Experience;
  const { experience } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section pt-0"> <div class="container md:w-3/4 lg:1/2 xl:w-full"> <h2 class="mb-8 text-center" data-aos="fade-up-sm">${unescapeHTML(markdownify(experience.title))}</h2> <div class="row justify-center"> <div class="col-12" data-aos="fade-up-sm"> <div class="flex flex-wrap xl:flex-nowrap gap-6 justify-center w-full"> <div class="w-full xl:w-1/3 min-h-full flex flex-col md:flex-row xl:flex-col justify-between gap-6" data-aos="fade-up-sm"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": experience.cards[0].image, "alt": "Sapick Advantage", "width": 364, "height": 300, "class": "object-cover w-full md:w-1/2 xl:w-full rounded-2xl" })} <div class="bg-light rounded-2xl flex flex-col p-8 w-full md:w-1/2 xl:w-full h-auto" data-aos="fade-up-sm"> <h3> ${renderComponent($$result, "Counter", Counter, { "className": "mb-2 text-primary", "count": experience.cards[2].value, "duration": 0.8, "suffix": experience.cards[2].suffix, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/helpers/Counter", "client:component-export": "default" })} </h3> <p class="mb-6">${experience.cards[2].title}</p> <p>${experience.cards[2].content}</p> </div> </div> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": experience.cards[1].image, "alt": "Sapick Advantage", "width": 364, "height": 557, "class": "object-cover w-full xl:w-1/3 rounded-2xl", "data-aos": "fade-up-sm" })} <div class="w-full xl:w-1/3 min-h-full flex flex-col md:flex-row xl:flex-col justify-between gap-6" data-aos="fade-up-sm"> <div class="bg-light rounded-2xl flex flex-col p-8 w-full md:w-1/2 xl:w-full h-auto"> <h3> ${renderComponent($$result, "Counter", Counter, { "className": "mb-2 text-primary", "count": experience.cards[3].value, "duration": 0.8, "suffix": experience.cards[3].suffix, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/helpers/Counter", "client:component-export": "default" })} </h3> <p class="mb-6">${experience.cards[3].title}</p> <p>${experience.cards[3].content}</p> </div> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": experience.cards[4].image, "alt": "Sapick Advantage", "width": 364, "height": 312, "class": "object-cover w-full md:w-1/2 xl:w-full rounded-2xl", "data-aos": "fade-up-sm" })} </div> </div> </div> </div> </div> </section>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/about/Experience.astro", void 0);

const $$Astro$3 = createAstro("https://sapick-astro.vercel.app");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  const { hero } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container md:w-3/4 lg:1/2 xl:w-full"> <div class="row justify-center g-5 overflow-hidden"> <div class="col-12"> <h1 class="mb-6 text-center text-[32px] md:text-[48px] lg:text-[64px]" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.title))}</h1> <p class="text-center text-lg mt-6 lg:w-3/4 mx-auto" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.content))}</p> </div> <div class="col-12"> <div class="row g-4"> <div class="col-12 lg:col-8 min-h-full" data-aos="fade-left-sm"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": hero.image_1, "alt": "hero", "width": 804, "height": 524, "format": "webp", "class": "rounded-2xl object-cover w-full h-full" })} </div> <div class="col-12 lg:col-4 min-h-full" data-aos="fade-right-sm"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": hero.image_2, "alt": "hero", "width": 804, "height": 524, "format": "webp", "class": "rounded-2xl object-cover w-full h-full" })} </div> </div> </div> <div class="col-12 lg:col-10"> <p class="text-center mb-8 mt-9" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.trust.title))}</p> <div class="flex max-lg:flex-wrap items-center gap-4" data-aos="fade-up-sm"> ${hero.trust.business.map((item) => renderTemplate`${renderComponent($$result, "ImageMod", $$ImageMod, { "src": item, "alt": "trusted business", "width": 118, "height": 32, "class": "mx-auto grayscale opacity-50", "format": "svg" })}`)} </div> </div> </div> </div> </section>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/about/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://sapick-astro.vercel.app");
const $$Team = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Team;
  const { team } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class=""> <div class="container md:w-3/4 lg:1/2 xl:w-full"> <div class="row"> <div class="col-12"> <h2 class="text-center mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(team.title))}</h2> <p class="lg:w-1/2 mx-auto text-lg text-balance text-center mb-14" data-aos="fade-up-sm">${unescapeHTML(markdownify(team.content))}</p> </div> <div class="col-12"> <div class="row g-4 justify-center"> ${team.members.map((m, index) => renderTemplate`<div class="col-12 md:col-6 lg:col-4 xl:col-3" data-aos="fade-up-sm"${addAttribute(50 + index * 100, "data-aos-delay")}> <div class="mx-auto w-fit flex flex-col justify-center"> <div class="rounded-lg md:h-[383px] overflow-hidden mb-4"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "width": 0, "height": 0, "src": m.avatar, "alt": m.name, "class": "w-full h-full object-cover hover:rotate-2 hover:scale-105 transition-all ease-in-out duration-500", "format": "webp" })} </div> <div class="text-center md:text-left"> <p class="text-lg font-medium">${m.name}</p> <p class="text-text/60">${m.designation}</p> </div> </div> </div>`)} </div> </div> </div> </div> </section>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/about/Team.astro", void 0);

const $$Astro$1 = createAstro("https://sapick-astro.vercel.app");
const $$Value = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Value;
  const { value } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section pt-0"> <div class="container md:w-3/4 lg:1/2 xl:w-full"> <div class="row justify-center g-5"> <div class="col-12 lg:col-10"> <h2 class="text-center" data-aos="fade-up-sm">${unescapeHTML(markdownify(value.title))}</h2> <p class="text-center xl:w-1/2 mx-auto text-balance" data-aos="fade-up-sm">${unescapeHTML(markdownify(value.content))}</p> </div> <div class="col-12"> <div class="row gy-4 justify-center"> ${value.points.map((p, index) => renderTemplate`<div class="col-12 md:col-6 xl:col-4" data-aos="fade-up-sm"${addAttribute(50 + index * 100, "data-aos-delay")}> <div class="flex flex-col justify-center text-center"> <div class="bg-primary rounded-full p-4 w-fit mx-auto mb-6"> ${renderComponent($$result, "ImageMod", $$ImageMod, { "src": p.image, "alt": "", "width": 32, "height": 32, "format": "svg", "class": "" })} </div> <h4 class="mb-2">${unescapeHTML(markdownify(p.title))}</h4> <p class="text-balance">${unescapeHTML(markdownify(p.content))}</p> </div> </div>`)} </div> </div> </div> </div> </section>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/about/Value.astro", void 0);

const $$Astro = createAstro("https://sapick-astro.vercel.app");
function getStaticPaths() {
  const paths = filteredSupportedLang.map((lang) => ({
    params: { lang: lang || void 0 }
  }));
  return paths;
}
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const { lang } = Astro2.params;
  const aboutIndex = await getListPage("about", lang);
  const { title, meta_title, description, hero, value, experience, team } = aboutIndex[0].data;
  const testimonial = await getSinglePage(
    "testimonialSection",
    lang,
    "testimonial"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "hero": hero })} ${renderComponent($$result2, "Value", $$Value, { "value": value })} ${renderComponent($$result2, "Experience", $$Experience, { "experience": experience })} ${renderComponent($$result2, "Team", $$Team, { "team": team })} ${renderComponent($$result2, "Testimonial", $$Testimonial, { "testimonial": testimonial })} ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/about.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/about.astro";
const $$url = "/[...lang]/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
