import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

// Create a new store instance.
const store = createStore({
  state: {
    query: '',
    characters: [],
    filter: ''
  },
  actions: {
    async fetchCharacters({ commit, getters }) {
      let url = 'https://rickandmortyapi.com/api/character/?'
      try {
        fetch(url + getters.getParams)
          .then((response) => response.json())
          .then((data) => {
            commit('setCharacters', data.results)
          })
      } catch (error) {
        // Here we can manage the no-results
        console.log(error);
      }
    }
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters
    },
    setFilter(state, filter) {
      state.filter = filter
    },
    setQuery(state, query) {
      state.query = query
    }
  },
  getters: {
    getCharacters(state) {
      return state.characters
    },
    getParams(state) {
      const params = []
      if (state.query) {
        params.push(`name=${state.query}`)
      }
      if (state.filter) {
        params.push(`status=${state.filter}`)
      }
      return params.join('&')
    }
  }
})

createApp(App).use(store).mount('#app')
