import Vue from 'vue'
import VueRouter from 'vue-router'
const EBook = () => import('@/views/ebook/index.vue')
const EBookReader = () => import('@/components/ebook/EbookReader.vue')
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/ebook'
  },
  {
    path: '/ebook',
    component: EBook,
    children: [
      {
        path: ':filename',
        component: EBookReader
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
