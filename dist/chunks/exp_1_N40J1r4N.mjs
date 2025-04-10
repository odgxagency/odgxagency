const exp_1 = new Proxy({"src":"/_astro/exp_1.BCLjkQPj.png","width":512,"height":439,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/about/exp_1.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/about/exp_1.png");
							return target[name];
						}
					});

export { exp_1 as default };
