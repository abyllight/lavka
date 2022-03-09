<template>
    <div class="max-w-6xl px-4
        flex flex-col lg:flex-row items-center justify-between
        space-y-16 lg:space-y-0 lg:space-x-12
        mx-auto py-16"
    >
        <div class="lg:w-1/3 text-center lg:text-left">
            <h1 class="text-4xl font-medium mb-3">Mousse Cakes</h1>
            <p class="mb-5">Полезные блюда</p>
            <div class="mt-4 flex flex-wrap text-gray-900">
                <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Торты</div>
                <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Пирожные</div>
            </div>
        </div>
        <div class="max-w-lg lg:w-1/2">
            <img src="/images/mc.jpg"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "MousseCakes"
}
</script>
