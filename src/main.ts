import './assets/custom-icons.css';
import './assets/style.scss';
import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store/store";
import router from './router'

const app = createApp(App);

import CBtn from '@/components/shared/c-btn.vue';
import CIcon from '@/components/shared/c-icon.vue';
import CLoader from '@/components/shared/c-loader.vue';



app.component('c-btn', CBtn);
app.component('c-icon', CIcon);
app.component('c-loader', CLoader);


app.use(router).use(store).mount('#app')
