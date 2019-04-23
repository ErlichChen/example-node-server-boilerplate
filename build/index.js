"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log("start to run node api server");
var app = (0, _app["default"])();
app.displayInfoEnv();
app.start()["catch"](function (err) {
  console.error("App ending with error: ", err);
  console.error("App ending with error: ", JSON.stringify(err));
});