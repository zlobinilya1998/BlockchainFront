<template>
    <div class="ci-select">
        <c-btn block v-if="value" @click="toggleVisibility" v-html="value[itemTitle]"/>
        <transition name="slide-fade" appear mode="out-in">
            <div v-if="showItems" style="position: absolute;width: 100%;transition: all .3s ease;">
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
    value: any,
}
const props = defineProps<Props>();
const showItems = ref(false)
const toggleVisibility = () => showItems.value = !showItems.value;

const forceSelect = () => selectItem(items.value[0])
const {itemTitle,items, value} = toRefs(props);
const emit = defineEmits(['input'])
const selectItem = (item: any) => {
    emit('input', item);
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
.slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
}
</style>
