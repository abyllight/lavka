<template>
    <div class="max-w-6xl mx-auto p-4 mt-20 md:mt-24">
        <products-list></products-list>
    </div>
</template>

<script>
import ProductsList from "./ProductsList";
export default {
    name: "Products",
    components: {ProductsList},
}
</script>
