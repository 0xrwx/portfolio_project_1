var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist/'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          sources: {
            urlFilter: (attribute, value, resourcePath) => {
              if (/index.js$/.test(value)) return false;
              return true;
            },
          }
        },
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'postcss-loader',
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        type: 'asset',
        use: [{
          loader: 'image-webpack-loader',
          options: {
            pngquant: {
              quality: [.90, .95],
            },
          }
        }],
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10kb
          }
        },
        generator: {
          filename: 'images/[name]-[hash][ext]'
        }
    }
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    },
    open: true,
    compress: true,

  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
}