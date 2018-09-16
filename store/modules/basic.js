export default {
  state: {
    token: ''
  },
  mutations: {
    SET_TOKEN (state, value) {
      state.token = value
    }
  },
  actions: {
    setToken ({commit}, data) {
      commit('SET_TOKEN', data)
    }
  },
  getters: {}
}