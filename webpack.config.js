const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
<<<<<<< HEAD
    rules: [{
=======
    rules: [
      {
>>>>>>> adding travis and coveralls badge
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
<<<<<<< HEAD
        use: [{
          loader: "html-loader"
        }]
      },
      {
        test: /\.(css|scss)$/,
        use: [{
=======
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
>>>>>>> adding travis and coveralls badge
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
<<<<<<< HEAD
        use: [{
          loader: "svg-url-loader",
          options: {
            limit: 10000
          }
        }]
=======
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000
            }
          }
        ]
>>>>>>> adding travis and coveralls badge
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
<<<<<<< HEAD
};
=======
};
>>>>>>> adding travis and coveralls badge
