const logoodgx = new Proxy({"src":"/_astro/logoodgx.M4tI3Ou6.svg","width":145,"height":65,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/logoodgx.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/logoodgx.svg");
							return target[name];
						}
					});

export { logoodgx as default };
