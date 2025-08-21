import { createRouter, createWebHistory } from 'vue-router'
import InputUrlPage from '@/views/InputUrlPage.vue'
import QueueLinkPage from '@/views/QueueLinkPage.vue'
import ResultPage from '@/views/ResultPage.vue'
import SharingResultPage from '@/views/SharingResultPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/input-url',
      name: 'Input',
      component: InputUrlPage,
      meta: { hideLayout: true },
    },
    {
      path: '/queue-links',
      name: 'Queue',
      component: QueueLinkPage,
    },
    {
      path: '/result',
      name: 'Result',
      component: ResultPage,
    },
    {
      path: '/sharing-result',
      name: 'SharingResuly',
      component: SharingResultPage,
    },
  ],
})

export default router
