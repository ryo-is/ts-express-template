const path = require('path')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  watch: true,
  mode: process.env.NODE_ENV || 'development',
  entry: './src/server.ts',
  target: 'node',
  externals: [nodeExternals()],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.ts$/,
        exclude: [/node_modules/],
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
}
