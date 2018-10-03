const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

var config = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',        
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],        
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/plugin.js'),
    output: {
      filename: 'vue-bootstrap-breakpoint-indicator.min.js',
      libraryTarget: 'window',
      library: 'VueBootstrapBreakpointIndicator',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/BootstrapBreakpointIndicator.vue'),
    output: {
      filename: 'vue-bootstrap-breakpoint-indicator.js',
      libraryTarget: 'umd',
      library: 'vue-bootstrap-breakpoint-indicator',
      umdNamedDefine: true
    }
  })
];
