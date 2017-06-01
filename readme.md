# test-format
> Format minimal tests

A test is an object with the fields `name`, `expected`, and `result`:
```js
const format = require('test-format')

var test = {
  name: 'NaN',
  expected: true,
  result: NaN === NaN
}

console.log(format(test))
// -> '✖ NaN'
```

Since formatted tests are just plain strings, logging multiple test results is a breeze.
```js
console.log(tests.map(format).join('\n'))
```

## install
```sh
npm install test-format
```

## license
[MIT](https://opensource.org/licenses/MIT) © [Brandon Semilla](https://git.io/semibran)
