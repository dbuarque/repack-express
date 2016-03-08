

module.exports = {
  entry: './app/components/App.js',
  output: {
  	path: './build',
    filename: 'bundle.js'       
  },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: [ '', '.js', '.jsx', '.scss', '.json', '.node' ]
    },
  module: {
    loaders: [
      {
          test: /\.html$/,
          loader: "file?name=[name].[ext]"
      },
      {
          test: /\.png$/,
          loader: "url-loader",
          query: { mimetype: "image/png" }
      },
      {
          test: /(\.scss|\.css)$/,
          loaders: [
              require.resolve('style-loader'),
              require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
              require.resolve('sass-loader') + '?sourceMap'
          ]
      },
      {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react', 'stage-0']
          }
      }
    ]
  }
};