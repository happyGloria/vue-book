export default {
  state: {
    filename: '',
    menuVisible: false
  },
  mutations: {
    SET_FILENAME (state, filename) {
      state.filename = filename
    },
    SET_MENUVISIBLE (state, flag) {
      state.menuVisible = flag
    }
  },
  actions: {
    setFilename ({ commit }, filename) {
      commit('SET_FILENAME', filename)
    },
    setMenuVisible ({ commit }, flag) {
      commit('SET_MENUVISIBLE', flag)
    }
  }
}
