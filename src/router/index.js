import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import DataBinding from '../views/DataBinding.vue' // string data binding
// import DataBindingHtml from '../views/DataBindingHtml.vue' // html data binding
// import DataBindingInputText from '../views/DataBindingInputText.vue' // input text data binding
// import DataBindingInputNumber from '../views/DataBindingInputNumber.vue' // input number data binding
// import DataBindingTextarea from '../views/DataBindingTextarea.vue' // textarea data binding
// import DataBindingSelect from '../views/DataBindingSelect.vue' // select data binding
// import DataBindingCheckbox from '../views/DataBindingCheckbox' // checkbox data binding
// import DataBindingCheckbox2 from '../views/DataBindingCheckbox2' // checkbox array data binding
// import DataBindingRadio from '../views/DataBindingRadio' // radio data binding
// import DataBindingAttribue from '../views/DataBindingAttribue' // attribute data binding
// import DataBindingButton from '../views/DataBindingButton' // button data binding
// import DataBindingClass from '../views/DataBindingClass' // class data binding
// import DataBindingClass2 from '../views/DataBindingClass2' // class array data binding
// import DataBindingStyle from '../views/DataBindingStyle' // inline style data binding
// import DataBindingList from '../views/DataBindingList'  // list data binding
// import RenderingVIf from '../views/RenderingVIf' // v-if v-show
// import EventClick from '../views/EventClick'  // event click
// import EventChange from '../views/EventChange'  // event change(select)
// import ComputedEx from '../views/ComputedEx' // computed
// import WatchEx from '../views/WatchEx' // watch
import axiosEx from '../views/DataBindingList2.vue'

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
    name: 'DataBindingHtml',
    component: axiosEx
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
