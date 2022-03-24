<template>
    <div class="fixed z-20 w-full shadow-lg bg-zinc-900">
        <div class="max-w-6xl text-white mx-auto px-4 py-3.5 flex items-center justify-between">
            <!-- Left -->
            <div>
                <div class="">
                    <router-link :to="to">
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
<!--                <div class="hidden md:block font-medium text-xl">
                    <router-link to='/'>
                        ВкусСити
                    </router-link>
                </div>-->
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
import BackIcon from "../icons/BackIcon";
import BagIcon from "../icons/BagIcon";
import store from "../store";

export default {
    name: "Navbar",
    components: {BagIcon, BackIcon},
    computed: {
        ...mapGetters(['getCartTotalQuantity']),
        currentRoute() {
            return this.$route.name
        },
        to() {
            let to = ''
            switch (this.$route.name) {
                case 'Checkout':
                    to = '/cart'
                    break
                case 'Product':
                    to = this.$router.options.history.state.back
                    break
                default:
                    to = '/'
            }

            return to
        }
    },
    mounted() {
        this.$store.dispatch('me').then(() => {
        })
    }
}
</script>
