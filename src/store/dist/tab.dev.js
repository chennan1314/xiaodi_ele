"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  state: {
    menu: [],
    currentMenu: null,
    tabsList: [{
      id: 1,
      name: 'home',
      path: "/",
      label: "首页",
      icon: "home"
    }]
  },
  mutations: {
    // 定义方法
    selectMenu: function selectMenu(state, val) {
      if (val.name !== 'home') {
        state.currentMenu = val; // 判断里面tabslist里面是否有数组

        var result = state.tabsList.findIndex(function (item) {
          return item.name === val.name;
        });
        result === -1 ? state.tabsList.push(val) : '';
      } else {
        state.currentMenu = null;
      }
    },
    // tag方法
    closeTab: function closeTab(state, val) {
      var result = state.tabsList.findIndex(function (item) {
        return item.name === val.name;
      });
      state.tabsList.splice(result, 1);
    }
  },
  actions: {}
};
exports["default"] = _default;