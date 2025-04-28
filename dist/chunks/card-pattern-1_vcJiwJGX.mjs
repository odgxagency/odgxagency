const cardPattern1 = new Proxy({"src":"/_astro/card-pattern-1.Csqoj6qe.png","width":292,"height":292,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/card-pattern-1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/card-pattern-1.png");
							return target[name];
						}
					});

export { cardPattern1 as default };
