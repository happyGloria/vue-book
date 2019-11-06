export default {
  state: {
    filename: ''
  },
  mutations: {
    SET_FILENAME (state, filename) {
      state.filename = filename
    }
  },
  actions: {
    setFilename ({ commit }, filename) {
      commit('SET_FILENAME', filename)
    }
  }
}
