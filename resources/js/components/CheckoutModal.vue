<template>
    <div class="w-full h-full bg-black fixed inset-0 z-40 bg-opacity-70 flex justify-center items-center p-4">
        <div class="max-w-sm w-full px-4 py-8 bg-white rounded-lg flex flex-col items-center">
            <img :src="icon" class="w-24 mb-5">
            <p class="text-lg mb-5">{{message}}</p>
            <router-link
                v-if="status"
                to="/"
                class="bg-gray-300 px-4 py-2 rounded-md text-sm"
                @click="$emit('close-modal')">Вернуться к лавке
            </router-link>
            <router-link
                v-else
                to="/checkout"
                class="bg-gray-300 px-4 py-2 rounded-md text-sm"
                @click="$emit('close-modal')">Закрыть
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "CheckoutModal",
    props: {
        status: Boolean,
        message: String
    },
    data: () => ({
        success_icon: '/icons/check.svg',
        alert_icon: '/icons/warning.svg',
    }),
    computed: {
        icon() {
            return this.status ? this.success_icon : this.alert_icon
        }
    }
}
</script>
