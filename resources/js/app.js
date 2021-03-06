import {createApp} from "vue"
import App from "./App.vue"
import router from './router'
import store from "./store"
import UUID from 'vue-uuid'

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.withCredentials = true

createApp({})
    .use(router)
    .use(store)
    .use(UUID)
    .component('app', App)
    .mount('#app')
