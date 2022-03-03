import { createApp } from 'vue';

import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import mitt from 'mitt';

import App from './App.vue';
import router from './router';

// Create Vue instance
const app = createApp(App);

// 定義全域變數 $mitter
app.config.globalProperties.$mitter = mitt();

app.use(VueAxios, axios);
app.use(VueLoading);

app.use(router);
app.mount('#app');
