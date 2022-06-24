const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  require("dotenv").config();
  eleventyConfig.addGlobalData("env", process.env);
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy({
    "node_modules/govuk-frontend/govuk/assets/images": "assets/images",
    "node_modules/govuk-frontend/govuk/assets/fonts": "assets/fonts",
    "node-modules/govuk-frontend/govuk/*.js": "js/",
  });

  // Set custom directories for input, output, includes, and data
  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
  };
};
