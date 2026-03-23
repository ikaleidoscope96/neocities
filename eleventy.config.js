module.exports = function(eleventyConfig) {
	return {
		// Set directroty paths
		dir: {
			input: "src",
			includes: "../_includes",
			data: "../_data",
		},

		// Set njk as default template language for hmtl and md
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",

		// Specify template formats to transform
		templateFormats: [ "html", "md", "njk", ],
	};
}
