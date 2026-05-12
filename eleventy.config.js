import path from "node:path";
import * as sass from "sass";

export default async function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy({"public": "./"});
  // Compile scss to css
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",

    // opt-out of Eleventy Layouts
    useLayouts: false,

    compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      // Don’t compile file names that start with an underscore
      if(parsed.name.startsWith("_")) {
        return;
      }

      let result = sass.compileString(inputContent, {
        loadPaths: [
          parsed.dir || ".",
          this.config.dir.includes,
        ]
      });

      // Map dependencies for incremental builds
      this.addDependencies(inputPath, result.loadedUrls);

      return async (data) => {
        return result.css;
      };
    },
  });
};

export const config = {
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
