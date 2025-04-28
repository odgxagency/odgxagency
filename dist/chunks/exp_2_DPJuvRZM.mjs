const exp_2 = new Proxy({"src":"/_astro/exp_2.D4_3wkkV.png","width":405,"height":619,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/about/exp_2.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/about/exp_2.png");
							return target[name];
						}
					});

export { exp_2 as default };
