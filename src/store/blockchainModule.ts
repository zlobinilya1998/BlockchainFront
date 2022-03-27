import BlockchainService from "@/services/BlockchainService/BlockchainService";
import { ActionContext } from "vuex";
import { RootState } from "@/store/store";
import {Currency} from "@/models/Entities/Currency";

class BlockChainState {
    loading: boolean = false;
    symbols: Currency[] = [];
}

const blockChain = {
    state: new BlockChainState(),
    actions: {
        async loadSymbols(me: ActionContext<BlockChainState, RootState>){
            me.state.loading = true;
            const res = await BlockchainService.getSymbols();
            if (res.isSuccess) me.state.symbols = res.result;
            me.state.loading = false;
        }
    }
}

export default blockChain

