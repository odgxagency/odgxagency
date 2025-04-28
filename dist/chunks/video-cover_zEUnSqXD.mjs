const videoCover = new Proxy({"src":"/_astro/video-cover.DovpCV5K.png","width":2048,"height":1183,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/lukasz/Desktop/Untitled/odgxagency/public/images/homepage/video/video-cover.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/lukasz/Desktop/Untitled/odgxagency/public/images/homepage/video/video-cover.png");
							return target[name];
						}
					});

export { videoCover as default };
