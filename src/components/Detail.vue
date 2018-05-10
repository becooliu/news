<template>
<div>
  <div class="title" v-html="a_detail.articleTitle"></div>
  <div class="sub-title" v-html="a_detail.subTitle"></div>
  <div class="content" v-html="a_detail.content"></div>
</div>
</template>
<script>
    export default {
        name: 'Detail',
        data(){
            return {
                a_detail: '',
                a_id: ''
            }
        },
        mounted(){
            var _this = this
            this.$nextTick().then(function(){
                _this.getQuery();
                //_this.getArticleData(_this.a_id);
            })
            
        },
        methods: {
            getQuery: function(){
                this.a_id = this.$route.query.id;
                this.getArticleData(this.a_id);
            },
            getArticleData(id){
                var _this = this
                this.$http.get('/static/detail/d_data.json').then(function(response){
                    console.log(11);
                    if(response.data.status == "success") {
                        response.data.result.filter(function(currentValue , index){
                            //console.log(currentValue.articleId);
                            if(currentValue.articleId == id) {
                                //console.log(response.data.result[index]);
                                _this.a_detail = response.data.result[index];
                            }
                        })
                    }
                })
            }
        },
        watch: {
            '$route': 'getQuery'
        }
    }
</script>
