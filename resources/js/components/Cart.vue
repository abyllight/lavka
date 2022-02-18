<template>
    <div>
        <div v-if="cart.length > 0" class="md:flex md:justify-between md:items-start md:max-w-4xl md:mx-auto">
            <div class="flex flex-col gap-y-10 max-w-sm w-full mb-56 md:mb-0">
                <div
                    v-for="item in cart"
                    :key="item.id"
                    class="flex items-center gap-x-3 max-w-sm"
                >
                    <div class="h-24 w-24 shrink-0">
                        <img :src="host + item.image" class="object-cover w-full shadow-xl rounded-xl">
                    </div>
                    <div class="w-full">
                        <div class="flex items-start justify-between mb-3">
                            <p class="w-48 leading-tight line-clamp-2 text-lg">{{item.title}}</p>
                            <img src="/icons/close.svg" width="24" class="cursor-pointer" @click="remove(item.id)"/>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="flex gap-x-3">
                                <div class="bg-black rounded-md p-1 cursor-pointer" @click="decrement(item.id)">
                                    <img src="/icons/minus.svg" width="20"/>
                                </div>
                                <span class="text-lg font-medium">{{item.q}}</span>
                                <div class="bg-black rounded-md p-1 cursor-pointer" @click="increment(item.id)">
                                    <img src="/icons/add.svg" width="20"/>
                                </div>
                            </div>

                            <span class="text-xl font-medium">{{item.total}}₸</span>
                        </div>
                    </div>
                </div>

            <!-- CUTLERY -->
                <div class="flex items-center gap-x-3 max-w-sm">
                    <div class="h-24 w-24 shrink-0">
                        <img :src="cutlery.image" class="object-cover w-full shadow-xl rounded-xl">
                    </div>
                    <div class="w-full">
                        <p class="w-48 leading-tight line-clamp-2 text-lg mb-3">{{cutlery.title}}</p>

                        <div class="flex items-center justify-between">
                            <div class="flex gap-x-3">
                                <div class="bg-black rounded-md p-1 cursor-pointer" @click="decrementCutlery">
                                    <img src="/icons/minus.svg" width="20"/>
                                </div>
                                <span class="text-lg font-medium">{{cutlery.q}}</span>
                                <div class="bg-black rounded-md p-1 cursor-pointer" @click="incrementCutlery">
                                    <img src="/icons/add.svg" width="20"/>
                                </div>
                            </div>

                            <span class="text-xl font-medium">{{cutlery.total}}₸</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-gray-200 rounded-t-2xl md:rounded-md fixed bottom-0 inset-x-0 md:relative md:w-80 px-5 py-6">
                <div class="mb-4 md:mb-6">
                    <div class="flex justify-between mb-1 text-gray-700">
                        <p>Сумма заказа</p>
                        <p>{{getCartTotalPrice}}₸</p>
                    </div>
                    <div class="flex justify-between mb-1 text-gray-700">
                        <p>Приборы</p>
                        <p>{{cutlery.total}}₸</p>
                    </div>
                    <div class="flex justify-between mb-4 text-gray-700">
                        <p>Доставка</p>
                        <p>{{delivery_fee}}₸</p>
                    </div>
                    <div class="flex justify-between border-t border-gray-600 border-dashed pt-2 font-medium text-lg">
                        <p>Итого</p>
                        <p>{{getTotal}}₸</p>
                    </div>
                </div>
                <div>
                    <router-link to="/checkout"
                        @click=""
                        class="flex items-center justify-center gap-x-3 uppercase font-medium bg-stone-800 hover:bg-stone-700 cursor-pointer text-sm text-white py-3.5 rounded-md shadow"
                    >
                        Оформить заказ
                        <img src="/icons/right.svg" class="w-5"/>
                    </router-link>
                </div>
            </div>
        </div>
        <div
            v-else
            class="flex justify-center h-96 items-center"
        >
            <div class="text-center">
                <div class="rounded-full bg-stone-300 w-28 h-28 flex justify-center items-center mb-5">
                    <img src="/icons/bag.svg">
                </div>
                <p class="text-xl">Корзина пуста</p>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from "vuex";

export default {
    name: "Cart",
    computed: {
        ...mapState(['cart', 'cutlery', 'delivery_fee']),
        ...mapGetters(['getCartTotalPrice', 'getTotal']),
        host() {
            return this.$store.state.host
        }
    },
    methods: {
        increment(id) {
            this.$store.dispatch('increment', id);
        },
        decrement(id) {
            this.$store.dispatch('decrement', id);
        },
        remove(id){
            this.$store.dispatch('removeFromCart', id);
        },
        incrementCutlery() {
            this.$store.dispatch('incrementCutlery');
        },
        decrementCutlery() {
            this.$store.dispatch('decrementCutlery');
        }
    }
}
</script>
