const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = (env) => {
  console.log(process.env.REACT_APP_API_KEY);
  return {
    entry: {
      index: "./src/index.js",
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "NoteStack",
        template: path.resolve(__dirname, "src", "index.html"),
      }),
      new Dotenv(),
    ],
    // performance: { hints: false },
    output: {
      filename: "[name].[contenthash].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devServer: {
      static: path.resolve(__dirname, "dist"),
      port: 8080,
      open: true,
      hot: true,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
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
              presets: ["@babel/preset-env", "@babel/preset-react"],
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
  };
};
