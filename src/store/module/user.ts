import {Store} from'vuex'
interface state {
    count:number
}


const user = {
    state: () => ({
        count: 0
    }),
    mutations: {
        increment(state) {
            // `state` is the local module state
            state.count++
        }
    },
    actions: {}
}

export default user
