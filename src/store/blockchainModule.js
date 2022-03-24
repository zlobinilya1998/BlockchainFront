import BlockchainService from "@/services/BlockchainService/BlockchainService";

const blockChain = {
    state: () => ({
        loading: false,
        symbols: {},
    }),
    actions: {
        async loadSymbols(me){
            me.state.loading = true;
            setTimeout(async ()=>{
                const res = await BlockchainService.getSymbols();
                if (res.isSuccess) me.state.symbols = res.result;
                me.state.loading = false;
            },3000)
        }
    }
}

export default blockChain

