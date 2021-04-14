/**
 * @author  sparkHou
 * @date 2021-04-14 22:02
 * @Description:
 */
import {createStore} from 'vuex'
import user from './module/user'

const store = createStore({
    modules: {
        user
    }
})
export default store
