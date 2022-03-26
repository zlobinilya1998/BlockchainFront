<template>
    <div class="about">
        <h1>Страница офферов</h1>
        <button @click="$router.push({name:'icons'})" style="margin-right: 10px" class="btn">
            Страница иконок
            <i class="ci ci-forward"/>
        </button>
        <button @click="loadSymbols" class="btn">
            Загрузить
            <i class="ci ci-refresh"/>
        </button>
        <div style="margin-top: 25px">
            <CustomLoader v-if="loading"/>
            <div v-else-if="symbols" class="symbols-wrapper">
                <div class="symbol" v-for="(symbol,index) in symbols" :key="index">
                    <p>Валюта: <span style="color: darkseagreen;font-weight: bold" v-html="symbol.base_currency"/></p>
                    <p>Минимальное кол-во для заказа: {{symbol.min_order_size.toLocaleString()}}</p>
                    <div>Статус: <span :style="{color: statuses[symbol.status].color}" v-html="statuses[symbol.status].text"/></div>
                    <button v-if="symbol.status == 'open'" style="padding: 10px;cursor: pointer;margin: 20px auto 0">
                        Приобрести
                        <i class="ci ci-tag"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="js">

import CustomLoader from "@/components/shared/CustomLoader";
const statuses = {
    open: {
        icon: 'checkmark',
        text: 'открыт',
        color: '#31cd31',
    },
    close: {
        icon: 'cancel',
        text: 'закрыт',
        color: 'red',
    },
}

const SymbolsScreen = {
    components: {CustomLoader},
    data: () => ({
        statuses,
    }),
    computed: {
        symbols(){
            return this.$store.state.blockchainModule.symbols;
        },
        loading(){
            return this.$store.state.blockchainModule.loading;
        }
    },
    mounted(){
        this.loadSymbols();
    },
    methods: {
        loadSymbols(){
            this.$store.dispatch('loadSymbols');
        }
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
