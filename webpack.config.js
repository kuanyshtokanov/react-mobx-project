var path = require('path')
var webpack = require('webpack')
module.exports = {
  entry: [
    './components/index'
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: ['babel'],
      query:
      {
        presets: ['es2015', 'react'],
        plugins: ['transform-decorators-legacy', 'transform-class-properties']
      },
      include: path.join(__dirname, 'components')
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.COSMIC_BUCKET': JSON.stringify(process.env.COSMIC_BUCKET)
    })
  ]
}
