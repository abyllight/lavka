<template>
    <div class="flex justify-between items-center" :class="width">
        <div class="bg-primary p-1 rounded-md cursor-pointer" @click.prevent="decrement">
            <minus-icon :class="iconSize"/>
        </div>

        <loader v-if="isLoading"/>
        <span v-else class="font-medium" :class="textSize">{{getQuantity}}</span>

        <div class="bg-primary p-1 rounded-md cursor-pointer" @click.prevent="increment">
            <add-icon :class="iconSize"/>
        </div>
    </div>
</template>

<script>
import MinusIcon from "../icons/MinusIcon";
import AddIcon from "../icons/AddIcon";
import Loader from "./Loader";

export default {
    name: "PlusMinus",
    components: {Loader, AddIcon, MinusIcon},
    props: {
        id: Number,
        quantity: Number,
        large: Boolean
    },
    computed: {
        getQuantity() {
            return this.$store.getters.getItemQuantity(this.id)
        },
        width() {
            return this.large ? 'w-28' : 'w-20 md:w-24'
        },
        textSize() {
            return this.large ? 'text-xl' : 'text-lg md:text-xl'
        },
        iconSize() {
            return this.large ? 'w-6 h-6' : 'w-4 h-4 md:w-5 md:h-5'
        },
        isLoading() {
            return this.$store.state.loading
        },
        uuid() {
            return this.$store.getters.getItemId(this.id)
        }
    },
    methods: {
        increment() {
            this.$store.dispatch('increment', this.uuid);
        },
        decrement() {
            this.$store.dispatch('decrement', this.uuid);
        }
    }
}
</script>
