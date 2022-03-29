<template>
    <div class="c-radio">
        <c-btn v-for="(item,index) in items" :key="index" v-html="item[itemTitle]" @click="selectItem(item)" :class="{'inverted': modelValue && modelValue.value === item[itemValue]}"/>
    </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, onMounted, toRefs} from "vue";

interface Props {
    items: {}[],
    itemTitle: string,
    itemValue: any,
    modelValue: any,
}
const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue'])

const {itemTitle,items, modelValue} = toRefs(props);
const selectItem = (item: any) => emit('update:modelValue', item);
const forceSelect = () => selectItem(items.value[0])
onMounted(forceSelect)
</script>

<style scoped>
.c-radio {
    display: flex;
}
</style>
