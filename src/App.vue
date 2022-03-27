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
<script>
import Header from "@/components/common/Header";
export default {
    components: {Header}
}
</script>
