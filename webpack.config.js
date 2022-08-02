const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  entry: { index: "./src/index.js" },
  plugins: [
    new HtmlWebpackPlugin({
      title: "vanillaJS app",
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  output: {
    filename: "[name].[contenthash].bundle.js", // <--- small change
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: 1,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
      },
    ],
  },
  mode: "production",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    watchContentBase: true,
  },
};

module.exports = webpackConfig;
