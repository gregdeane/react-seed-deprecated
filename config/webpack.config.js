const helpers = require('./helpers');
const paths = require('./paths');
const devServer = require('./dev-server');
const autoprefixer = require('autoprefixer');
const chalk = require('chalk');
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HashedModuleIdsPlugin = require('webpack/lib/HashedModuleIdsPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const FILENAME = (helpers.IS_PROD && '[name].[hash]') || '[name]';
const stats = devServer.stats;

console.log(helpers.ENV); // eslint-disable-line no-console

const webpackConfig = {
  devtool: (helpers.IS_DEV && 'source-map') || false,
  entry: {
    vendor: paths.vendorJs,
    main: paths.indexJs,
  },
  output: {
    filename: `js/${FILENAME}.js`,
    chunkFilename: `js/${FILENAME}.js`,
    path: paths.dist,
    publicPath: paths.root,
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: paths.aliases,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [paths.src],
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        include: [paths.src],
        use: ExtractTextPlugin.extract([
          {
            loader: 'css-loader',
            options: {
              sourceMap: helpers.IS_DEV,
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: helpers.IS_DEV,
              includePaths: [paths.styles],
              data: '@import "variables"; $static: "/static";',
            },
          },
        ]),
      },
      {
        test: /\.(woff2?|svg)$/,
        include: [paths.src],
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(png|jpg)$/,
        include: [paths.src],
        use: ['url-loader?limit=8192'],
      },
      {
        test: /\.(ttf|eot)$/,
        include: [paths.src],
        use: ['file-loader?name=fonts/[name].[ext]'],
      },
    ],
  },
  plugins: [
    // https://webpack.js.org/guides/code-splitting-libraries/
    new CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
    new DefinePlugin({
      process: {
        env: helpers.wrapStringValues(helpers.ENV),
      },
    }),
    new ExtractTextPlugin({
      filename: `css/${FILENAME}.css`,
      allChunks: true,
    }),
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: paths.indexHtml,
      env: helpers.ENV,
      inject: 'body',
      chunksSortMode: 'dependency',
      minify: helpers.IS_PROD && {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new LoaderOptionsPlugin({
      options: {
        context: paths.root,
        postcss: () => [autoprefixer],
      },
    }),
    new ProgressBarPlugin({
      format: `${chalk.cyan.bold('build')} [${chalk.green(':bar')}] ${chalk.green.bold(':percent')} ${chalk.yellow.bold(':elapsed seconds')} ${chalk.white(':msg')}`,
      clear: false,
    }),
  ],
  performance: helpers.IS_PROD && {
    maxAssetSize: 300000,
    maxEntrypointSize: 300000,
    hints: 'warning',
  },
  stats,
  devServer,
};

//----------------------------
//        PRODUCTION
//----------------------------

if (helpers.IS_PROD) {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new AggressiveMergingPlugin(),
    new HashedModuleIdsPlugin(),
    new OptimizeCssAssetsPlugin(),
    new UglifyJsPlugin(),
  ]);
}

//----------------------------
//        DEVELOPMENT
//----------------------------

if (helpers.IS_DEV) {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new NamedModulesPlugin(),
  ]);
}

module.exports = webpackConfig;
