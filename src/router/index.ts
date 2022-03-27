import { createRouter, createWebHistory } from 'vue-router'
import SymbolsScreen from "@/components/symbols/SymbolsScreen.vue";
import AdminScreen from "@/components/admin/Screen.vue"
import SymbolScreen from "@/components/symbols/SymbolScreen.vue"
import IconsScreen from "@/components/admin/IconsScreen.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: SymbolsScreen,
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
