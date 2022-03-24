<template>
    <div class="max-w-6xl mx-auto px-4 py-20 relative">

        <tags-skeleton v-if="categories.length === 0"></tags-skeleton>

        <div class="w-full bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg mb-10" :class="{'fixed left-0 top-14 z-10':isScrolledUp}">
            <div class="max-w-6xl mx-auto" :class="{'px-4':isScrolledUp}">
                <div class="flex space-x-5 py-3.5 z-10 overflow-x-scroll hide-scroll-bar">
                    <router-link :to="{name: 'Brand', hash: '#'+c.id}" v-for="c in categories" class="shrink-0 bg-gray-300 hover:bg-gray-200 rounded-lg px-4 py-1 text-sm">{{c.title}}</router-link>
                </div>
            </div>
        </div>

        <div>
            <div v-for="products in brand.products" :id="products[0].category_id" class="mb-14">
                <h1 class="font-medium text-lg uppercase mb-5">{{category(products[0].category_id)}}</h1>
                <products-list :products="products"></products-list>
            </div>
        </div>

    </div>
</template>

<script>
import BrandDataService from "../services/BrandDataService";
import ProductsList from "../components/ProductsList";
import TagsSkeleton from "../skeletons/TagsSkeleton";

export default {
    name: "Brand",
    components: {TagsSkeleton, ProductsList},
    props: {
        id: Number
    },
    data: () => ({
        brand: {},
        categories: [],
        isScrolledUp: false
    }),
    mounted() {
        this.getBrand()
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        getBrand() {
            BrandDataService.get(this.id)
                .then(response => {
                    this.brand = response.data
                    this.categories = this.brand.categories
                })
        },
        handleScroll() {
            this.isScrolledUp = window.scrollY > 20
        },
        category(id) {
            return this.categories.find(cat => cat.id === id).title
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
