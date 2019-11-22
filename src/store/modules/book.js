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
  }
}
