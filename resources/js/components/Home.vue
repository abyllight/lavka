<template>
    <div>
        <hero></hero>
        <eat-fit-go></eat-fit-go>
        <time-to-eat></time-to-eat>
        <mousse-cakes></mousse-cakes>
    </div>
</template>

<script>

import Hero from "./Hero";
import EatFitGo from "./EatFitGo";
import TimeToEat from "./TimeToEat";
import MousseCakes from "./MousseCakes";

export default {
    name: "Home",
    components: {MousseCakes, TimeToEat, EatFitGo, Hero}
}
</script>
