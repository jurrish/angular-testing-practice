'use strict';

const ExtractText = require('extract-text-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

//transpiling is taking one language and turning into another language (turns it into the text of that language)

module.exports = {
  //gives us better error messages in the console
  devtool: 'eval',
  //current file's directory = ${__dirname}
  entry: `${__dirname}/app/entry.js`,
  //generates the output filename and the file path
  output: {
    path: `${__dirname}/build`,
    //[hash] is the random unique identifier that is appended to our bundle so it automatically gets set in our <link> tags in the bundle.js output
    filename: 'bundle-[hash].js',
  },
  plugins: [
    new ExtractText('bundle-[hash].css'),
    new HTMLPlugin({template: `${__dirname}/app/index.html`})
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        //transpiles our js into babel readability
        loader: 'babel-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract(['css-loader', 'sass-loader']),
      }
    ],
  },
};
