<template>
    <div class="fixed z-20 w-full shadow-md bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg">
        <div class="max-w-6xl mx-auto p-4 flex items-center justify-between">
        <!-- Left -->
            <div>
                <div class="md:hidden">
                    <router-link :to="currentRoute === 'Checkout' ? '/cart' : '/'">
                        <div v-if="currentRoute === 'Product' || currentRoute === 'Checkout'">
                            <div class="p-2 rounded-md bg-white shadow cursor-pointer">
                                <back-icon class="w-5 h-5"/>
                            </div>
                        </div>
                        <p
                            v-else
                            class="font-medium text-xl"
                        >
                            ВкусСити
                        </p>
                    </router-link>
                </div>
                <div class="hidden md:block font-medium text-xl">
                    <router-link to='/'>
                        ВкусСити
                    </router-link>
                </div>
            </div>

            <!-- Right -->
            <div>
                <router-link to="/cart">
                    <div class="relative">
                        <bag-icon></bag-icon>
                        <div class="bg-primary w-5 h-5 absolute -top-2 -right-2 rounded-full flex justify-center items-center text-xs text-white font-medium">
                            {{getCartTotalQuantity}}
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import BagIcon from "./icons/BagIcon";
import BackIcon from "./icons/BackIcon";

export default {
    name: "Navbar",
    components: {BackIcon, BagIcon},
    computed: {
        ...mapGetters(['getCartTotalQuantity']),
        currentRoute() {
            return this.$route.name
        }
    }
}
</script>
