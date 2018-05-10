<template>
<div>
  {{a_detail}}
</div>
</template>
<script>
    export default {
        name: 'Detail',
        data(){
            return {
                a_detail: ''
            }
        },
        mounted(){
            var _this = this
            this.$nextTick().then(function(){
                _this.getQuery();
            })
            
        },
        methods: {
            getQuery: function(){
                this.a_detail = this.$route.query.id;
            }
        },
        watch: {
            '$route': 'getQuery'
        }
    }
</script>
