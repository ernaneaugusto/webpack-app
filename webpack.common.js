const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/static/ts/app.ts",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./static/css/style.css",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(s(a|c)ss)$/,
        include: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "./src/static/scss"),
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "./dist",
            },
          },
          // Creates `style` nodes from JS strings
          // "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin({}),
      new UglifyjsWebpackPlugin({
        cache: true,
        parallel: true,
      }),
    ],
  },
};
