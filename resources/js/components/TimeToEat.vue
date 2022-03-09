<template>
    <div class="bg-zinc-900 ">
        <div class="max-w-6xl px-4
        flex flex-col lg:flex-row items-center justify-between
        space-y-16 lg:space-y-0 lg:space-x-12
        mx-auto py-16"
        >
            <div class="max-w-lg lg:w-1/2">
                <img src="/images/tte.jpg"/>
            </div>

            <div class="lg:w-1/3 text-white text-center lg:text-left">
                <h1 class="text-4xl font-medium mb-3">Время Есть</h1>
                <p class="mb-5">Полезные блюда</p>
                <div class="mt-4 flex flex-wrap text-gray-900 mb-10">
                    <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Стейки</div>
                    <div class="text-sm bg-gray-300 px-3 py-1 rounded-lg inline-block m-1 bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">Полуфабрикаты</div>
                </div>
                <router-link :to="{ name: 'Brand', params: { id: 3 } }" class="bg-primary px-7 py-2.5 text-white uppercase text-sm rounded-lg">Посмотреть</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TimeToEat"
}
</script>
