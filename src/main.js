import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import state from './state';


let app = createApp(App);

app.use(router);
app.use(state);

app.mount('#app')
