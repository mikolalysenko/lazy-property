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
