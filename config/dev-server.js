const helpers = require('./helpers');
const paths = require('./paths');

module.exports = {
  contentBase: paths.dist,
  port: 4000,
  https: false,
  open: true,

  // temp fix for webpack-dev-server issue introduced in v2.5
  // https://github.com/webpack/webpack-dev-server/issues/960#issuecomment-311477326
  openPage: '',
  inline: true,
  hot: helpers.IS_DEV,
  compress: helpers.IS_PROD,
  historyApiFallback: true,
  noInfo: false,
  quiet: false,
  watchOptions: {
    ignored: /node_modules/,
  },
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: {
      green: '\u001b[32m',
    },
  },
};
