import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, r as renderComponent, b as renderTemplate } from './astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { $ as $$TitleBg } from './TitleBg_D_5QumXG.mjs';
import { g as getLangFromUrl, m as markdownify } from './Base_D1Km_fHl.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  const { hero, titleBg = true } = Astro2.props;
  const lang = getLangFromUrl(Astro2.url);
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-hidden"> <section class="section pb-0"${addAttribute({
    background: !titleBg ? "linear-gradient(rgb(249, 249, 249) 0%, rgb(255, 255, 255) 36%)" : "none"
  }, "style")}> <div class="container md:w-3/4 lg:1/2 xl:w-full"> <div class="row justify-center mb-14"> <div class="col-12 lg:col-10"> <p class="text-center page-title mb-6" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.title))}</p> <div class="w-2/3 mx-auto text-center"> <p class="text-xl" data-aos="fade-up-sm">${unescapeHTML(markdownify(hero.content))}</p> </div> </div> </div> ${renderComponent($$result, "Feature", null, { "features": hero.features, "lang": lang, "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/features/Feature", "client:component-export": "default" })} </div> </section> ${titleBg && renderTemplate`${renderComponent($$result, "TitleBg", $$TitleBg, {})}`} </div>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/features/Hero.astro", void 0);

export { $$Hero as $ };
