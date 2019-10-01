const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {},
            },
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2|otf)$/,
          use: {
            loader: "url-loader",
            options: {},
          },
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        }
      ]
    },
      
    
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };