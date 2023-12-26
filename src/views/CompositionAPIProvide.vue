<template>
    <CompositionAPIInject />
</template>
<script>
    import { provide } from 'vue';  // provide 추가
    import CompositionAPIInject from './CompositionAPIInject';
    export default {
        components: {
            CompositionAPIInject
        },
        setup() {
            provide('title', 'Vue.js 프로젝트');
            // provide 함수를 통해서 전달할 키, 값 설정
        }
    }
</script>