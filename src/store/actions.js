const actions = {
  setFilename ({ commit }, filename) {
    commit('SET_FILENAME', filename)
  },
  setMenuVisible ({ commit }, flag) {
    commit('SET_MENUVISIBLE', flag)
  },
  setSettingVisible ({ commit }, flag) {
    commit('SET_SETTINGVISIBLE', flag)
  },
  setFontFamilyVisible ({ commit }, flag) {
    commit('SET_SETTINGVISIBLE', flag)
  },
  setDefaultFontFamily ({ commit }, fontFamily) {
    commit('SET_DEFAULTFONTFAMILY', fontFamily)
  },
  setDefaultFontSize ({ commit }, fontSize) {
    commit('SET_DEFAULTFONTSIZE', fontSize)
  }
}
export default actions
