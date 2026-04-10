export default async function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/css");
	eleventyConfig.addPassthroughCopy("./src/js");
	eleventyConfig.addPassthroughCopy({"./public/": "/"});

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
