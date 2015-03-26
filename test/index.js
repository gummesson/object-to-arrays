/**
 * Dependencies
 */

var test           = require('tape')
var objectToArrays = require('../')

/**
 * Tests
 */

test('objectToArrays([obj])', function(assert) {
  var obj = { foo: 'bar', baz: 'qux' }
  assert.equal(objectToArrays(), undefined)
  assert.equal(objectToArrays([]), undefined)
  assert.deepEqual(objectToArrays(obj), [['foo', 'bar'], ['baz', 'qux']])
  assert.end()
})
