import './assets/custom-icons.css';
import './assets/style.css';
import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store/store";
import router from './router'

createApp(App).use(router).use(store).mount('#app')
