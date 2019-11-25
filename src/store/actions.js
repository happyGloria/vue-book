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
  }
}
export default actions
