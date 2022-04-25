<template>
    <div v-if="this.$store.state.footer" class="bg-zinc-900 text-white">
        <div class="max-w-6xl mx-auto p-4">
            <div class="flex items-center justify-between text-sm py-3">
                <p><span class="font-light">2022 ©</span> <span class="font-medium">ВкусСити</span></p>
                <p>Все права защищены</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>
