import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import FileUpload from 'primevue/fileupload';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import 'zingchart/es6';
import zingchartVue from 'zingchart-vue';





Vue.config.productionTip = false

Vue.component('FileUpload', FileUpload);
Vue.component('DataTable',DataTable);
Vue.component('Column',Column);
Vue.component('zingchart', zingchartVue);


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
