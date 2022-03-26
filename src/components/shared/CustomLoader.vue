<template>
    <div class="rotated" style="width: max-content;margin: 20px auto">
        <i class="ci ci-refresh" style="font-size: 36px"/>
    </div>
</template>

<script>
export default {
    name: "CustomLoader"
}
</script>

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
