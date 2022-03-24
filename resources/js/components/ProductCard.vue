<template>
    <router-link
        :to="{ name: 'Product', params: { id: item.id } }"
        class="flex flex-col rounded-xl hover:bg-stone-300 p-2 md:p-4"
    >
        <div class="mb-2 md:mb-3 relative">
            <img :src="host+item.image" class="rounded-xl object-cover w-full h-36 md:h-48 lg:h-56"/>
        </div>
        <div class="h-28 md:h-32 flex flex-col justify-between">
            <div>
                <p class="text-sm md:text-lg md:leading-tight line-clamp-2 mb-2 md:mb-3">
                    {{item.title}}
                </p>
                <div class="flex gap-x-1 justify-center items-center bg-gray-200 w-20 md:w-24 py-1 rounded">
                    <fire-icon class="w-4 h-4 md:w-5 md:h-5"/>
                    <span class="font-light text-xs md:text-sm">{{item.kcal}} ккал</span>
                </div>
            </div>
            <div class="w-full flex justify-between items-end">
                <span class="text-xl font-medium">{{item.price}}₸</span>
                <div v-if="!isInCart" class="text-xl text-white flex justify-center items-center bg-primary hover:bg-stone-700 drop-shadow-lg cursor-pointer rounded-full w-8 h-8 md:w-10 md:h-10">
                    <add-icon class="w-6 md:w-7"/>
                </div>
                <plus-minus v-else :id="item.id"/>
            </div>
        </div>
    </router-link>
</template>

<script>
import AddIcon from "../icons/AddIcon";
import FireIcon from "../icons/FireIcon";
import PlusMinus from "./PlusMinus";
export default {
    name: "ProductCard",
    components: {PlusMinus, FireIcon, AddIcon},
    props: {item: Object},
    computed: {
        host() {
            return this.$store.state.host
        },
        isInCart() {
            return this.$store.getters.isInCart(this.item.id)
        }
    }
}
</script>
