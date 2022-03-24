<template>
    <div class="max-w-6xl px-4
        flex flex-col lg:flex-row items-center justify-between
        space-y-16 lg:space-y-0 lg:space-x-12
        mx-auto py-16"
    >
        <div class="lg:w-1/3 text-center lg:text-left">
            <h1 class="text-4xl font-medium mb-3">Mousse Cakes</h1>
            <p class="mb-5">Муссовые десерты</p>
            <div class="mt-4 flex flex-wrap text-gray-900 mb-10">
                <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-gray-300 bg-opacity-60 backdrop-filter backdrop-blur-lg">Торты</div>
                <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-gray-300 bg-opacity-60 backdrop-filter backdrop-blur-lg">Пирожные</div>
            </div>
            <router-link :to="{ name: 'Brand', params: { id: 2 } }" class="bg-primary px-7 py-2.5 text-white uppercase text-sm rounded-lg">Посмотреть</router-link>
<!--            <router-link :to="{ name: 'Builder'}" class="bg-primary px-7 py-2.5 text-white uppercase text-sm rounded-lg">Builder</router-link>-->

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
