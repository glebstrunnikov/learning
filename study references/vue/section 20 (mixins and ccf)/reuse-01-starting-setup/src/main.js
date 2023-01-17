import { createApp } from 'vue';

import App from './App.vue';
import globalMixin from './mixins/logger.js';

const app = createApp(App);
app.mixin(globalMixin);

app.mount('#app');
