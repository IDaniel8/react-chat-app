/* eslint-disable no-param-reassign */
const {
  override,
  addBabelPlugin,
  addWebpackPlugin,
} = require('customize-cra')
const { InjectManifest } = require('workbox-webpack-plugin')
const { alias, configPaths } = require('react-app-rewire-alias')

// function myOverrides(config) {
//   // do stuff to config
//   return config
// }

module.exports = override(
  addWebpackPlugin(
    new InjectManifest({
      swSrc: './src/sw.js',
    }),
  ),
  alias(configPaths('./jsconfig.paths.json')),
  addBabelPlugin([
    'styled-components',
    { displayName: true, fileName: false },
  ]),
)
