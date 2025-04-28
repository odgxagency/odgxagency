import { c as createAstro, a as createComponent, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, b as renderTemplate, r as renderComponent, F as Fragment, u as unescapeHTML } from './astro/server_J33BWFXo.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';

const icons = {"local":{"prefix":"local","lastModified":1745829237,"icons":{"arrow-right":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 12h14m-7-7 7 7-7 7\"/>"},"box":{"body":"<mask id=\"a\" width=\"70\" height=\"70\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:alpha\"><path stroke=\"#171A1F\" stroke-linejoin=\"round\" stroke-width=\"3\" d=\"M58.333 20.417 34.999 8.75 11.666 20.417m46.667 0L34.999 32.083m23.334-11.666v29.166L34.999 61.25m0-29.167L11.666 20.417m23.333 11.666V61.25M11.666 20.417v29.166L34.999 61.25\"/></mask><g fill=\"none\"><path stroke=\"#171A1F\" stroke-linejoin=\"round\" stroke-width=\"3\" d=\"M58.333 20.417 34.999 8.75 11.666 20.417m46.667 0L34.999 32.083m23.334-11.666v29.166L34.999 61.25m0-29.167L11.666 20.417m23.333 11.666V61.25M11.666 20.417v29.166L34.999 61.25\"/><g mask=\"url(#a)\"><path fill=\"#139D49\" d=\"M4.203 3.506h63v63h-63z\"/></g></g>","width":70,"height":70},"check":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" color=\"var(--token-504d38b9-9742-4e88-a283-023d9aed1933, rgb(19, 157, 73))\"><path d=\"m7 12.5 3 3 7-7\"/><path d=\"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10\"/></g>"},"database":{"body":"<mask id=\"a\" width=\"70\" height=\"70\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:alpha\"><path stroke=\"#171A1F\" stroke-width=\"3\" d=\"M11.666 20.417v29.166c0 6.444 10.447 11.667 23.333 11.667 12.887 0 23.334-5.223 23.334-11.667V20.417m-46.667 0c0 6.443 10.447 11.666 23.333 11.666 12.887 0 23.334-5.223 23.334-11.666m-46.667 0c0-6.444 10.447-11.667 23.333-11.667 12.887 0 23.334 5.223 23.334 11.667m0 14.583c0 6.443-10.447 11.667-23.334 11.667-12.886 0-23.333-5.224-23.333-11.667\"/></mask><g fill=\"none\"><path stroke=\"#171A1F\" stroke-width=\"3\" d=\"M11.666 20.417v29.166c0 6.444 10.447 11.667 23.333 11.667 12.887 0 23.334-5.223 23.334-11.667V20.417m-46.667 0c0 6.443 10.447 11.666 23.333 11.666 12.887 0 23.334-5.223 23.334-11.666m-46.667 0c0-6.444 10.447-11.667 23.333-11.667 12.887 0 23.334 5.223 23.334 11.667m0 14.583c0 6.443-10.447 11.667-23.334 11.667-12.886 0-23.333-5.224-23.333-11.667\"/><g mask=\"url(#a)\"><path fill=\"#139D49\" d=\"M4.203 3.506h63v63h-63z\"/></g></g>","width":70,"height":70},"display":{"body":"<mask id=\"a\" width=\"70\" height=\"70\" x=\"0\" y=\"0\" maskUnits=\"userSpaceOnUse\" style=\"mask-type:alpha\"><path stroke=\"#171A1F\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" d=\"m28.438 49.583-2.188 8.75-2.917 2.917h23.334l-2.917-2.917-2.188-8.75M8.75 37.917h52.5M14.583 49.583h40.834a5.833 5.833 0 0 0 5.833-5.833V14.583a5.833 5.833 0 0 0-5.833-5.833H14.583a5.833 5.833 0 0 0-5.833 5.833V43.75a5.833 5.833 0 0 0 5.833 5.833\"/></mask><g fill=\"none\"><path stroke=\"#171A1F\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"3\" d=\"m28.438 49.583-2.188 8.75-2.917 2.917h23.334l-2.917-2.917-2.188-8.75M8.75 37.917h52.5M14.583 49.583h40.834a5.833 5.833 0 0 0 5.833-5.833V14.583a5.833 5.833 0 0 0-5.833-5.833H14.583a5.833 5.833 0 0 0-5.833 5.833V43.75a5.833 5.833 0 0 0 5.833 5.833\"/><g mask=\"url(#a)\"><path fill=\"#139D49\" d=\"M4.203 3.506h63v63h-63z\"/></g></g>","width":70,"height":70},"help":{"body":"<g fill=\"none\" stroke=\"var(--token-01803eae-6bb5-4aa5-a87b-4b780f3b6fb0, rgb(59, 59, 59))\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01\"/></g>"},"minus":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" d=\"M6 12h12\" color=\"var(--token-01803eae-6bb5-4aa5-a87b-4b780f3b6fb0, rgb(59, 59, 59))\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro("https://sapick-astro.vercel.app");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/Users/lukasz/Desktop/Untitled/odgxagency/node_modules/astro-icon/components/Icon.astro", void 0);

export { $$Icon as $ };
