import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/better-ui'
import './icons' // svg
import './style/index.scss' // 全局样式

Vue.config.productionTip = false

const whiteList = ['/login'] // 白名单
router.beforeEach(async (to, from, next) => {
  const hasToken = store.getters.token
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/filing' })
    } else {
      if (store.getters.info.name) {
        next()
      } else {
        try {
          const routers = await store.dispatch('user/getInfo')
          router.addRoutes(routers)
          let resPath =
            from.path === '/login'
              ? (resPath = routers[0].path + '/' + routers[0].children[0].path)
              : (resPath = to.path)
          next({ path: resPath, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          next(`/login`)
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
