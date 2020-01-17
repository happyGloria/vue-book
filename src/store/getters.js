const getters = {
  filename: state => state.book.filename,
  menuVisible: state => state.book.menuVisible,
  settingVisible: state => state.book.settingVisible,
  defaultFontSize: state => state.book.defaultFontSize,
  defaultFontFamily: state => state.book.defaultFontFamily,
  currentBook: state => state.book.currentBook
}
export default getters
