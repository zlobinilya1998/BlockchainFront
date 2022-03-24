import { createRouter, createWebHistory } from 'vue-router'
import SymbolsScreen from "@/components/symbols/SymbolsScreen";

const routes = [
  {
    path: '/',
    name: 'home',
    component: SymbolsScreen,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
