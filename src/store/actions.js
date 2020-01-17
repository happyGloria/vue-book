const actions = {
  setFilename ({ commit }, filename) {
    return commit('SET_FILENAME', filename)
  },
  setMenuVisible ({ commit }, flag) {
    return commit('SET_MENUVISIBLE', flag)
  },
  setSettingVisible ({ commit }, visibleName) {
    return commit('SET_SETTING_VISIBLE', visibleName)
  },
  setFontFamilyVisible ({ commit }, visibleFlag) {
    return commit('SET_FONT_FAMILY_VISIBLE', visibleFlag)
  },
  setDefaultFontFamily ({ commit }, fontFamily) {
    return commit('SET_DEFAULTFONTFAMILY', fontFamily)
  },
  setDefaultFontSize ({ commit }, fontSize) {
    return commit('SET_DEFAULTFONTSIZE', fontSize)
  },
  setCurrentBook: ({ commit }, book) => {
    return commit('SET_CURRENT_BOOK', book)
  }
}
export default actions
