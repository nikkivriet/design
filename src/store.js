import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModalL: false,
    showModalV: false,
    showModalN: false,
    showModalP: false,
    messagee: 'HEJ HEJ'
  },
  mutations: {
    changeModalL(state) {
      if(state.showModalL) state.showModalL = false;
      else state.showModalL = true;
      state.messagee = "HEJDOOOLÖFERG";  
    },
    changeModalV(state) {
      if(state.showModalV) state.showModalV = false;
      else state.showModalV = true;
      state.messagee = "HEJDOOOVILDMARK";  
    },
    changeModalN(state) {
      if(state.showModalN) state.showModalN = false;
      else state.showModalN = true;
      state.messagee = "HEJDOOONIKKIS";  
    },
    changeModalP(state) {
      if(state.showModalP) state.showModalP = false;
      else state.showModalP = true;
      state.messagee = "HEJDOOOPHTOTO";  
    }

  },
  actions: {

  }
})
