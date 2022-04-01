import { createRouter, createWebHistory } from 'vue-router'
import SymbolsScreen from "@/views/SymbolsScreen.vue";
import AdminScreen from "@/components/admin/Screen.vue"
import SymbolScreen from "@/views/SymbolScreen.vue"
import IconsScreen from "@/components/admin/IconsScreen.vue";
import TrendsScreen from "@/views/TrendsScreen.vue";
import LoginScreen from "@/views/LoginScreen.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: SymbolsScreen,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginScreen,
  },
  {
    path: '/trends',
    name: 'trends',
    component: TrendsScreen,
  },
  {
    path: '/symbol/:symbol',
    name: 'symbolInfo',
    component: SymbolScreen
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
