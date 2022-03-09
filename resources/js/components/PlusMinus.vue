<template>
    <div class="flex justify-between items-center" :class="width">
        <div class="bg-primary p-1 rounded-md cursor-pointer" @click.prevent="decrement">
            <minus-icon :class="iconSize"/>
        </div>
        <span class="font-medium" :class="textSize">{{getQuantity}}</span>
        <div class="bg-primary p-1 rounded-md cursor-pointer" @click.prevent="increment">
            <add-icon :class="iconSize"/>
        </div>
    </div>
</template>

<script>
import MinusIcon from "./icons/MinusIcon";
import AddIcon from "./icons/AddIcon";
export default {
    name: "PlusMinus",
    components: {AddIcon, MinusIcon},
    props: {
        item: Object,
        quantity: Number,
        large: Boolean
    },
    computed: {
        getQuantity() {
            return this.$store.getters.getItemQuantity(this.item.id)
        },
        width() {
            return this.large ? 'w-28' : 'w-20 md:w-24'
        },
        textSize() {
            return this.large ? 'text-xl' : 'text-lg md:text-xl'
        },
        iconSize() {
            return this.large ? 'w-6 h-6' : 'w-4 h-4 md:w-5 md:h-5'
        }
    },
    methods: {
        increment() {
            this.$store.dispatch('increment', this.item.id);
        },
        decrement() {
            this.$store.dispatch('decrement', this.item.id);
        }
    }
}
</script>
