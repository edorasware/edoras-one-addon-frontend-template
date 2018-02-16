const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const fileName = 'edoras-addon-{{widgetNameParamCase}}';

const extractSass = new ExtractTextPlugin({
  filename: fileName + '.css'
});

module.exports = {
  entry: {
    widget: './index.js'
  },
  output: {
    path: path.join(__dirname, '..', '..', '{{widgetNameOriginal}}',
      'src', 'main', 'resources', 'com', 'edorasware', 'one', 'widgets'),
    filename: fileName + '.js',
    library: '{{widgetNameFullCamelCase}}',
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
            presets: ['env']
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
