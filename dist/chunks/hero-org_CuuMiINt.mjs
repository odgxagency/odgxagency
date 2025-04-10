const heroOrg = new Proxy({"src":"/_astro/hero-org.CGy7HJ-U.png","width":708,"height":485,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/homepage/hero-org.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/homepage/hero-org.png");
							return target[name];
						}
					});

export { heroOrg as default };
