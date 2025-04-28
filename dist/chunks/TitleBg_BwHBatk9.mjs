import { c as createAstro, a as createComponent, r as renderComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { b as $$ImageMod } from './Base_CCuEFion.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
const $$TitleBg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleBg;
  return renderTemplate`${renderComponent($$result, "ImageMod", $$ImageMod, { "src": "/images/homepage/patternBg.svg", "alt": "pattern", "class": "absolute top-0 left-0 -z-10 object-cover w-[168%] h-full", "width": 0, "height": 0 })} <!-- gradient background --> ${maybeRenderHead()}<div class="absolute w-full lg:w-[71%] aspect-[0.618/1] opacity-20 top-0 lg:-bottom-[36px] right-[14%] -z-10 rotate-[-157deg]"> <!-- purple --> <div${addAttribute(`absolute w-[40%] aspect-[0.325/1] bg-[#a5a2ff] rounded-full ${Astro2.url.pathname === "/" || "/es" ? "blur-[200px]" : "blur-[90px]"}  left-[138px] top-[31px] rotate-12`, "class")}></div> <!-- green --> <div${addAttribute(`absolute w-[40%] aspect-[0.572/1] bg-[#29c775] rounded-full ${Astro2.url.pathname === "/" || "/es" ? "blur-[200px]" : "blur-[90px]"} left-[222px] top-[208px]`, "class")}></div> <!-- yellow --> <div${addAttribute(`absolute w-[40%] aspect-[0.571/1] bg-[#ffe74b] rounded-full ${Astro2.url.pathname === "/" || "/es" ? "blur-[200px]" : "blur-[90px]"} left-[436px] top-[340px]`, "class")}></div> </div> <!-- gradient background -->`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/TitleBg.astro", void 0);

export { $$TitleBg as $ };
