import Vuex from 'vuex'
import Basic from '~/store/modules/basic.js'

const createStore = () => {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules:{
      Basic
    }
  })
}

export default createStore
/*

export const state = () => ({
  token: ''

})
export const mutations = {
  increment (state, value) {
    state.token = value
    debugger
  }
}
export const actions = {
  setToken ({commit}, data) {
    commit('increment', data)
  }
}
*/
