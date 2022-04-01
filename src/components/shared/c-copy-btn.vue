<template>
    <div style="position: relative;display: inline-block">
        <c-btn v-bind="$attrs" @click="copy">
            <slot>Копировать ссылку</slot>
        </c-btn>
        <c-fade-transition appear mode="out-in">
            <c-btn noHover v-if="isCopied" v-html="'Cкопировано'" class="copy-btn-tooltip" @click="isCopied = false"/>
        </c-fade-transition>
        <input
            style="display: none"
            :id="clipboardId"
            class="invisibleInput"
            :value="props.href"
        />
    </div>
</template>

<script setup lang="ts">
import {defineProps, ref, defineEmits, computed} from "vue";
import CFadeTransition from "@/components/shared/c-fade-transition.vue";
import {CopyFromElement} from "@/helpers";

interface Props {
    href: string,
}

const emit = defineEmits(['click']);
const props = defineProps<Props>();

const isCopied = ref<Boolean>(false);
const clipboardId = computed(() => {
    return `copyLink#${props.href}`
})

const copy = () => {
    emit('click');
    try {
        CopyFromElement(clipboardId.value);
        isCopied.value = true;
        setTimeout(() => isCopied.value = false, 3000)
    } catch(e) {
        console.log(e)
    }
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
