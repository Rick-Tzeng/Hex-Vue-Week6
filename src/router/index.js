import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: '前台',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: 'about',
        name: '關於我們',
        component: () => import('../views/AboutView.vue'),
      },
      {
        path: 'allProducts',
        name: '相關產品',
        component: () => import('../views/AllProductsView.vue'),
      },
      {
        path: 'product/:id',
        name: '單一產品內容',
        component: () => import('../views/ProductView.vue'),
      },
      {
        path: 'cart',
        name: '我的購物車',
        component: () => import('../views/CartView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: '登入頁面',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/admin',
    name: '後台',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'allProducts',
        name: '產品列表',
        component: () => import('../views/Dashboard/AllProductsView.vue'),
      },
      {
        path: 'orders',
        name: '客戶訂單',
        component: () => import('../views/Dashboard/OrdersView.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404頁面',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/admin/:pathMatch(.*)*',
    name: '重新導向',
    redirect: {
      name: '後台',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkExactActiveClass: 'activated',
});

export default router;
