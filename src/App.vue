<template>
  <div>
    <button @click="getSymbols">Get</button>
    <div v-if="symbols">
        <div v-for="(key,value) in symbols" :key="key">{{value}}</div>
    </div>
  </div>
</template>

<script>
import BlockchainService from "@/services/BlockchainService";

export default {
  name: 'App',
    data: () => ({
        symbols: null,
    }),
    methods: {
     async getSymbols(){
         const res =  await BlockchainService.getSymbols();
         if (res.isSuccess) this.symbols = res.result;
      }
    }
}
</script>

