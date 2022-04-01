<template>
    <button class="btn" :class="{'inverted': props.inverted, 'noHover': props.noHover}" :style="{width: props.block ? '100%' : ''}">
        <slot/>
    </button>
</template>

<script setup lang="ts">
import {defineProps} from "vue";

interface Props {
    block: boolean,
    inverted: boolean,
    noHover: boolean,
    loading: boolean,
}

const props = defineProps<Props>()

</script>

<style scoped>
.btn {
    padding: 10px;
    background: #42414d;
    color: white;
    transition: .3s;
    cursor: pointer;
    border: 1px solid gray;
}
.btn.inverted {
    background:white;
    border: 1px solid #42414d;
    color: #42414d;
}
.btn:not(.inverted):not(.noHover):hover {
    background:white;
    border: 1px solid #42414d;
    color: #42414d;
}
</style>
