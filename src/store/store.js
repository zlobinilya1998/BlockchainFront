import { createStore } from 'vuex'
import blockchainModule from "@/store/blockchainModule";

const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    modules: {
        blockchainModule,
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

export default store;

