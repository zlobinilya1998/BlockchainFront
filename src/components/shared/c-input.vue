<template>
    <div style="display: inline-block;position: relative">
        <input class="c-input" @input="onInput" :value="props.modelValue" :placeholder="props.placeholder"/>
        <transition name="fade" appear mode="out-in">
            <c-icon v-if="props.modelValue" v-html="'ci-cancel'" class="close-icon" @click="clearInput"/>
        </transition>
    </div>
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
const clearInput = () => emit('update:modelValue', '')

</script>

<style scoped>
.c-input {
    padding: 10px;
    background: #42414d;
    color: white;
    transition: .3s;
    cursor: pointer;
    border: 1px solid transparent;
    outline: none;
}

.c-input:hover, .c-input:focus {
    border: 1px solid white;
}

.close-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    cursor: pointer;
    transform: translateY(-50%);
    transition: .3s;
    font-size: 14px;
}

.close-icon:hover {
    color: red;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
    opacity: 0;
}
</style>
