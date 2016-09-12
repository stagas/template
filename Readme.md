
# template

minimal string templates

`npm install stagas/template`

## usage

```js
assert.equal(
  'hello, world!',
  template('hello, {place}!', { place: 'world' })
);

assert.equal(
  'hello, world!',
  template('hello, %place%!', { place: 'world' }, ['%','%'])
);
```

## license

MIT &copy; [stagas](https://github.com/stagas)
