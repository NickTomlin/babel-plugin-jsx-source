const defaults = { elementName: 'JSXExample' }

module.exports = function (babel) {
  const { types: t } = babel;
  return {
    name: 'jsx-source',
    inherits: require('babel-plugin-syntax-jsx'),
    visitor: {
      JSXElement: {
        exit (path, state) {
          const elementName = (state.opts.elementName || defaults.elementName)
          if (path.node.openingElement.name.name !== elementName) { return }
          if (path.node.children.length === 0) { return }

          const start = path.node.children[0].start
          const end = path.node.children[path.node.children.length -1].end
          const code = (state.file && state.file.code || '')
            .substring(start, end)
            .trim()

          path.node.openingElement.attributes.push(
            t.JSXAttribute(t.JSXIdentifier('__code__'), t.StringLiteral(code))
          )
        }
      }
    }
  };
}
