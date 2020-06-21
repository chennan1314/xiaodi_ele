<template>
    <div>
        HomeManage
    </div>
</template>

<script>
    export default {
        name:'',
        props:[''],
        mounted() {
           this.$http.get('/home/getData').then(res=>{
               console.log(res)
           })
        },
        data () {
            return {

            };
        },
        components: {},
        computed: {},
        methods: {},

    }

</script>

<style scoped>

</style>