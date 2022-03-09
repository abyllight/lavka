<template>
    <div class="bg-zinc-900">
        <div class="max-w-6xl px-4 lg:h-[720px] flex flex-col lg:flex-row items-center justify-center space-y-12 lg:space-y-0 lg:space-x-6 mx-auto relative py-24 lg:py-0">

            <div class="text-white text-center lg:text-left">
                <h1 class="text-4xl lg:text-6xl font-medium mb-4">Вкус Сити</h1>
                <p class="mb-10">Вкусная еда в вашем городе <br class="lg:hidden">с доставкой на дом</p>
<!--                <router-link
                    to="/products"
                    class="bg-primary rounded-lg px-8 py-3 w-32 text-sm uppercase font-medium cursor-pointer hover:bg-red-600"
                >
                    Заказать
                </router-link>-->
            </div>

            <div class="md:w-2/3">
                <img src="/images/main.jpg"/>
            </div>
        </div>
    </div>
<!--    <div class="bg-zinc-900 text-white w-full overflow-hidden">
        <div class="max-w-6xl w-full px-4 mx-auto relative
            flex flex-col justify-center
            overflow-hidden lg:overflow-visible lg:h-[720px]"
        >

            <div class="max-w-sm w-full text-center mt-32 lg:mt-0 lg:absolute lg:z-10 lg:inset-x-0 mx-auto">
                <h1 class="text-4xl lg:text-6xl font-medium mb-4">Вкусная Еда в <br> Вашем Городе</h1>
                <p class="mb-7">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <router-link to="/products" class="bg-primary rounded-lg px-8 py-3 w-32 text-sm uppercase font-medium cursor-pointer hover:bg-red-600">Заказать</router-link>
            </div>

            <div class="relative h-[460px] w-80 mx-auto
                lg:absolute lg:w-full inset-0 lg:h-full"
            >
                <img src="/images/vr6.jpg" class="w-28 lg:w-48 rounded-xl absolute -left-8 top-4 lg:left-auto lg:-right-8 lg:-top-16">
                <img src="/images/e2.jpg" class="w-24 lg:w-32 rounded-3xl shadow-xl absolute top-12 left-1/3">
                <img src="/images/vr2.jpg" class="w-28 lg:w-48 lg:rotate-90 rounded-xl absolute -right-4 top-10 lg:-top-24 lg:right-80">

                <img src="/images/vr1.jpg" class="w-28 lg:w-48 rounded-xl top-40 rotate-90 lg:rotate-0 absolute left-5 lg:-left-40 lg:top-72">
                <img src="/images/e3.jpg" class="w-24 lg:w-32 rounded-3xl shadow-xl absolute right-8 top-52 lg:top-64 lg:right-32">

                <img src="/images/vr7.jpg" class="w-40 lg:w-48 rounded-xl absolute -bottom-16 -left-24 lg:top-0 lg:left-24">
                <img src="/images/e1.jpg" class="w-24 lg:w-32 rounded-3xl shadow-xl absolute left-24 bottom-12 lg:bottom-72 lg:left-40">
                <img src="/images/vr8.jpg" class="w-28 lg:w-48 absolute rounded-xl rotate-90 lg:rotate-0 bottom-0 -right-8 lg:bottom-32 lg:-right-24">

                <img src="/images/vr3.jpg" class="hidden lg:block w-48 absolute rounded-xl rotate-90 -bottom-10 left-1/3">
                <img src="/images/vr4.jpg" class="hidden lg:block w-48 absolute rounded-xl -bottom-10 right-56">
                <img src="/images/vr5.jpg" class="hidden lg:block w-48 absolute rounded-xl -bottom-24 left-0">
            </div>
        </div>
    </div>-->
</template>

<script>
export default {
    name: "Hero"
}
</script>
