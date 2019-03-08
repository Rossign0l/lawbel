const glob = require("glob");
const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const getNameFromDir = dir => {
  const lastSlash = dir.lastIndexOf("/");
  return dir.slice(lastSlash + 1);
};

const generateHTMLPlugins = () =>
  glob.sync("./src/**/*.html").map(
    dir =>
      new HTMLWebpackPlugin({
        filename: getNameFromDir(dir),
        template: dir,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeEmptyAttributes: true
        }
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
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["env"]
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
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
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: path.resolve(__dirname, "postcss.config.js")
              }
            }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
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
    ...generateHTMLPlugins()
  ],
  stats: {
    colors: true
  },
  devtool: "source-map"
};
