import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'My Custom Title',
    links: [
      'https://google.se',
      'https://popniten.github.io',
      'https://youtube.com'
    ]
  },
  mutations: {

  },
  actions: {

  }
})
