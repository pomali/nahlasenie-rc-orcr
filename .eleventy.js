module.exports = function (eleventyConfig) {
  require("dotenv").config();
  eleventyConfig.addGlobalData("env", process.env);

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
