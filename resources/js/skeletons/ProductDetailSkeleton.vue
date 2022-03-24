<template>
    <div>
        <div class="flex flex-col md:flex-row items-center gap-x-8 gap-y-5 animate-pulse">
            <div class="w-full md:w-1/2">
                <div class="h-64 md:h-96 bg-gray-300 rounded-md"></div>
            </div>

            <div class="w-full md:w-1/2">
                <div class="h-8 bg-gray-300 max-w-md rounded-md mb-5"></div>
                <div class="mb-5 h-6 max-w-sm bg-gray-300 rounded-md"></div>
                <div class="h-32 max-w-sm bg-gray-300 rounded-md mb-8"></div>
                <div class="mb-5 h-10 w-40 bg-gray-300 rounded-md"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductDetailSkeleton",
}
</script>
