<template>
    <router-view/>
</template>

<style>
body {
    color: white;
    background: #000000;
}
.rotated {
    animation: rotation 2s infinite linear;
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
