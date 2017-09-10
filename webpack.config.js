const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
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
