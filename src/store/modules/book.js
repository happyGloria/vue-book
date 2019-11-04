export default {
  state: {
    test: 1
  },
  mutations: {
    'SET_TEST' (state, val) {
      state.test = val
    }
  },
  actions: {
    setTest ({ state, commit }, val) {
      commit('SET_TEST', val)
    }
  }
}
