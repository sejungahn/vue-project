<template>
    <h2>{{ title }}</h2>
    <p>{{ likes }}</p>
</template>
<script>
    export default {
        props: {
            title: {
                type: String,
                default: "페이지 제목입니다."
            },
            likes: {
                type: Number,
                default: 1
            }
        }
    }
</script>