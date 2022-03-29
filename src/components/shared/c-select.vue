<template>
    <div class="ci-select">
        <c-btn block v-if="modelValue" @click="toggleVisibility" v-html="modelValue[itemTitle]" :class="{'inverted': showItems}"/>
        <transition name="slide-fade" appear mode="out-in">
            <div class="ci-select-items" v-if="showItems" style="position: absolute;width: 100%;transition: all .3s ease;margin-top: 10px;">
                <c-btn block v-for="(option,index) in items" :key="index" @click="selectItem(option)" v-html="option[itemTitle]"/>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import {defineProps, defineEmits, onMounted, toRefs, ref} from "vue";

interface Props {
    items: {}[],
    itemTitle: string,
    itemValue: any,
    modelValue: any,
}
const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue'])

const showItems = ref(false)
const toggleVisibility = () => showItems.value = !showItems.value;

const forceSelect = () => selectItem(items.value[0])
const {itemTitle,items, modelValue} = toRefs(props);
const selectItem = (item: any) => {
    emit('update:modelValue', item);
    showItems.value = false;
}


onMounted(forceSelect)

</script>

<style scoped>
.ci-select {
    display: inline-block;
    background: #42414d;
    color: white;
    position: relative;
    min-width: 100px;
}
.ci-select-items {
    max-height: 220px;
    overflow-y: scroll;
    scrollbar-width: thin;
}
</style>
