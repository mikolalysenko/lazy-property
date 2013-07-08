"use strict"

function addLazyProperty(object, name, initializer, enumerable) {
  var initialized = false
  var cachedValue
  Object.defineProperty(object, name, {
    get: function() {
      if(initialized) {
        return cachedValue
      }
      cachedValue = initializer()
      initialized = true
      return cachedValue
    },
    set: function(v) {
      initialized = true
      cachedValue = v
      return v
    },
    enumerable: !!enumerable
  })
}

module.exports = addLazyProperty