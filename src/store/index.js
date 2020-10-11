import Vue from 'vue'
import Vuex from 'vuex'
import ordenes from './modules/ordenes';
import productos from './modules/productos';
import datosReporte from './modules/datosReporte';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    ordenes,
    productos,
    datosReporte
    
  }
})
