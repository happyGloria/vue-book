export default {
  state: {
    filename: '',
    menuVisible: false,
    settingVisible: -1 // -1 不显示，0：， 1：， 2：, 3：
  },
  mutations: {
    SET_FILENAME (state, filename) {
      state.filename = filename
    },
    SET_MENUVISIBLE (state, flag) {
      state.menuVisible = flag
    },
    SET_SETTINGVISIBLE (state, flag) {
      state.settingVisible = flag
    }
  }
}
