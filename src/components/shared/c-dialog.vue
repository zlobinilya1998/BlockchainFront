<template>
    <transition name="fade" appear>
        <div v-if="props.modelValue" class="modal">
            <div class="modal-content" :style="{maxWidth: props.maxWidth ?? '650px'}">
                <slot/>
                <c-icon v-if="props.closable" v-html="'ci-cancel'" class="close-icon" @click="closeDialog"/>
            </div>
        </div>
    </transition>
</template>

<script setup lang="ts">
import {defineEmits, defineProps} from "vue";

interface Props {
    modelValue: boolean,
    maxWidth?: string,
    closable?: boolean,
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue'])
const closeDialog = () => emit('update:modelValue', false)


</script>

<style scoped>
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}

.modal-content {
    background: #42414d;
    margin: 15% auto;
    position: relative;
    padding: 30px;
    border: 1px solid #888;
}
.close-icon {
    position: absolute;
    right: 10px;
    top: 20px;
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
