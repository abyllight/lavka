<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 py-5">
        <card-skeleton></card-skeleton>
        <card-skeleton></card-skeleton>
        <card-skeleton></card-skeleton>
        <card-skeleton></card-skeleton>
    </div>
</template>

<script>
import cardSkeleton from "./CardSkeleton";
export default {
    name: "CardsSkeleton",
    components: {cardSkeleton}
}
</script>
