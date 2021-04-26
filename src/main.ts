import {createApp} from 'vue'
import App from './App.vue'
import route from './router'
import {store, key} from '@/store'
import antd from '@/plugin/antd'
import 'ant-design-vue/dist/antd.css';
import '@/styles/theme/light.less';

const app = createApp(App)
app.use(route)
antd(app)
app.use(store, key)
app.mount('#app')
