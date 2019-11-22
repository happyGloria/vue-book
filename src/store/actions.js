const actions = {
  setFilename ({ commit }, filename) {
    commit('SET_FILENAME', filename)
  },
  setMenuVisible ({ commit }, flag) {
    commit('SET_MENUVISIBLE', flag)
  }
}
export default actions
