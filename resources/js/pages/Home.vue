<template>
    <div>
        <hero></hero>
        <eat-fit-go></eat-fit-go>
        <time-to-eat></time-to-eat>
        <mousse-cakes></mousse-cakes>
    </div>
</template>

<script>

import Hero from "../components/Hero";
import EatFitGo from "../components/EatFitGo";
import TimeToEat from "../components/TimeToEat";
import MousseCakes from "../components/MousseCakes";
export default {
    name: "Home",
    components: {MousseCakes, TimeToEat, EatFitGo, Hero},
}
</script>
