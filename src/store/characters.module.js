export const charactersModule = {
  namespaced: true,
  state: () => ({
    characters: []
  }),
  actions: {
    async fetchCharacters({ commit, rootGetters }) {
      let url = 'https://rickandmortyapi.com/api/character/?'
      try {
        fetch(url + rootGetters['search/getParams'])
          .then((response) => response.json())
          .then((data) => {
            commit('setCharacters', data.results)
          })
      } catch (error) {
        // Here we can manage the no-results
        console.log(error)
      }
    }
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters
    }
  },
  getters: {
    getCharacters(state) {
      return state.characters
    }
  }
}
