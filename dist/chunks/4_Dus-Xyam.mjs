const _4 = new Proxy({"src":"/_astro/4.BCS5-92d.png","width":145,"height":145,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/avatar/4.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/avatar/4.png");
							return target[name];
						}
					});

export { _4 as default };
