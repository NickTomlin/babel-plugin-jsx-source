const babelPluginTester = require('babel-plugin-tester')
const path = require('path')
const plugin = require('..')

babelPluginTester({
  plugin,
  filename: __filename,
  // unfortunately we can't mix and match fixtures and tests
  tests: {
    'It adds a __code__ attribute to example components with the code of it\'s children': {
      fixture: 'fixtures/basic/code.js',
      outputFixture: 'fixtures/basic/output.js'
    },
    'It accepts custom element names through plugin options': {
      pluginOptions: {
        elementName: 'CustomElementName'
      },
      fixture: 'fixtures/element-name/code.js',
      outputFixture: 'fixtures/element-name/output.js'
    }
  }
})
