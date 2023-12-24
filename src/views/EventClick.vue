<template>
    <div>
        <button type="button" @click="increaseCounter">Add 1</button>
        <p>The counter is : {{ counter1 }}</p>
    </div>
    <div>
        <button type="button" @click="setCount(7)">Set 7</button>
        <p>The counter is : {{ counter2 }}</p>
    </div>
    <div>
        <button type="button" @click="one(), two()">Click</button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                counter1: 0,
                counter2: 0
            };
        },
        methods: {
            increaseCounter(){
                this.counter1 = this.counter1 + 1;
            },
            setCount(counter2) {
                this.counter2 = counter2;
            },
            one() {
                alert('One');
            },
            two() {
                alert('Two');
            }

        }
    }
</script>