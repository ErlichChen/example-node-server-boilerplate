"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

console.log("start to run node api server");
var app = (0, _app["default"])();
app.env();
app.start()["catch"](function (err) {
  console.error("App ending with error: ", err);
  console.error("App ending with error: ", JSON.stringify(err));
});