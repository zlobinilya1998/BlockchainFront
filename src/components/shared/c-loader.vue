<template>
    <div class="rotated c-loader">
        <c-icon v-html="'ci-refresh'" class="c-loader-icon"/>
    </div>
</template>


<style scoped>
.rotated {
    animation: rotation .5s infinite linear;
}

.c-loader {
    width: max-content;
    margin: 20px auto;
}

.c-loader-icon {
    font-size: 3.6rem;
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
