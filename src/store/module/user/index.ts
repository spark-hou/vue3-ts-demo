import {Module} from 'vuex'
import UserType from './interface'
import RootState from '@/store/interface'

const user: Module<UserType, RootState> = {
  namespaced: true,
  state: () => ({
    count: 0
  }),
  mutations: {
    UP_COUNT(state, val) {
      state.count += val
    }
  },
  actions: {
    upCount({commit}, val) {
      commit('UP_COUNT', val)
    }
  }
}

export default user
