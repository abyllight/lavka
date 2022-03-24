<template>
    <div class="max-w-6xl mx-auto px-4 py-24">
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
        categories: [],
        products: []
    }),
    mounted() {
        this.getCategories()
        this.getBrand()
    },
    methods: {
        getCategories() {

        },
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
