function lazyProperty(object, name, descriptor) {
  // support for enumerable
  if (typeof object != "object") {
    return function(o,p,d) {
      d.enumerable = Boolean(object)
      return lazyProperty(o, p, d)
    }
  }
  var init = descriptor.value
  function set(value) {
    Object.defineProperty(this, name, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: value
    })
    return value
  }
  return {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    get: function() {
      return set.call(this, init.call(this))
    },
    set: set
  }
}

module.exports = lazyProperty
