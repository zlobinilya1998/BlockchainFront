<template>
    <transition name="fade">
        <slot/>
    </transition>
</template>

<script lang="ts">

</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: .4s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
