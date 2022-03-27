<template>
    <div class="c-radio">
        <c-btn v-for="(item,index) in items" :key="index" v-html="item[itemTitle]" @click="selectItem(item)" :class="{'inverted': value.value === item[itemValue]}"/>
    </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, onMounted, toRefs} from "vue";

interface Props {
    items: {}[],
    itemTitle: string,
    itemValue: any,
    value: any,
}
const props = defineProps<Props>();
const emit = defineEmits(['input'])

const {itemTitle,items,value} = toRefs(props);
const selectItem = (item: any) => emit('input', item);
const forceSelect = () => selectItem(items.value[0])

onMounted(forceSelect)
</script>

<style scoped>
.c-radio {
    display: flex;
}
</style>
