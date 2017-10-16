module.exports = function (babel) {
  const { types: t } = babel;

  return {
    visitor: {
      JSXElement: {
        enter () {
          console.log(arguments)
        },

        // exit allows us to get the source file
        // and grab the original source
        // ala https://github.com/khc/babel-plugin-transform-jsx-html/blob/master/index.js
        // but I'm not sure this is actually the best way
        exit (path, context) {
          if (path.node.openingElement.name.name !== 'JSXExample') { return}

          const start = path.node.children[0].start
          const end = path.node.children[path.node.children.length -1].end

          console.log(context.file.code.substring(start, end).trim())

          // what we want is a JSX element that has the source code within a PRE tag
          t.JSXElement(
            t.JSXOpeningElement(t.JSXIdentifier('pre'), [], false),
            t.JSXClosingElement(t.JSXIdentifier('pre')),
            [
              t.JSXElement(
                t.JSXOpeningElement(t.JSXIdentifier('code'), [], false),
                t.JSXClosingElement(t.JSXIdentifier('code')),
                [],
              )
            ]
          )

          const wrapper = t.JSXElement(
            t.JSXOpeningElement(t.JSXIdentifier('div'), [], false),
            t.JSXClosingElement(t.JSXIdentifier('div')),
            path.node.children
          )

          path.replaceWith(wrapper)
        }
      }
    }
  };
}
