<script>
    import MountMixins from '../mixins/mixins.js';
    export default {
        mixins: [MountMixins], // 사용할 믹스인 파일을 배열로 등록
       mounted() {
        console.log('컴포넌트 mounted');
        // 믹스인 mounted
        // 컴포넌트 mounted
       },
       unmounted() {
        console.log('컴포넌트 unmounted');
        // 믹스인 unmounted
        // 컴포넌트 unmounted
       }
    }
</script>