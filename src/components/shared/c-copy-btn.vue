<template>
    <div style="position: relative;display: inline-block">
        <c-btn v-bind="$attrs" @click="copy">
            <slot>Копировать ссылку</slot>
        </c-btn>
        <c-fade-transition appear mode="out-in">
            <c-btn noHover v-if="isCopied" v-html="'Cкопировано'" class="copy-btn-tooltip" @click="isCopied = false"/>
        </c-fade-transition>
<!--        <input-->
<!--            :id="clipboardId"-->
<!--            class="invisibleInput"-->
<!--            :value="href"-->
<!--        />-->
    </div>
</template>

<script setup lang="ts">
import {defineProps, ref, defineEmits} from "vue";
import CFadeTransition from "@/components/shared/c-fade-transition.vue";

interface Props {
    href: string,
}

const emit = defineEmits(['click']);
const props = defineProps<Props>();

const isCopied = ref<Boolean>(false);


const copy = () => {
    emit('click');
    isCopied.value = true;
    console.log(props.href)
    setTimeout(() => isCopied.value = false, 3000)
    // try {
    //     CopyFromElement(this.clipboardId);
    // } catch {
    // }
}

</script>

<style scoped>
.copy-btn-tooltip {
    display: block;
    position: absolute;
    width: 100%;
    bottom: -50px;
    border: 1px solid black !important;
}
</style>
