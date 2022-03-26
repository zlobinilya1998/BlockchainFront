<template>
    <button class="btn" :class="{inverted}">
        <slot/>
    </button>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
    inverted: {
        type: Boolean,
    }
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
    color: red;
}
.btn:hover {
    background:white;
    border: 1px solid #42414d;
    color: #42414d;
}
</style>
