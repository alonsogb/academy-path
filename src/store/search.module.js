export const searchModule = {
  namespaced: true,
  state: () => ({
    query: '',
    filter: ''
  }),
  mutations: {
    setFilter(state, filter) {
      state.filter = filter
    },
    setQuery(state, query) {
      state.query = query
    }
  },
  getters: {
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
}
