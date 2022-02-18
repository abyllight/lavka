<template>
    <div v-if="loading" class="h-screen w-full bg-black opacity-75 fixed inset-0 z-50 flex flex-col items-center justify-center">
        <div class="loader ease-linear rounded-full border-4 border-t-4 border-white h-16 w-16 mb-4"></div>
        <h2 class="text-center text-white text-xl font-semibold">Идет обработка заказа...</h2>
    </div>
</template>

<script>
export default {
    name: "Loading",
    props: {loading: Boolean}
}
</script>

<style scoped>
.loader {
    border-top-color: #000000;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
