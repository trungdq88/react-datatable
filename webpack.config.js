var webpack = require('webpack');
var path = require('path');
var buildDir = './build';

var config = {
  context: path.join(__dirname, 'src'),
  cache: true,
  debug: true,
  target: 'web',
  devtool: 'inline-source-map',
  entry: {
    demo: ['./demo.js']
  },
  output: {
    path: path.resolve(buildDir),
    publicPath: '/',
    filename: 'index.js',
    pathinfo: false
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel-loader?optional[]=runtime&stage=0&plugins=rewire']
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },
  devServer: {
    contentBase: path.resolve(buildDir),
    headers: { "Access-Control-Allow-Origin": "*" },
    hot: true,
    noInfo: false,
    inline: true,
    stats: { colors: true }
  }
};

module.exports = config;