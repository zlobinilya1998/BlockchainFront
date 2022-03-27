<template>
    <div style="margin-top: 25px">
        <c-loader v-if="loading"/>
        <div v-else-if="symbol" class="symbols-wrapper">
            {{symbol}}
        </div>
        <div v-else>Информация по символу не найдена</div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

const store = useStore();
const route = useRoute();

const loading = ref(false);
const symbol = ref({});
const loadSymbolInfo = async () => {
    loading.value = true;
    symbol.value = await store.dispatch('getSymbolInfo', route.params.symbol);
    loading.value = false;
}
onMounted(loadSymbolInfo)
</script>

<style scoped>

</style>
