import './assets/main.css';
import 'primevue/resources/themes/aura-dark-green/theme.css';

import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import { i18n } from '@/i18n/config';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(i18n);

app.mount('#app');
