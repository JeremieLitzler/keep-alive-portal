import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

app.config.errorHandler = (error) => {
  // TODO > improve the custom handler
  console.error(error)
}

app.mount('#app')
