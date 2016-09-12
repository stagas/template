var assert = require('assert');
var template = require('./');

assert.equal(
  'hello, world!',
  template('hello, {place}!', { place: 'world' })
);

assert.equal(
  'hello, world!',
  template('hello, %place%!', { place: 'world' }, ['%','%'])
);
