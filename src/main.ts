import './assets/main.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import axios from 'axios'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const app = createApp(App)
// const token = localStorage.getItem('accessToken')
// if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

const vuetify = createVuetify({
  components,
  directives
  // тут можно добавить тему, иконки и т. п.
})

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
