import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numberItems: 15,
    items: [
        {
          id: 1,
          name: 'wakeboard-cable-park',
          extension: 'jpg',
          description: 'description1',
          title: 'title1',
        },
        {
          id: 2,
          name: null,
          extension: '',
          description: '',
          title: 'title2',
        },
        {
            id: 3,
            name: null,
            extension: '',
            description: '',
            title: 'title3',
        },
        {
            id: 4,
            name: null,
            extension: '',
            description: '',
            title: 'title4',
        },
        {
            id: 5,
            name: null,
            extension: '',
            description: '',
            title: 'title5',
        },
        {
            id: 6,
            name: null,
            extension: '',
            description: '',
            title: 'title6',
        },
      ],
    user: { role_user: false },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
