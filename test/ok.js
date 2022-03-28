if (typeof exports !== "undefined") {
  var driver = require("./driver.js");
  var test = driver.test, testFail = driver.testFail, testAssert = driver.testAssert;
  var acorn = require("../acorn");
}

// Simple
test("obj?.foo", {
  "type": "Program",
  "start": 0,
  "end": 8,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 0,
      "end": 8,
      "expression": {
        "type": "ChainExpression",
        "start": 0,
        "end": 8,
        "expression": {
          "type": "MemberExpression",
          "start": 0,
          "end": 8,
          "object": {
            "type": "Identifier",
            "start": 0,
            "end": 3,
            "name": "obj"
          },
          "property": {
            "type": "Identifier",
            "start": 5,
            "end": 8,
            "name": "foo"
          },
          "computed": false,
          "optional": true
        }
      }
    }
  ],
  "sourceType": "script"
}, { ecmaVersion: 11 })