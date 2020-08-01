const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin')
const ForkTsCheckerWebpackPlugin = require('react-dev-utils/ForkTsCheckerWebpackPlugin')
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin')
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const PnpWebpackPlugin = require('pnp-webpack-plugin')
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const resolve = require('resolve')

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
]

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)

const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find((extension) =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  )

  if (extension) {
    return resolveFn(`${filePath}.${extension}`)
  }

  return resolveFn(`${filePath}.js`)
}

// this is the setup for the dev environment
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
  },
  entry: resolveModule(resolveApp, 'src/index'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolveApp('public/index.html'),
    }),
    new ModuleNotFoundPlugin(''),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(resolveApp('node_modules')),
    new ForkTsCheckerWebpackPlugin({
      typescript: resolve.sync('typescript', {
        basedir: resolveApp('node_modules'),
      }),
      async: true,
      useTypescriptIncrementalApi: true,
      checkSyntacticErrors: true,
      tsconfig: resolveApp('tsconfig.json'),
      reportFiles: [
        '**',
        '!**/__tests__/**',
        '!**/?(*.)(spec|test).*',
        '!**/src/setupProxy.*',
        '!**/src/setupTests.*',
      ],
      watch: resolveApp('src'),
      silent: true,
      formatter: undefined,
    }),
  ],
  resolve: {
    modules: [resolveApp('src'), resolveApp('node_modules')],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    plugins: [
      PnpWebpackPlugin,
      new ModuleScopePlugin(resolveApp('src'), [resolveApp('package.json')]),
    ],
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)],
  },
  module: {
    rules: [
      { parser: { requireEnsure: false } },
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: require.resolve('react-dev-utils/eslintFormatter'),
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: resolveApp('src'),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader'),
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
    ],
  },
}
