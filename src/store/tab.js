export default {
    state: {
        menu: [],
        currentMenu: null,
        tabsList: [{
            id: 1,
            name: 'home',
            path: "/",
            label: "首页",
            icon: "home",
        }]
    },
    mutations: {
        // 定义方法
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                // 判断里面tabslist里面是否有数组
                let result = state.tabsList.findIndex(item => item.name === val.name)
                result === -1 ? state.tabsList.push(val) : ''
            } else {
                state.currentMenu = null
            }
        },
        // tag方法
        closeTab(state, val) {
            let result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
        }
    },
    actions: {},
}