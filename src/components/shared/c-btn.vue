<template>
    <button class="btn" :class="{inverted}" :style="{width: block ? '100%' : ''}">
        <slot/>
    </button>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
    block: Boolean,
    inverted: Boolean,
})
</script>

<style scoped>
.btn {
    padding: 10px;
    background: #42414d;
    color: white;
    transition: .3s;
    cursor: pointer;
    border: 1px solid transparent;
}
.btn.inverted {
    background:white;
    border: 1px solid #42414d;
    color: #42414d;
}
.btn:not(.inverted):hover {
    background:white;
    border: 1px solid #42414d;
    color: #42414d;
}
</style>
