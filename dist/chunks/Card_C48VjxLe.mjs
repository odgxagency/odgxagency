import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, f as renderSlot, b as renderTemplate } from './astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`rounded-[2rem] relative overflow-hidden ${className}`, "class")}> <img src="/images/card-pattern-1.png" alt="pattern" class="absolute bottom-0 left-0 w-1/3"${addAttribute(0, "width")}${addAttribute(0, "height")}> <img src="/images/card-pattern-2.png" alt="pattern" class="absolute top-0 right-[-9%] w-1/3"${addAttribute(0, "width")}${addAttribute(0, "height")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/Card.astro", void 0);

export { $$Card as $ };
