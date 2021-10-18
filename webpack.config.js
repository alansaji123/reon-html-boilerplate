require("dotenv").config();
const path = require("path");

module.exports = {
  entry: {
    vendor: "./src/vendor.js",
    main: "./src/index.js",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(svg|png|jpg|jpeg|webp|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[hash][ext]",
        },
      },
      {
        test: /\.html$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
        exclude: path.resolve(__dirname, "src/index.html"),
      },
    ],
  },
};
