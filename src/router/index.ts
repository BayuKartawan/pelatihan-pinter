import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Beranda',
    component: () => import('@/views/BerandaView.vue'),
  },
  {
    path: '/pelatihan',
    name: 'DaftarPelatihan',
    component: () => import('@/views/PelatihanListView.vue'),
  },
  {
    path: '/pelatihan/:sheetName',
    name: 'DetailPelatihan',
    component: () => import('@/views/PelatihanDetailView.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
