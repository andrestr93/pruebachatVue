import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount('#app')









/*instancia create app */
const app = createApp(App)

/*Instancia del router y montar la app */
//app.use(router);

app.mount('#app');