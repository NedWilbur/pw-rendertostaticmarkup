Run outside of PW w/ `npm run start` => No issues
Run within PW test w/ `npm run test` => Error

```
Error: Objects are not valid as a React child (found: object with keys {__pw_type, type, props, key}). If you meant to render a collection of children, use an array instead.

   at build.tsx:11

   9 |     throw new Error("Invalid React element");
  10 |
> 11 |   const html = renderToStaticMarkup(element);
     |                                    ^
  12 |   console.log(html);
  13 |
  14 |   return html;
    at retryNode (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:5981:17)
    at renderNodeDestructive (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:5849:11)
    at finishFunctionComponent (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:4743:13)
    at renderElement (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:5185:11)
    at retryNode (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:5899:31)
    at performWork (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:6743:17)
    at startWork (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:7467:7)
    at renderToStringImpl (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:7555:7)
    at process.env.NODE_ENV.exports.renderToStaticMarkup (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/node_modules/react-dom/cjs/react-dom-server-legacy.node.development.js:9019:14)
    at render (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/src/build.tsx:11:36)
    at Object.<anonymous> (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/src/build.tsx:17:1)
    at Object.<anonymous> (/Users/nedwilbur/Projects/pw-rendertostaticmarkup/src/renderToStaticMarkup.test.tsx:2:1)
```
