import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView    // path에 접근하지 않아도 import
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting  라우트레벨에서 코드 분할
    // this generates a separate chunk (about.[hash].js) for this route  라우트에 대한 chunk파일 분리되어 생성
    // which is lazy-loaded when the route is visited. 라우트 방문 시 lazy-load(지연로드 됨)    사용자가 path 접근시 임포트
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
