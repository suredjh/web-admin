import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/hetongguanli',
    component: Layout,
    redirect: '/hetongguanli',
    children: [{
      path: 'hetongguanli',
      name: 'hetongguanli',
      component: () => import('@/views/dashboard/index-hetongguanli'),
      meta: { title: '合同管理', icon: 'table' }
    }]
  },

  {
    path: '/hetongguanli/detail',
    component: Layout,
    redirect: '/hetongguanli/detail',
    children: [{
      path: 'hetongguanli-detail',
      name: 'hetongguanli-detail',
      component: () => import('@/views/dashboard/index-hetongxiangqing'),
      meta: { title: '合同详情', icon: 'tree' }
    }]
  },

  {
    path: '/chanpinxilie',
    component: Layout,
    redirect: '/chanpinxilie',
    children: [{
      path: 'chanpinxilie',
      name: 'chanpinxilie',
      component: () => import('@/views/dashboard/index-chanpinxilie'),
      meta: { title: '产品系列', icon: 'link' }
    }]
  },

  {
    path: '/chengbenpeizhi',
    component: Layout,
    redirect: '/chengbenpeizhi',
    children: [{
      path: 'chengbenpeizhi',
      name: 'chengbenpeizhi',
      component: () => import('@/views/dashboard/index-chengbenpeizhi'),
      meta: { title: '成本配置', icon: 'tree' }
    }]
  },

  {
    path: '/molipeizhi',
    component: Layout,
    redirect: '/molipeizhi',
    children: [{
      path: 'molipeizhi',
      name: 'molipeizhi',
      component: () => import('@/views/dashboard/index-molipeizhi'),
      meta: { title: '毛利配置', icon: 'nested' }
    }]
  },

  {
    path: '/tichengpeizhi',
    component: Layout,
    redirect: '/tichengpeizhi',
    children: [{
      path: 'tichengpeizhi',
      name: 'tichengpeizhi',
      component: () => import('@/views/dashboard/index-tichengpeizhi'),
      meta: { title: '提成配置', icon: 'form' }
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
