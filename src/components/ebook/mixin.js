import { mapGetters, mapActions } from 'vuex'

export const EbookMixin = {
  computed: {
    ...mapGetters([
      'filename',
      'menuVisible',
      'settingVisible',
      'defaultFontSize',
      'defaultFontFamily',
      'currentBook'
    ])
  },
  methods: {
    ...mapActions([
      'setFilename',
      'setMenuVisible',
      'setSettingVisible',
      'setDefaultFontFamily',
      'setDefaultFontSize',
      'setFontFamilyVisible',
      'setCurrentBook'
    ])
  }
}
