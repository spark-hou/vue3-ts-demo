import {createApp} from 'vue'
import App from './App.vue'
import route from './router'
import { store, key } from '@/store'

const app = createApp(App)
app.use(route)
app.use(store, key)
app.mount('#app')
