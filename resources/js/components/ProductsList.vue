<template>
    <cards-skeleton v-if="products.length === 0"></cards-skeleton>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 md:gap-y-8 lg:gap-x-8">
        <product-card v-for="item in products" :item="item"/>
    </div>
</template>4

<script>
import CardsSkeleton from "../skeletons/CardsSkeleton";
import TagsSkeleton from "../skeletons/TagsSkeleton";
import ProductCard from "./ProductCard";
export default {
    name: "ProductsList",
    components: {ProductCard, CardsSkeleton, TagsSkeleton},
    props: {
        products: Array
    }
}
</script>
