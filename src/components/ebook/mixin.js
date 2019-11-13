import { mapGetters } from 'vuex'
export const EbookMixin = {
  computed: {
    ...mapGetters([
      'filename',
      'menuVisible'
    ])
  }
}
