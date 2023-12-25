<template>
    <child-component @send-message="sendMessage" ref="child_component" />
</template>
<script>
    import ChildComponent from './ChildComponent4';
    export default {
        components: {ChildComponent},
        methods: {
            sendMessage(data) {
                console.log(data);
            }
        }
    }
</script>