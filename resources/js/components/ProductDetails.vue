<template>
    <product-detail-skeleton v-if="isEmpty"></product-detail-skeleton>
    <div v-if="!isEmpty">
        <div class="flex flex-col md:flex-row items-start md:space-x-10 space-y-8 max-w-4xl mx-auto">
            <div class="mx-auto">
                <div>
                    <img :src="host+item.image" class="object-cover w-72 h-72 md:w-full md:max-w-2xl md:h-auto shadow-xl rounded-xl"/>
                </div>
            </div>

            <div class="relative mb-24 md:mb-0 w-full">
                <p class="text-3xl font-medium mb-3 leading-tight">{{item.title}}</p>
                <div class="mb-6 flex justify-around font-light max-w-sm bg-gray-300 py-3 rounded-md">
                    <div class="flex flex-col">
                        <span class="font-medium -mb-1.5">{{item.weight}}</span>
                        грамм
                    </div>
                    <div class="flex flex-col">
                        <span class="font-medium -mb-1.5">{{item.kcal}}</span>
                        ккал
                    </div>
                    <div class="flex flex-col">
                        <span class="font-medium -mb-1.5">{{item.fat}}</span>
                        жиры
                    </div>
                    <div class="flex flex-col">
                        <span class="font-medium -mb-1.5">{{item.protein}}</span>
                        белки
                    </div>
                    <div class="flex flex-col">
                        <span class="font-medium -mb-1.5">{{item.carbohydrate}}</span>
                        углеводы
                    </div>
                </div>

                <p class="mb-10">{{item.composition}}</p>

                <div class="fixed bottom-0 rounded-t-2xl inset-x-0 bg-stone-300 drop-shadow-lg py-5 px-6 md:relative md:p-0 md:bg-transparent">
                    <div class="flex items-center justify-between md:justify-start space-x-6 md:space-x-8">
                        <div class="flex flex-col">
                            <span v-if="isInCart" class="text-xs font-bold text-gray-600 md:hidden">Итого</span>
                            <span class="text-2xl font-medium">{{getTotal}}₸</span>
                        </div>
                        <div
                            v-if="!isInCart"
                            @click="addToCart(item)"
                            class="flex items-center justify-center uppercase font-medium bg-stone-800 hover:bg-stone-700 cursor-pointer text-sm text-white py-3.5 w-48 rounded-md shadow"
                        >
                            <cart-icon class="w-5 h-5 mr-2"/>
                            Добавить
                        </div>
                        <plus-minus v-else :item="item" :large="true"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductDataService from "../services/ProductDataService";
import ProductDetailSkeleton from "./skeletons/ProductDetailSkeleton";
import CartIcon from "./icons/CartIcon";
import PlusMinus from "./PlusMinus";

export default {
    name: "ProductDetails",
    components: {PlusMinus, CartIcon, ProductDetailSkeleton},
    props: {
        id: Number
    },
    data: () => ({
        item: {}
    }),
    mounted() {
        this.getItem()
    },
    computed: {
        host() {
            return this.$store.state.host
        },
        isEmpty(){
            return Object.keys(this.item).length === 0
        },
        isInCart() {
            return this.$store.getters.isInCart(this.id)
        },
        getQuantity() {
            return this.$store.getters.getItemQuantity(this.id)
        },
        getTotal() {
            let total = this.$store.getters.getItemTotal(this.id)
            return total > 0 ? total : this.item.price
        }
    },
    methods: {
        getItem() {
            ProductDataService.get(this.id)
                .then((response) => {
                    this.item = response.data
                })
        },
        addToCart(item) {
            this.$store.dispatch('addToCart', item);
        },
        increment() {
            this.$store.dispatch('increment', this.id);
        },
        decrement() {
            this.$store.dispatch('decrement', this.id);
        }
    }
}
</script>
