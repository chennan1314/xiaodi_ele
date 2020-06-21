"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mockjs = _interopRequireDefault(require("mockjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  getHomeData: function getHomeData() {
    return {
      code: 200,
      data: {
        videoData: [{
          name: 'SpringBoot',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }, {
          name: 'Vue',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }, {
          name: 'uniapp',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }, {
          name: 'java',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }, {
          name: 'python',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }, {
          name: 'php',
          value: _mockjs["default"].Random["float"](1000, 10000, 0, 2)
        }]
      }
    };
  }
};
exports["default"] = _default;