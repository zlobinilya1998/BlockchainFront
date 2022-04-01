<template>
    <Header/>
    <router-view/>
</template>

<style>
body {
    color: white;
    background: #000000;
}
</style>
<script lang="ts" setup>
import Header from "@/components/common/Header.vue";
</script>
