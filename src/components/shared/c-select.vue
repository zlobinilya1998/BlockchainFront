<template>
    <div class="ci-select">
        <div v-for="(option,index) in props.items" :key="index" @click="selectItem(option)" v-html="option[props.itemTitle]"/>
        <c-icon v-html="'ci-cog'"/>
    </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, onMounted} from "vue";
import CIcon from "@/components/shared/c-icon.vue";

interface Props {
    items: {}[],
    itemTitle: string,
    itemValue: any,
    value: any,
}
const props = defineProps<Props>();
const emit = defineEmits(['input'])
const selectItem = (item: any) => emit('input', item)
onMounted(()=> selectItem(props.items[0]))

</script>

<style scoped>
.ci-select {
    background: #42414d;
    color: white;
}
</style>
