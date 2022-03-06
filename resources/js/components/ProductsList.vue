<template>
    <tags-skeleton v-if="brands.length === 0"></tags-skeleton>
    <cards-skeleton v-if="products.length === 0"></cards-skeleton>
    <div>
        <div class="mb-10 flex w-full overflow-x-scroll space-x-4 hide-scroll-bar">
            <router-link
                v-for="brand in brands"
                :key="brand.id"
                :to="{name: 'Products', hash: '#'+brand.title}"
                class="flex-shrink-0 bg-gray-300 inline-block py-2 px-6 rounded-lg cursor-pointer hover:bg-gray-200"
            >
                {{brand.title}}
            </router-link>
        </div>
        <div :id="brand.title" v-for="brand in brands" class="mb-10">
            <h2 class="text-2xl font-medium mb-4">{{brand.title}}</h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 md:gap-y-8 lg:gap-x-8 ">
                <product-card v-for="item in brand.products" :item="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import CardsSkeleton from "./skeletons/CardsSkeleton";
import TagsSkeleton from "./skeletons/TagsSkeleton";
import ProductCard from "./ProductCard";
import ProductDataService from "../services/ProductDataService";
import BrandDataService from "../services/BrandDataService";
export default {
    name: "ProductsList",
    components: {ProductCard, CardsSkeleton, TagsSkeleton},
    data: () => ({
        brands: [],
        products: []
    }),
    mounted() {
        this.fetchBrands()
        this.fetchProducts()
    },
    methods: {
        fetchBrands(){
            BrandDataService.getAll()
                .then((response) => {
                    this.brands = response.data
                })
        },
        fetchProducts(){
            ProductDataService.getAll()
                .then((response) => {
                    this.products = response.data
                })
        }
    }
}
</script>
<style scoped>
.hide-scroll-bar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
    display: none;
}
</style>
