<template>
    <router-link
        :to="{ name: 'Product', params: { id: item.id } }"
        class="flex flex-col rounded-md hover:bg-stone-300 p-3 md:p-4"
    >
        <div class="mb-3 relative">
<!--            <div class="absolute bg-red-600 right-2 -top-2 text-sm text-white px-3 py-1 rounded-lg">New</div>-->
            <img :src="host+item.image" class="rounded-xl object-cover w-full"/>
        </div>
        <div class="h-28 md:h-32 flex flex-col justify-between">
            <div>
                <p class="text-sm md:text-lg md:leading-tight line-clamp-2 mb-3">
                    {{item.title}}
                </p>
                <div class="flex gap-x-1 justify-center items-center bg-gray-200 w-20 p-1 rounded">
                    <img src="/icons/fire.svg" class="w-4 md:w-5">
                    <span class="font-light text-xs md:text-sm">{{item.kcal}}ккал</span>
                </div>
            </div>
            <div class="w-full flex justify-between items-end">
                <span class="text-xl font-medium">{{item.price}}₸</span>
                <div v-if="!isInCart" class="text-xl text-white flex justify-center items-center bg-stone-900 hover:bg-stone-700 drop-shadow-lg cursor-pointer rounded-full w-8 h-8 md:w-10 md:h-10">
                    <img src="/icons/add.svg" class="w-6 md:w-7"/>
                </div>
                <div
                    v-else
                    class="flex justify-between items-center w-20 md:w-28"
                >
                    <div class="bg-black p-1 rounded-md cursor-pointer" @click.prevent="decrement">
                        <img src="/icons/minus.svg" class="w-4 md:w-6"/>
                    </div>
                    <span class="text-lg md:text-2xl font-medium">{{getQuantity}}</span>
                    <div class="bg-black p-1 rounded-md cursor-pointer" @click.prevent="increment">
                        <img src="/icons/add.svg" class="w-4 md:w-6"/>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "ProductCard",
    props: {item: Object},
    computed: {
        host() {
            return this.$store.state.host
        },
        isInCart() {
            return this.$store.getters.isInCart(this.item.id)
        },
        getQuantity() {
            return this.$store.getters.getItemQuantity(this.item.id)
        }
    },
    methods: {
        increment() {
            this.$store.dispatch('increment', this.item.id);
        },
        decrement() {
            this.$store.dispatch('decrement', this.item.id);
        }
    }
}
</script>
