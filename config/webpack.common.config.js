module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
            ],
          },
        },
      },
      {
        loader: 'source-map-loader',
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
      },
    ],
  },
  output: {
    filename: '[name]/index.js',
  },
}
