module.exports = {
  entry: __dirname + '/src/index.jsx',
  module: {
    loaders: [
      {
        test: /.jsx$/,
        loader: 'babel',
        exclude: '/node_modules/'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
