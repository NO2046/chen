import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from "./locales/index";
import 'view-design/dist/styles/iview.css';

Vue.config.productionTip = false


import { Button, Table, Input, FormItem, Form, Icon, Message } from 'view-design';
Vue.component('Button', Button);
Vue.component('Table', Table);

Vue.component('Input', Input);
Vue.component('FormItem', FormItem);
Vue.component('Form', Form);
Vue.component('Icon', Icon);

Vue.prototype.$Message = Message;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
