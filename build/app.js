"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = App;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _koaServer = _interopRequireDefault(require("./server/koaServer"));

function App() {
  var app = {
    env: function env() {
      console.log('Port: ' + process.env.PORT);
    },
    start: function () {
      var _start = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('server start');
                _context.next = 3;
                return app.server.start();

              case 3:
                console.log('server started');

              case 4:
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
                console.log('server stop');
                _context2.next = 3;
                return app.server.stop();

              case 3:
                console.log('server stopped');

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
  app.server = (0, _koaServer["default"])(app);
  return app;
}