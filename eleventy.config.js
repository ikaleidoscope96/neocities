import EleventyVitePlugin from "@11ty/eleventy-plugin-vite"
import path from "node:path";

export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addPassthroughCopy("./src/js");
	eleventyConfig.addPassthroughCopy({"./public/": "/"});

	eleventyConfig.addPlugin(EleventyVitePlugin, {
		tempFolderName: ".11ty-vite", // Default name of the temp folder

		// Options passed to the Eleventy Dev Server
		// Defaults
		serverOptions: {
			module: "@11ty/eleventy-dev-server",
			domDiff: false,
		},

		// Defaults
		viteOptions: {
			clearScreen: false,
			appType: "mpa",

			server: {
				middlewareMode: true,
			},

			build: {
				emptyOutDir: true,
			},

			resolve: {
				alias: {
					// Allow references to `node_modules` folder directly
					"/node_modules": path.resolve(".", "node_modules"),
				},
			},
		},
	});

	return {
		// Set directroty paths
		dir: {
			input: "src",
			includes: "../_includes",
			layouts: "../_includes/layouts",
			data: "../_data",
		},

		// Set njk as default template language for hmtl and md
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",

		// Specify template formats to transform
		templateFormats: [ "html", "md", "njk", ],
	};
}
