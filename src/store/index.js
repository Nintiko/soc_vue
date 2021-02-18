import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id:'',
    navbarPos: 'block'
  },
  mutations: {
    rememberId(state,i){
      state.id = i;
    },
    navbarHide(state){
      state.navbarPos = 'none';
    },
    navbarShow(state){
      state.navbarPos = 'block';
    }
  },
  actions: {
  },
  modules: {
  }
})
