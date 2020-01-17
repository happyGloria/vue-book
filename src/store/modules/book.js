export default {
  state: {
    filename: '',
    menuVisible: false,
    settingVisible: -1, // -1 不显示，0：字体， 1：， 2：, 3：
    defaultFontSize: 16,
    defaultFontFamily: 'Default',
    fontFamilyVisible: false,
    currentBook: null
  },
  mutations: {
    SET_FILENAME (state, filename) {
      state.filename = filename
    },
    SET_MENUVISIBLE (state, flag) {
      state.menuVisible = flag
    },
    SET_SETTING_VISIBLE (state, visible) {
      state.settingVisible = visible
    },
    SET_DEFAULTFONTSIZE (state, fontSize) {
      state.defaultFontSize = fontSize
    },
    SET_DEFAULTFONTFAMILY (state, fontFamily) {
      state.defaultFontFamily = fontFamily
    },
    SET_CURRENT_BOOK (state, currentBook) {
      state.currentBook = currentBook
    },
    SET_FONT_FAMILY_VISIBLE (state, visible) {
      state.fontFamilyVisible = visible
    }
  }
}
