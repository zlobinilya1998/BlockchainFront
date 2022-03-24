import BlockchainService from "@/services/BlockchainService/BlockchainService";

const blockChain = {
    state: () => ({
        loading: false,
        symbols: {},
    }),
    actions: {
        async loadSymbols(me){
            me.state.loading = true;
            const res = await BlockchainService.getSymbols();
            if (res.isSuccess) me.state.symbols = res.result;
            me.state.loading = false;
        }
    }
}

export default blockChain

