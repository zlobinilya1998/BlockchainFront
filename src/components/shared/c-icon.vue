<template>
        <i class="ci" ref="icon">
            <slot/>
        </i>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const icon = ref(null)

onMounted(() => {
    icon.value.classList.add(icon.value.innerText.trim());
    icon.value.innerText = ''
})
</script>



