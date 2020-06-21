"use strict";

var _mockjs = _interopRequireDefault(require("mockjs"));

var _home = _interopRequireDefault(require("./home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 设置延时
_mockjs["default"].setup({
  timeout: '200-1000'
}); //首页相关


_mockjs["default"].mock(/\/home\/getData/, 'get', _home["default"].getStatisticalData);