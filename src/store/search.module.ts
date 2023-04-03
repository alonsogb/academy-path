import {Module} from "vuex";
import {SearchState, RootState} from "@/store/types";

export const state: SearchState = {
  filter: '',
  query: ''
};

export const mutations =  {
  setFilter(state, filter) {
    state.filter = filter
  },
  setQuery(state, query) {
    state.query = query
  }
}

export const getters =  {
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

export const searchModule: Module<SearchState, RootState> = {
  namespaced: true,
  state: () => ({
    query: '',
    filter: ''
  }),
  mutations,
  getters
}
