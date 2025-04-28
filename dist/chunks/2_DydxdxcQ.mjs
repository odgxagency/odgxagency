const _2 = new Proxy({"src":"/_astro/2.D0NkIiUG.png","width":1263,"height":357,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/homepage/2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/homepage/2.png");
							return target[name];
						}
					});

export { _2 as default };
