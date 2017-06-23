var isProduction = process.argv.indexOf('-p') !== -1;
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

var appConfig = {
  context: __dirname,
  devtool: "inline-sourcemap",
  entry: {
    app: "./src/index.ts",
    vendor: "./src/vendor.ts"
  },
  output: {
    path: __dirname + "/dist",
    filename: "./angular-pattern-library.js"
  },
  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'baggage?[file].html&[file].css',
      exclude: /index\.html/
    }],
    loaders: [{
        test: /\.ts$/,
        loader: 'awesome-typescript-loader!tslint'
      },
      {
        test: /\.html$/,
        loader: 'ngtemplate?relativeTo=' + __dirname + '!html',
        exclude: /index\.html/
      },
      {
        test: /\.scss$|\.css$/,
        loader: ExtractTextPlugin.extract('style', ['css', 'postcss', 'sass']),
      },
      {
        test: /\.svg$/,
        loader: 'raw-loader'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.woff$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  postcss() {
    return [autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.ts']
  },
  devServer: {
    port: 8000,
    historyApiFallback: true
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js"),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ExtractTextPlugin('./style.css', {
      allChunks: true
    })
  ]
};

// production configurations
if (isProduction || process.env.NODE_ENV === 'production') {
  appConfig.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourcemap: false
    })
  );
  appConfig.devtool = null;
}

// build
module.exports = [appConfig];