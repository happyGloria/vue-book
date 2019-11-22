import { mapGetters, mapActions } from 'vuex'
export const EbookMixin = {
  computed: {
    ...mapGetters([
      'filename',
      'menuVisible'
    ])
  },
  methods: {
    ...mapActions(['setFilename', 'setMenuVisible'])
  }
}
