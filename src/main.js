// 引入的不再是Vue构造函数，引入的是一个名字createApp的工厂函数

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
