const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");

const pages = [
  "index",
  "debt",
  "representation",
  "documents",
  "service",
  "agency",
  "bankruptcy",
  "consultation",
  "claim",
  "lawsuit",
  "negotiation",
  "mediation",
  "agreement",
  "self"
];

const generateHTMLPlugins = pages =>
  pages.map(
    page =>
      new HtmlWebpackPlugin({
        filename: `${page}.html`,
        template: `./src/pages/${page}.html`,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeEmptyAttributes: true
        },
        page: page
      })
  );

module.exports = {
  node: {
    fs: "empty"
  },
  entry: ["./src/js/app.js", "./src/style/main.scss"],
  output: {
    path: path.resolve(process.cwd(), "docs"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "static"
            }
          }
        ]
      },
      {
        test: /\.(sass|scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin([
      {
        from: "./src/static/",
        to: "./static/"
      }
    ]),
    ...generateHTMLPlugins(pages),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer"
    })
  ],
  stats: {
    colors: true
  }
};
