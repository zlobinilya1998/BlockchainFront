<template>
    <div class="about">
        <h1>Страница офферов</h1>
        <c-btn @click="$router.push({name:'icons'})" style="margin-right: 10px">
            Страница иконок
            <c-icon v-html="'ci-forward'"/>
        </c-btn>
        <c-btn @click="loadSymbols">
            Загрузить
            <c-icon v-html="'ci-refresh'"/>
        </c-btn>
        <div style="margin-top: 25px">
            <c-loader v-if="loading"/>
            <div v-else-if="symbols" class="symbols-wrapper">
                <div class="symbol" v-for="(symbol,index) in symbols" :key="index">
                    <p>Валюта: <span style="color: darkseagreen;font-weight: bold" v-html="symbol.base_currency"/></p>
                    <p>Минимальное кол-во для заказа: {{symbol.min_order_size.toLocaleString()}}</p>
                    <div>Статус: <span :style="{color: getStatus(symbol.status).color}" v-html="getStatus(symbol.status).text"/></div>
                    <button v-if="symbol.status === Status.open" style="padding: 10px;cursor: pointer;margin: 20px auto 0">
                        Приобрести
                        <i class="ci ci-tag"/>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, onMounted} from "vue";
import {useStore} from "vuex";
import {Currency, getStatus, Status,} from "@/models/Entities/Symbols";

const store = useStore();
const loadSymbols = () => store.dispatch('loadSymbols');

const symbols = computed<Currency[]>(() => store.state.blockchainModule.symbols);
const loading = computed(() => store.state.blockchainModule.loading);

onMounted(loadSymbols)
</script>


<style lang="scss">
.symbols-wrapper {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 25px;
    .symbol {
        border-radius: 10px;
        padding: 20px;
        background: #42414d;
    }
}

</style>
