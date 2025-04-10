const cardPattern2 = new Proxy({"src":"/_astro/card-pattern-2.CSpS8iv5.png","width":364,"height":494,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/card-pattern-2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/card-pattern-2.png");
							return target[name];
						}
					});

export { cardPattern2 as default };
