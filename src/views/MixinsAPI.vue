<script>
    import ApiMixin from '../js/api.js';
    export default {
        mixins: [ApiMixin], // 사용할 믹스인 파일을 배열로 등록
        data() {
            return {
                productList: []
            };
        },
        async mounted() {
            this.productList = await this.$callAPI("https://d998f889-1127-4fb9-90fa-721f6a61554b.mock.pstmn.io/list", "get");
            console.log(this.productList);
        }
    }
</script>