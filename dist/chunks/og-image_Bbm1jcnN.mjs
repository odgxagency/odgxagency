const ogImage = new Proxy({"src":"/_astro/og-image.CeD2NtSW.png","width":1200,"height":900,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/og-image.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/og-image.png");
							return target[name];
						}
					});

export { ogImage as default };
