const _1 = new Proxy({"src":"/_astro/1.CJ-aLkL-.png","width":512,"height":341,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/team/1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/team/1.png");
							return target[name];
						}
					});

export { _1 as default };
