<template>
    <div class="rotated" style="width: max-content;margin: 20px auto">
        <c-icon v-html="'ci-refresh'"  style="font-size: 36px"/>
    </div>
</template>


<style scoped>
.rotated {
    animation: rotation .5s infinite linear;
}
@keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
}
</style>
