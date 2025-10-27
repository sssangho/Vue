import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia()) // Pinia 등록
app.use(router) // Router 등록
app.mount('#app')
