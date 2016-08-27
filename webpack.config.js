module.exports = {
  entry: __dirname + '/src/index.jsx',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /.json$/,
        loader: 'json',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: 'src',
    historyApiFallback: true
  }
}
