const value_3 = new Proxy({"src":"/_astro/value_3.mvdx2Azm.svg","width":32,"height":33,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/about/value_3.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/about/value_3.svg");
							return target[name];
						}
					});

export { value_3 as default };
