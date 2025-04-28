import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../../chunks/astro/server_J33BWFXo.mjs';
import 'kleur/colors';
import { $ as $$Benefits, a as $$Trust } from '../../chunks/Trust_BO00yqFb.mjs';
import { $ as $$Hero } from '../../chunks/Hero_BiQ3ieJ9.mjs';
import { $ as $$More } from '../../chunks/More_BnHW8KA8.mjs';
import { $ as $$Feature } from '../../chunks/Feature_BTRCuyoi.mjs';
import { d as getListPage, $ as $$Base, f as filteredSupportedLang } from '../../chunks/Base_D1Km_fHl.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://sapick-astro.vercel.app");
function getStaticPaths() {
  const paths = filteredSupportedLang.map((lang) => ({
    params: { lang: lang || void 0 }
  }));
  return paths;
}
const $$Strategy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Strategy;
  const { lang } = Astro2.params;
  const featureIndex = await getListPage(
    "features",
    lang
  );
  const { title, meta_title, description, hero, benefit, trust, more } = featureIndex[0].data;
  let feature;
  if (lang === "en") {
    feature = [
      {
        title: "Intuitive Interface",
        content: "Easy to use, even without prior knowledge.",
        icon: "layout",
        images: ["/images/homepage/feature/1.png"],
        features: ["Drag & Drop", "Mobile ready", "Dark mode"],
        button: {
          label: "Learn more",
          link: "/contact"
        }
      },
      {
        title: "Powerful Analytics",
        content: "Keep track of everything with live dashboards.",
        icon: "bar-chart",
        images: ["/images/homepage/feature/2.png"],
        features: ["Live reports", "Export to CSV", "Filtering"],
        button: {
          label: "To analytics",
          link: "/analytics"
        }
      },
      {
        title: "Automations",
        content: "Save time with intelligent automation.",
        icon: "zap",
        images: ["/images/homepage/feature/3.png"],
        features: ["Workflows", "Notifications", "Triggers"],
        button: {
          label: "Automate now",
          link: "/automate"
        }
      }
    ];
  } else {
    feature = [
      {
        title: "Intuitive Benutzeroberfl\xE4che",
        content: "Einfach zu bedienen, auch ohne Vorkenntnisse.",
        icon: "layout",
        images: ["/images/homepage/feature/1.png"],
        features: ["Drag & Drop", "Mobile ready", "Dunkelmodus"],
        button: {
          label: "Mehr erfahren",
          link: "/kontakt"
        }
      },
      {
        title: "Leistungsstarke Analyse",
        content: "Behalte alles im Blick \u2013 mit Live-Dashboards.",
        icon: "bar-chart",
        images: ["/images/homepage/feature/2.png"],
        features: ["Live-Reports", "Export als CSV", "Filterfunktionen"],
        button: {
          label: "Zur Analyse",
          link: "/analytics"
        }
      },
      {
        title: "Automatisierungen",
        content: "Spare Zeit durch intelligente Automatisierung.",
        icon: "zap",
        images: ["/images/homepage/feature/3.png"],
        features: ["Workflows", "Benachrichtigungen", "Trigger"],
        button: {
          label: "Automatisieren",
          link: "/automate"
        }
      }
    ];
  }
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title, "description": description }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "hero": hero })} ${renderComponent($$result2, "Benefits", $$Benefits, { "benefit": benefit })} ${renderComponent($$result2, "Feature", $$Feature, { "feature": feature })} ${renderComponent($$result2, "Trust", $$Trust, { "trust": trust })} ${renderComponent($$result2, "More", $$More, { "more": more })} ` })}`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/strategy.astro", void 0);

const $$file = "/Users/lukasz/Desktop/Untitled/odgxagency/src/pages/[...lang]/strategy.astro";
const $$url = "/[...lang]/strategy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Strategy,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
