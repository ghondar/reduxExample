var webpack = require('webpack');
var path = require('path');

var port = process.env.HOT_LOAD_PORT || 8888;

module.exports = {
  devtool: 'eval',
  cache: true,
  resolve: {
    alias: {
      'redux-devtools/lib': path.join(__dirname, 'node_modules', 'redux-devtools', 'lib'),
      'redux-devtools': path.join(__dirname, 'node_modules', 'redux-devtools', 'lib'),
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js', '.jsx', '.json']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/dev-server',
    './src/js/app.jsx'
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'client.js',
    publicPath: 'http://localhost:'+ port +'/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test:  /\.jsx$/,
      loaders: ['react-hot', 'babel-loader?stage=0'],
      exclude: /node_modules/
    },{
      test: /\.json$/,
      loader: 'json-loader'
    },{
      test:  /\.js$/,
      loader: 'babel-loader?stage=0',
      include: path.join(__dirname, 'src', 'js')
    }]
  }
}