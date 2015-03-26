/**
 * Dependencies
 */

var isArray = Array.isArray

/**
 * Transform `obj` into nested arrays.
 *
 * @param  {object} obj
 * @return {array}
 *
 * @api public
 */

function objectToArrays(obj) {
  if (!obj || !typeof obj === 'object' || isArray(obj)) return
  var results = []
  Object.keys(obj)
    .forEach(function(value) {
      results.push([value, obj[value]])
    })
  return results
}

/**
 * Exports
 */

module.exports = objectToArrays
