<template>
    <div class="w-full h-full bg-black fixed inset-0 z-40 bg-opacity-70 flex justify-center items-center p-4">
        <div class="max-w-sm w-full px-4 py-8 bg-white rounded-lg flex flex-col items-center">
            <component :is="icon" class="mb-1"></component>
            <p class="text-lg mb-6">{{message}}</p>
            <router-link
                :to="to"
                class="bg-gray-300 px-4 py-2 rounded-md text-sm"
                @click="$emit('close-modal')">{{btn_text}}
            </router-link>
        </div>
    </div>
</template>

<script>
import CheckIcon from "../icons/CheckIcon";
import WarningIcon from "../icons/WarningIcon";
export default {
    name: "CheckoutModal",
    components: {CheckIcon, WarningIcon},
    props: {
        status: Boolean,
        message: String
    },
    computed: {
        icon() {
            return this.status ? 'check-icon' : 'warning-icon'
        },
        to() {
            return this.status ? '/' : '/checkout'
        },
        btn_text() {
            return this.status ? 'Вернуться в меню' : 'Закрыть'
        }
    }
}
</script>
