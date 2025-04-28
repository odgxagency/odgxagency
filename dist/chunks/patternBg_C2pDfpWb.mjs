const patternBg = new Proxy({"src":"/_astro/patternBg.Dyi-1iFa.svg","width":1440,"height":697,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/homepage/patternBg.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/homepage/patternBg.svg");
							return target[name];
						}
					});

export { patternBg as default };
