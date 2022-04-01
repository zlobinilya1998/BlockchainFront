<template>
    <input class="c-input" @input="onInput" :value="props.modelValue" :placeholder="props.placeholder"/>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from "vue";

interface Props {
    placeholder?: string,
    modelValue: string,
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue'])
const onInput = (e: any) => emit("update:modelValue", e.target.value)

</script>

<style scoped>
.c-input {
    padding: 10px;
    background: #42414d;
    color: white;
    transition: .3s;
    cursor: pointer;
    border: 1px solid gray;
    outline: none;
}

.c-input:hover, .c-input:focus {
    border: 1px solid white;
}
</style>
