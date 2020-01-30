// Development webpack config for server code

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { serverSrcPath, serverBuildPath } = require('kyt-utils/paths')();
const getPolyfill = require('../utils/getPolyfill');

module.exports = options => ({
  mode: 'development',

  target: 'node',

  devtool: 'cheap-module-eval-source-map',

  node: {
    __dirname: false,
    __filename: false,
  },

  externals: nodeExternals(),

  entry: {
    main: [getPolyfill(options.type), `${serverSrcPath}/index.js`].filter(Boolean),
  },

  output: {
    path: serverBuildPath,
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
    publicPath: options.publicPath,
    libraryTarget: 'commonjs2',
  },

  plugins: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: true,
    }),
  ],
});
