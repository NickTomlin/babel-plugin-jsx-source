const babelPluginTester = require('babel-plugin-tester')
const path = require('path')
const plugin = require('..')

babelPluginTester({
  plugin,
  fixtures: path.join(__dirname, 'fixtures')
})
