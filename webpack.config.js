const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const extractSass = new ExtractTextPlugin({
  filename: '{{widgetNameHyphen}}.css'
});

module.exports = {
  entry: {
    widget: './index.js'
  },
  output: {
    path: path.join(__dirname, '..', '{{widgetNameHyphen}}',
      'src', 'main', 'resources', 'com', 'edorasware', 'one', 'widgets'),
    filename: '{{widgetNameHyphen}}.js',
    library: 'edorasWidgetStarRating',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader'
            }, {
              loader: 'sass-loader'
            }
          ],
          // use style-loader in development
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
};
