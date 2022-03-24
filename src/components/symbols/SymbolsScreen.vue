<template>
    <div class="about">
        <h1>This is an about page</h1>
        <div >
            <div v-if="loading">Loading</div>
            <div v-else-if="symbols" class="symbols-wrapper">
                <div class="symbol" v-for="(symbol,index) in symbols" :key="index">{{symbol}}</div>
            </div>
        </div>
    </div>
</template>

<script lang="js">

const SymbolsScreen = {
    computed: {
        symbols(){
            return this.$store.state.blockchainModule.symbols;
        },
        loading(){
            return this.$store.state.blockchainModule.loading;
        }
    },
    mounted(){
        this.$store.dispatch('loadSymbols');
    }

}

export default SymbolsScreen
</script>


<style>
.symbols-wrapper {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 25px;
}
.symbol {
    border-radius: 10px;
    padding: 20px;
    background: #42414d;
}
</style>
