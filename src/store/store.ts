import { createStore } from 'vuex'
import blockchainModule from "@/store/blockchainModule";

export class RootState {}


const store = createStore({
    state: new RootState(),
    modules: {
        blockchainModule,
    },
})

export default store;

