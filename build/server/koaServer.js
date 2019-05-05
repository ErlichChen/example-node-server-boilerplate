"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _koa = _interopRequireDefault(require("koa"));

function _default(app) {
  var koaApp = new _koa["default"]();
  return {
    koa: koaApp,
    start: function () {
      var _start = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var port;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // let port = process.env.PORT || configHttp.port;
                port = 3001;
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  koaApp.listen(port, function () {
                    console.log("koa server started");
                    resolve();
                  });
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }(),
    stop: function () {
      var _stop = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (httpHandle) {
                  _context2.next = 3;
                  break;
                }

                console.log("koa server is already stopped");
                return _context2.abrupt("return");

              case 3:
                return _context2.abrupt("return", new Promise(function (resolve) {
                  httpHandle.close(function () {
                    console.log("koa server is stopped");
                    resolve();
                  });
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function stop() {
        return _stop.apply(this, arguments);
      }

      return stop;
    }()
  };
}