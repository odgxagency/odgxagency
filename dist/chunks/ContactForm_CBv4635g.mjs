import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import 'clsx';
import { a as getTranslations, c as config } from './Base_CCuEFion.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { lang } = Astro2.params;
  const { contact_form_action } = config.params;
  const {
    full_name,
    full_name_placeholder,
    mail,
    mail_placeholder,
    phone,
    phone_placeholder,
    message,
    message_placeholder,
    select,
    select_placeholder,
    select_options,
    submit
  } = await getTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<div class="p-10 rounded-xl bg-light h-full"> <form${addAttribute(contact_form_action, "action")} method="POST"> <div class="mb-4" data-aos="fade-up-sm"> <label for="name" class="form-label"> ${full_name}</label> <input id="name" name="name" class="form-input"${addAttribute(full_name_placeholder, "placeholder")} type="text"> </div> <div class="mb-4 flex items-center gap-2 w-full"> <div class="w-full" data-aos="fade-up-sm"> <label for="email" class="form-label"> ${mail} </label> <input id="email" name="email" class="form-input"${addAttribute(mail_placeholder, "placeholder")} type="email"> </div> <div class="w-full" data-aos="fade-up-sm"> <label for="phone" class="form-label"> ${phone} </label> <input id="phone" name="phone" class="form-input"${addAttribute(phone_placeholder, "placeholder")} type="text"> </div> </div> <div class="mb-4" data-aos="fade-up-sm"> <label for="service" class="form-label"> ${select} </label> <select id="service" name="service" class="form-input"> <option disabled selected> ${select_placeholder} </option> ${select_options.map(
    (option) => renderTemplate`<option${addAttribute(option.value, "value")}> ${option.key} </option>`
  )} </select> </div> <div class="mb-4" data-aos="fade-up-sm"> <label for="message" class="form-label"> ${message} </label> <textarea id="message" name="message" class="form-input"${addAttribute(message_placeholder, "placeholder")} rows="4"></textarea> </div> <button type="submit" class="btn btn-primary" data-aos="fade-up-sm">${submit}</button> </form> </div>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/layouts/components/ContactForm.astro", void 0);

export { $$ContactForm as $ };
