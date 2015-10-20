"use strict"

const lazy = require("../decorator")
const tape = require("tape")

tape("decorator", function(t) {
  class Obj {
    @lazy foo() {
      ++count
      return "bar"
    }
  }
  var obj = new Obj
  var count = 0

  t.same(count, 0)
  t.same(obj.foo, "bar")
  t.same(count, 1)
  t.same(obj.foo, "bar")
  t.same(count, 1)

  t.end()
})

tape("enumerable decorator", function(t) {
  t.plan(1)
  class Obj {
    @lazy("enumerable") foo() {}
  }
  var obj = new Obj

  for (var key in obj) {
    t.same(key, "foo")
  }

  t.end()
})
