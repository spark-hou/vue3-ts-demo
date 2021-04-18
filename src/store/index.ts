/**
 * @author  sparkHou
 * @date 2021-04-14 22:02
 * @Description:
 */
import {createStore, Store, useStore as baseUseStore} from 'vuex'
import {InjectionKey,} from 'vue'
import user from './module/user'
import theme from './module/theme'
import RootState from './interface'

export const store = createStore<RootState>({
  modules: {
    user,
    theme
  }
})
export const key: InjectionKey<Store<RootState>> = Symbol('vue-store');

export function useStore() {
  return baseUseStore(key)
}

