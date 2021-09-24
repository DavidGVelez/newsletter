const path = require("path");

module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8081,
    public: "localhost:8081",
  },
  publicPath: "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/base.scss";
        `,
      },
    },
  },
};
