# Requiring modules in Node.js

Node uses two core modules for managing module dependencies:

1. The require module.
2. The module module.

```js
const config = require('/path/to/file')
```

Node invokes that require() function, Node goes through the following sequence of steps:

1. Resolving: To find the absolute paht of the file.
2. Loading: To determine the type of the file content.
3. Wrapping: To give the file its private scope. This is what makes both the require and module objects local to every file we require.
4. Evaluating: This is what the VM eventually does with loaded code.
5. Caching: So that when we require this file again, we don't go over all the steps another time.
