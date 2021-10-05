import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld'


const routes = [
  {
    path: '/', component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
//     next({ name: 'LogIn', query: { to: to.path }});
//   } else {
//     next()
//   }
// })

export default router