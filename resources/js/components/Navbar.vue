<template>
    <div class="fixed z-20 w-full bg-gray-200">
        <div class="max-w-6xl mx-auto py-5 px-4 flex items-center justify-between">
            <router-link to="/" class="font-medium text-2xl">ЛАВКА</router-link>
<!--            <router-link
                :to="currentRoute === 'Checkout' ? '/cart' : '/'"
            >
                <p
                    v-if="currentRoute === 'Home'"
                    class="font-medium text-2xl"
                >
                    ЛАВКА
                </p>
                <div v-else>
                    <div class="p-2 rounded-md bg-white shadow cursor-pointer">
                        <img src="/icons/back.svg" class="w-5"/>
                    </div>
                </div>
            </router-link>-->
            <router-link to="/cart">
                <div class="relative">
                    <bag-icon></bag-icon>
                    <div class="bg-black w-5 h-5 absolute -top-2 -right-2 rounded-full flex justify-center items-center text-xs text-white font-medium">
                        {{getCartTotalQuantity}}
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import BagIcon from "./icons/BagIcon";

export default {
    name: "Navbar",
    components: {BagIcon},
    computed: {
        ...mapGetters(['getCartTotalQuantity']),
        currentRoute() {
            return this.$route.name
        }
    }
}
</script>
