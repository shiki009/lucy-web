import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.css'

document.documentElement.lang = localStorage.getItem('lucy-lang') || 'en'

createApp(App).mount('#app')
