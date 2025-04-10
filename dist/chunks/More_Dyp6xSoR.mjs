import { c as createAstro, a as createComponent, m as maybeRenderHead, u as unescapeHTML, d as addAttribute, r as renderComponent, b as renderTemplate } from './astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { D as DynamicIcon } from './DynamicIcon_Cg6y2Pko.mjs';
import { m as markdownify } from './Base_KJslVqZp.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
const $$More = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$More;
  const { more } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container md:w-3/4 lg:1/2 xl:w-full"> <div class="row g-5 justify-center"> <div class="col-12 lg:col-10"> <h2 class="text-center mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(more.title))}</h2> <p class="text-center text-lg" data-aos="fade-up-sm">${unescapeHTML(markdownify(more.content))}</p> </div> <div class="col-12"> <div class="row g-4 justify-center xl:justify-between items-center"> ${more.points.map((p, i) => renderTemplate`<div class="col-12 md:col-6 xl:col-3" data-aos="fade-up-sm"${addAttribute(50 + i * 100, "data-aos-delay")}> <div class="flex flex-col items-center"> ${renderComponent($$result, "DynamicIcon", DynamicIcon, { "icon": p.icon, "className": "mb-6 text-primary text-5xl", "data-aos": "zoom-in-sm", "data-aos-delay": 50 + i * 50 })} <p class="text-center text-xl font-medium" data-aos="fade-up-sm"${addAttribute(50 + i * 50, "data-aos-delay")}>${unescapeHTML(markdownify(p.details))}</p> </div> </div>`)} </div> </div> </div> </div> </section>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/features/More.astro", void 0);

export { $$More as $ };
