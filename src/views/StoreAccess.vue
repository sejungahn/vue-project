<template>
    <p>Count : {{ count }}</p>
    <button type="button" @click="increment">Increment</button>
    <p>카트 : {{ cartCount }}</p>
</template>
<script>
    export default {
        // name: 'StoreAccess',
        computed: {
            count() {
                return this.$store.state.count;
            },
            cartCount() {
                return this.$store.getters.cartCount;
            }
        },
        methods: {
            increment() {
                this.$store.commit('increment');
            }
        }
    }
</script>
