import { createRouter, createWebHistory } from 'vue-router'
import CurrencyScreen from "@/components/symbols/CurrencyScreen.vue";
import AdminScreen from "@/components/admin/Screen.vue"
import IconsScreen from "@/components/admin/IconsScreen.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: CurrencyScreen,
  },
  {
    path: '/admin',
    component: AdminScreen,
    children: [
      {
        path: 'icons',
        name: 'icons',
        component: IconsScreen,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
