import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent, F as Fragment } from '../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { $ as $$Faq } from '../../chunks/Faq_BSkzWSoi.mjs';
import { $ as $$More } from '../../chunks/More_Dyp6xSoR.mjs';
import { g as getLangFromUrl, s as slugSelector, d as getListPage, e as getSinglePage, $ as $$Base, f as filteredSupportedLang } from '../../chunks/Base_KJslVqZp.mjs';
import { $ as $$Icon } from '../../chunks/Icon_RZ146u-B.mjs';
import { MdSubdirectoryArrowRight } from 'react-icons/md';
/* empty css                                      */
import { $ as $$TestimonialSlider } from '../../chunks/TestimonialSlider_CCWeleNX.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://sapick-astro.vercel.app");
const $$Compare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Compare;
  const { title, subtitle, plans, categories } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<section class="section pt-0" data-astro-cid-46y5tgr3> <div class="container md:w-11/12 xl:w-full" data-astro-cid-46y5tgr3> <div class="text-center mb-8" data-aos="fade-up-sm" data-astro-cid-46y5tgr3> <h2 class="mb-2" data-astro-cid-46y5tgr3>${title}</h2> <p class="text-text-gray-600" data-astro-cid-46y5tgr3>${subtitle}</p> </div> <div class="hidden lg:block overflow-x-auto" data-astro-cid-46y5tgr3> <table class="w-full border-collapse overflow-hidden" data-astro-cid-46y5tgr3> <thead data-astro-cid-46y5tgr3> <tr data-astro-cid-46y5tgr3> <th class="p-4 text-left font-medium text-text-gray-500" data-astro-cid-46y5tgr3></th> ${plans.map((plan, index) => renderTemplate`<th class="p-4 text-center font-bold" data-aos="fade-up-sm"${addAttribute(50 + index * 50, "data-aos-delay")} data-astro-cid-46y5tgr3> ${plan.name} </th>`)} </tr> </thead> <tbody data-astro-cid-46y5tgr3> ${categories.map((category, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-46y5tgr3": true }, { "default": ($$result2) => renderTemplate` <tr class="!mt-10 first:!mt-0 float-start" data-astro-cid-46y5tgr3> <td${addAttribute(plans.length + 1, "colspan")} class="p-4 font-bold text-primary" data-aos="fade-up-sm"${addAttribute(50 + index * 50, "data-aos-delay")} data-astro-cid-46y5tgr3> ${category.name} </td> </tr> ${category.features.map((feature, featureIndex) => renderTemplate`<tr class="hover:bg-slate-50 odd:bg-slate-50" data-aos="fade-up-sm"${addAttribute(50 + featureIndex * 50, "data-aos-delay")} data-astro-cid-46y5tgr3> <td class="p-4 text-left" data-astro-cid-46y5tgr3> <div class="flex items-center gap-2" data-astro-cid-46y5tgr3> <span class="text-sm text-text-gray-900" data-astro-cid-46y5tgr3> ${feature.name} </span> ${feature.tooltip && renderTemplate`<div class="group relative" data-astro-cid-46y5tgr3> ${renderComponent($$result2, "Icon", $$Icon, { "name": "help", "class": "w-4 h-4 text-text-gray-400", "data-astro-cid-46y5tgr3": true })} <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-46y5tgr3>
More information about ${feature.name} <div class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-text-gray-900" data-astro-cid-46y5tgr3></div> </div> </div>`} </div> </td> ${feature.values.map((value, valueIndex) => renderTemplate`<td class="p-4 text-center" data-aos="zoom-in-sm"${addAttribute(50 + valueIndex * 50, "data-aos-delay")} data-astro-cid-46y5tgr3> ${typeof value === "boolean" ? value ? renderTemplate`<span class="text-green-500" data-astro-cid-46y5tgr3> ${renderComponent($$result2, "Icon", $$Icon, { "name": "check", "class": "w-5 h-5 mx-auto", "data-astro-cid-46y5tgr3": true })} </span>` : renderTemplate`<span class="text-text-gray-300" data-astro-cid-46y5tgr3> ${renderComponent($$result2, "Icon", $$Icon, { "name": "minus", "class": "w-5 h-5 mx-auto", "data-astro-cid-46y5tgr3": true })} </span>` : renderTemplate`<span class="text-sm text-text-gray-900" data-astro-cid-46y5tgr3> ${value} </span>`} </td>`)} </tr>`)}` })}`)} </tbody> <tfoot data-astro-cid-46y5tgr3> <tr data-astro-cid-46y5tgr3> <td class="p-4 text-left font-medium text-text-gray-500" data-astro-cid-46y5tgr3></td> ${plans.map((_, index) => renderTemplate`<td data-astro-cid-46y5tgr3> <a${addAttribute(slugSelector("/contact", lang), "href")} class="btn btn-primary flex items-center w-fit mx-auto justify-center mt-14" data-aos="fade-up-sm"${addAttribute(50 + index * 100, "data-aos-delay")} data-astro-cid-46y5tgr3> <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-astro-cid-46y5tgr3> <path d="m15 10 5 5-5 5" data-astro-cid-46y5tgr3></path> <path d="M4 4v7a4 4 0 0 0 4 4h12" data-astro-cid-46y5tgr3></path> </svg>${" "}
Select This Plan
</a> </td>`)} </tr> </tfoot> </table> </div> <!-- Mobile View --> <div class="lg:hidden space-y-8" data-astro-cid-46y5tgr3> ${plans.map((plan, planIndex) => renderTemplate`<div class="rounded-lg" data-aos="fade-up-sm"${addAttribute(50 + planIndex * 100, "data-aos-delay")} data-astro-cid-46y5tgr3> <div class="pt-6" data-astro-cid-46y5tgr3> <h3 class="text-2xl font-bold text-center mb-2" data-astro-cid-46y5tgr3>${plan.name}</h3> </div> ${categories.map((category) => renderTemplate`<div class="py-6" data-aos="fade-up-sm" data-astro-cid-46y5tgr3> <h4 class="font-bold text-primary mb-4" data-astro-cid-46y5tgr3>${category.name}</h4> <div class="" data-astro-cid-46y5tgr3> ${category.features.map((feature) => renderTemplate`<div class="odd:bg-slate-50 flex items-center justify-between px-6 py-5" data-aos="fade-up-sm" data-astro-cid-46y5tgr3> <div class="flex items-center gap-2" data-astro-cid-46y5tgr3> <span class="text-sm text-text-gray-900" data-astro-cid-46y5tgr3> ${feature.name} </span> ${feature.tooltip && renderTemplate`<div class="group relative" data-astro-cid-46y5tgr3> ${renderComponent($$result, "Icon", $$Icon, { "name": "help", "class": "w-4 h-4 text-text-gray-400", "data-astro-cid-46y5tgr3": true })} <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" data-astro-cid-46y5tgr3>
More information about ${feature.name} <div class="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-slate-900" data-astro-cid-46y5tgr3></div> </div> </div>`} </div> <div data-astro-cid-46y5tgr3> ${typeof feature.values[planIndex] === "boolean" ? feature.values[planIndex] ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "check", "class": "w-5 h-5 mx-auto", "data-astro-cid-46y5tgr3": true })}` : renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "minus", "class": "w-5 h-5 mx-auto", "data-astro-cid-46y5tgr3": true })}` : renderTemplate`<span class="text-sm text-text-gray-900" data-astro-cid-46y5tgr3> ${feature.values[planIndex]} </span>`} </div> </div>`)} </div> </div>`)} <a${addAttribute(slugSelector("/contact", lang), "href")} class="btn btn-primary flex items-center w-fit mx-auto justify-center" data-aos="fade-up-sm" data-astro-cid-46y5tgr3> ${renderComponent($$result, "MdSubdirectoryArrowRight", MdSubdirectoryArrowRight, { "className": "mr-3", "data-astro-cid-46y5tgr3": true })} Select ${plan.name} </a> </div>`)} </div> </div> </section> `;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/pricing/Compare.astro", void 0);

const $$Astro = createAstro("https://sapick-astro.vercel.app");
function getStaticPaths() {
  const paths = filteredSupportedLang.map((lang) => ({
    params: { lang: lang || void 0 }
  }));
  return paths;
}
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const { lang } = Astro2.params;
  const language = lang || getLangFromUrl(Astro2.url);
  const pricingIndex = await getListPage(
    "pricing",
    lang
  );
  const { title, meta_title, description, pricing_plans } = pricingIndex[0].data;
  const plan = (await getSinglePage("planSection", lang, "plan"))[0];
  const featureIndex = await getListPage(
    "features",
    lang
  );
  const { more } = featureIndex[0].data;
  const testimonial = await getSinglePage(
    "testimonialSection",
    lang,
    "testimonial"
  );
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Plan", null, { "plan": plan, "lang": language, "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/pricing/Plan", "client:component-export": "default" })} ${renderComponent($$result2, "More", $$More, { "more": more })} ${renderComponent($$result2, "Compare", $$Compare, { "title": pricing_plans.title, "subtitle": pricing_plans.subtitle, "plans": pricing_plans.plans, "categories": pricing_plans.categories })} ${renderComponent($$result2, "TestimonialSlider", $$TestimonialSlider, { "testimonial": testimonial })} ${renderComponent($$result2, "Faq", $$Faq, {})} ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/pricing.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/pricing.astro";
const $$url = "/[...lang]/pricing";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
