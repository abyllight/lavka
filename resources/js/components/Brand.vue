<template>
    <div class="max-w-6xl mx-auto p-4 mt-20 md:mt-24">
        <h1 class="text-2xl font-medium mb-8">{{brand.title}}</h1>
        <products-list :products="products"></products-list>
    </div>
</template>

<script>
import BrandDataService from "../services/BrandDataService";
import ProductsList from "./ProductsList";

export default {
    name: "Brand",
    components: {ProductsList},
    props: {
        id: Number
    },
    data: () => ({
        brand: {},
        products: []
    }),
    mounted() {
        this.getBrand()
    },
    methods: {
        getBrand() {
            BrandDataService.get(this.id)
                .then(response => {
                    this.brand = response.data
                    this.products = this.brand.products
                })
        }
    }
}
</script>
