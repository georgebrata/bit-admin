import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Toast, { POSITION } from "vue-toastification";
// import "vue-toastification/dist/index.css";

import '@/scss/main.scss'

const toastOptions = {
    transition: "Vue-Toastification__slideBlurred",
    maxToasts: 20,
    newestOnTop: true,
    position: POSITION.BOTTOM_RIGHT,
    hideProgressBar: true,
    timeout: 3000
}

const app = createApp(App)
const pinia = createPinia()

app.use(pinia).use(router).use(Toast, toastOptions)

app.mount('#app')
