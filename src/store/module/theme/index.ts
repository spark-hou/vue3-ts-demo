/**
 * @author  sparkHou
 * @date 2021-04-18 17:15
 * @Description:
 */
import {Module} from 'vuex'
import Type from './interface'
import RootState from '@/store/interface'

const theme: Module<Type, RootState> = {
  namespaced: true,
  state: () => ({
    type: 'light'
  }),
  mutations: {
    CHANGE_TYPE(state, val) {
      state.type = val
    }
  },
  actions: {
    changeType({commit}, val) {
      commit('CHANGE_TYPE', val)
    }
  }
}

export default theme
