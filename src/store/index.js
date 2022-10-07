import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light',
    activeColor: '#409EFF'
  },
  mutations: {
    changeTheme(state, payload) {
      state.theme = payload
    },
    changeActiveColor(state, payload) {
      state.activeColor = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
