import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import formCreate from '@form-create/element-ui'
import formDesigner from '@form-create/designer'
import 'camunda-bpmn-js/dist/assets/camunda-platform-modeler.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(formCreate)
Vue.use(formDesigner)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
