export default {
  state: {
    filename: '',
    menuVisible: false,
    settingVisible: -1, // -1 不显示，0：字体， 1：， 2：, 3：
    defaultFontSize: 16,
    defaultFontFamily: 'Default'
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
    },
    SET_DEFAULTFONTSIZE (state, fontSize) {
      state.defaultFontSize = fontSize
    },
    SET_DEFAULTFONTFAMILY (state, fontFamily) {
      state.defaultFontFamily = fontFamily
    }
  }
}
