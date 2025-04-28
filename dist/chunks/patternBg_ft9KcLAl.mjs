const patternBg = new Proxy({"src":"/_astro/patternBg.DJZ-q-UB.png","width":2048,"height":1995,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/homepage/patternBg.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/homepage/patternBg.png");
							return target[name];
						}
					});

export { patternBg as default };
