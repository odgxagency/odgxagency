import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, d as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { m as markdownify, b as $$ImageMod } from './Base_KJslVqZp.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
const $$TestimonialSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TestimonialSlider;
  const { testimonial } = Astro2.props;
  const { enable, title, reviews } = testimonial[0].data;
  return renderTemplate`${enable && renderTemplate`${maybeRenderHead()}<section class="section"><div class="container md:w-3/4 lg:1/2 xl:w-full"><div class="row"><div class="mx-auto mb-4 text-center" data-aos="fade-up-sm"><h2>${unescapeHTML(markdownify(title))}</h2></div><div class="col-12 p-8"><div class="row border-t border-l border-border">${reviews.map((review, index) => renderTemplate`<div class="col-12 md:col-6 xl:col-4 min-h-full p-0" data-aos="fade-up-sm"${addAttribute(index * 100, "data-aos-delay")}><div class="group h-full p-8 hover:bg-text-gray/5 transform duration-500 border-r border-b border-border">${renderComponent($$result, "ImageMod", $$ImageMod, { "src": review.company, "alt": "company", "class": "mb-7 grayscale group-hover:grayscale-0 transform duration-500 opacity-40 group-hover:opacity-100", "width": 169, "height": 40 })}<p class="mb-7 text-xl before:content-['“'] after:content-['”']">${unescapeHTML(markdownify(review.review))}</p><div class="flex items-center gap-x-3">${renderComponent($$result, "ImageMod", $$ImageMod, { "src": review.author, "alt": "author", "width": 48, "height": 48 })}<div><p class="text-primary font-medium text-lg">${unescapeHTML(markdownify(review.name))}</p><p class="text-text/60 text-sm">${unescapeHTML(markdownify(review.designation))}</p></div></div></div></div>`)}</div></div></div></div></section>`}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/partials/TestimonialSlider.astro", void 0);

export { $$TestimonialSlider as $ };
