babel-plugin-react-source
---

:warning: This is currently a spike :warning:

A transform to add a source code string to a JSX component, useful for example applications or storybooks.

```shell
# or yarn add
npm install --save-dev @nicktomlin/babel-plugin-jsx-source
```


```javascript
// .bablerc
// add 'jsx-source' to your babel plugins

{
  "plugins": ['jsx-source']
}

```


```jsx
<JSXExample>
  <MyComponent className="test">
    <p>Hello</p>
  </MyComponent>
</JSXExample>;
```

Becomes:

```jsx
<JSXExample __source__="<MyComponent className=\"test\">\n    <p>Hello</p>\n  </MyComponent>">
  <MyComponent className="test">
    <p>Hello</p>
  </MyComponent>
</JSXExample>;
```

You can use this within your component to run the `__source__` prop through a syntax highlighter like [highligh.js](https://highlightjs.org/) or [prism.js](http://prismjs.com/).
