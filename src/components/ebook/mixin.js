import { mapGetters, mapActions } from 'vuex'
import { FONT_SIZE_LIST } from './book.js'
export const EbookMixin = {
  data () {
    return {
      fontSizeList: FONT_SIZE_LIST
    }
  },
  computed: {
    ...mapGetters([
      'filename',
      'menuVisible',
      'settingVisible'
    ])
  },
  methods: {
    ...mapActions([
      'setFilename',
      'setMenuVisible',
      'setSettingVisible'
    ])
  }
}
