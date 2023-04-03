import { Module } from 'vuex'
import { CharactersState, RootState } from '@/store/types'

export const state: CharactersState = {
  characters: []
}

export const mutations = {
  setCharacters(state, characters) {
    state.characters = characters
  }
}

export const getters = {
  getCharacters(state) {
    return state.characters
  }
}

export const actions = {
  async fetchCharacters({ commit, rootGetters }) {
    const url = 'https://rickandmortyapi.com/api/character/?'
    try {
      const response = await fetch(url + rootGetters['search/getParams'])
      const data = await response.json()
      commit('setCharacters', data.results)
    } catch (error) {
      // Here we can manage the no-results
      console.log(error)
    }
  }
}

export const charactersModule: Module<CharactersState, RootState> = {
  namespaced: true,
  state: () => ({
    characters: []
  }),
  actions,
  mutations,
  getters
}
