var tape = require("tape")
var addLazyProperty = require("../lazyProperty.js")

tape("lazy-property", function(t) {
  var obj = {}
  var count = 0

  addLazyProperty(obj, "foo", function() {
    ++count
    return "bar"
  })
  
  t.same(count, 0)
  t.same(obj.foo, "bar")
  t.same(count, 1)
  t.same(obj.foo, "bar")
  t.same(count, 1)
  
  t.end()
})