import { jsx } from 'react/jsx-runtime';
import 'react';
import * as FaIcons from 'react-icons/fa6';

const iconLibraries = {
  fa: FaIcons
};
const DynamicIcon = ({ icon, ...props }) => {
  const IconLibrary = getIconLibrary(icon);
  const Icon = IconLibrary ? IconLibrary[icon] : void 0;
  if (!Icon) {
    return /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Icon not found" });
  }
  return /* @__PURE__ */ jsx(Icon, { ...props });
};
const getIconLibrary = (icon) => {
  const libraryKey = icon.substring(0, 2).toLowerCase();
  return iconLibraries[libraryKey];
};

export { DynamicIcon as D };
