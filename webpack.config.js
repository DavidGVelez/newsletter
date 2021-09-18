const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      // ... other rules omitted

      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        loader: "sass-loader",
        options: {
          // you can also read from a file, e.g. `variables.scss`
          // use `prependData` here if sass-loader version = 8, or
          // `data` if sass-loader version < 8
          additionalData: `@import "~@/assets/scss/base.scss";`,
        },
      },
    ],
  },
};
