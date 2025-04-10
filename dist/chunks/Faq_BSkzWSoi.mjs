import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, r as renderComponent, e as renderScript, b as renderTemplate } from './astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, e as getSinglePage, m as markdownify, s as slugSelector, B as Button } from './Base_KJslVqZp.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
const $$Faq = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Faq;
  const { className } = Astro2.props;
  let lang = getLangFromUrl(Astro2.url);
  const faqIndex = await getSinglePage(
    "faqSection",
    lang,
    "faq"
  );
  const { title_1, title_2, faqs, contact } = faqIndex[0].data;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${className} section relative overflow-hidden`, "class")}> <div class="container"> <div class="row justify-center"> <div class="col-12 mb-14"> <h2 class="mb-2 text-center" data-aos="fade-up-sm">${unescapeHTML(markdownify(title_1))}</h2> <h2 class="text-center" data-aos="fade-up-sm">${unescapeHTML(markdownify(title_2))}</h2> </div> <div class="col-12 lg:col-9 xl:col-10 mb-14"> <div class="accordion-container"> ${faqs.map((f, index) => renderTemplate`<div${addAttribute("accordion" + (index === 0 ? " active" : ""), "class")} data-aos="fade-up-sm"${addAttribute(50 + index * 100, "data-aos-delay")}> <button class="accordion-header" data-accordion> <span>${unescapeHTML(markdownify(f.question))}</span> <svg class="accordion-icon" xmlns="http://www.w3.org/2000/svg" fill="none"> <path fill="#101010" d="m11 0 1.556 9.444L22 11l-9.444 1.556L11 22l-1.556-9.444L0 11l9.444-1.556z" opacity=".5"></path> </svg> </button> <div class="accordion-content"> <p>${f.answer}</p> </div> </div>`)} </div> </div> <div class="col-12"> <div class="flex justify-center items-center flex-col md:flex-row gap-6"> <p class="text-lg text-center">${unescapeHTML(markdownify(contact.title))}</p> ${renderComponent($$result, "Button", Button, { "link": slugSelector(contact.button.link, lang), "label": contact.button.label })} </div> </div> </div> <!-- gradient background --> <div class="aspect-[2.433/1] w-[51%] h-[300px] absolute left-1/2 top-[194px] -translate-x-1/2 opacity-15 overflow-visible -z-10" style="transform: translateX(-50%) rotate(-141deg);"> <!-- Violet blob --> <div class="absolute left-[329px] -top-[296px] -bottom-[756px] w-[305px] rounded-full bg-[#a5a2ff] blur-[162px]" style="transform: rotate(-80deg); animation: move-blob 10s infinite ease-in-out;"></div> <!-- Green blob --> <div class="absolute left-[200px] top-[200px] w-[41%] h-[521px] rounded-full bg-[#29c775] blur-[162px]" style="transform: rotate(100deg); animation: move-blob 10s infinite ease-in-out 2s;"></div> <!-- Yellow blob --> <div class="absolute -right-[40px] -top-[160px] w-[49%] h-[625px] rounded-full bg-[#ffe74b] blur-[162px]" style="transform: rotate(-80deg); animation: move-blob 10s infinite ease-in-out 4s;"></div> </div> </div> ${renderScript($$result, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/Faq.astro?astro&type=script&index=0&lang.ts")} </section>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/Faq.astro", void 0);

export { $$Faq as $ };
