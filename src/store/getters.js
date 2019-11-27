const getters = {
  filename: state => state.book.filename,
  menuVisible: state => state.book.menuVisible,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize
}
export default getters
