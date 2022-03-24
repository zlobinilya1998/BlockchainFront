<template>
    <div>
        <div v-if="loading">Loading</div>
        <div v-if="symbols">
            <div v-for="(key,value) in symbols" :key="key">{{ value }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        symbols() {
            return this.$store.state.blockchainModule.symbols;
        },
        loading() {
            return this.$store.state.blockchainModule.loading;
        }
    },
    async mounted() {
        await this.$store.dispatch('loadSymbols');
    }

}
</script>

