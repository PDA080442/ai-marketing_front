import { createRouter, createWebHistory } from 'vue-router'
import InputUrlPage from '@/views/InputUrlPage.vue'
import QueueLinkPage from '@/views/QueueLinkPage.vue'
import ResultPage from '@/views/ResultPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
  ],
})

export default router
