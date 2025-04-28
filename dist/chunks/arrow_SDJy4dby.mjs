const arrow = new Proxy({"src":"/_astro/arrow.tklv6Hd8.svg","width":54,"height":183,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/features/arrow.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/features/arrow.svg");
							return target[name];
						}
					});

export { arrow as default };
