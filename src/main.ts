import './assets/style.css';
import './assets/custom-icons.css';
import {createApp} from 'vue'
import App from './App.vue'
import store from "@/store/store";
import router from './router'

const app = createApp(App);

import CBtn from '@/components/shared/c-btn.vue';
import CCopy from '@/components/shared/c-copy-btn.vue'
import CIcon from '@/components/shared/c-icon.vue';
import CLoader from '@/components/shared/c-loader.vue';
import CSelect from '@/components/shared/c-select.vue'
import CInput from '@/components/shared/c-input.vue';
import CRadio from '@/components/shared/c-radio.vue'
import CFadeTransition from "@/components/shared/c-fade-transition.vue"
import CDialog from "@/components/shared/c-dialog.vue"


app.component('c-btn', CBtn);
app.component('c-btn-copy', CCopy);
app.component('c-icon', CIcon);
app.component('c-loader', CLoader);
app.component('c-select', CSelect);
app.component('c-input', CInput);
app.component('c-radio', CRadio);
app.component('c-fade-transition', CFadeTransition);
app.component('c-dialog', CDialog)


app.use(router).use(store).mount('#app')
