import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.config.globalProperties.$apiUrl = "https://localhost:7134/api";
app.use(router).mount('#app')
