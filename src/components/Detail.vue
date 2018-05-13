<template>
<div class="detail-box">
    <div class="title-box">
        <h4 class="title">{{a_detail.articleTitle}}</h4>
        <span class="created">{{a_detail.created}}</span>
        <hr />
    </div>
    <div class="content-box" v-html="a_detail.content">
        <p class="detail">明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间？
        </p>
        <img src="images/01.01.jpg" alt="">
        <p class="detail">天空这个巨大斜坡从北面那片大陆一直延伸过来，弦窗外，自由以蔚蓝色的名义辽阔无边</p>
    </div>
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
<style lang="scss">
.detail-box {
    font-family: "Microsoft Yahei";
    .title-box {
        margin-bottom: 1.5rem;
        .title {
            font-size: 1.6rem;
            color: #333;
            line-height: 2.4rem;
            text-align: center;
        }
        .created {
            font-size: 1.2rem;
            color: #666;
            line-height: 2rem;
        }
        hr {
            height: 0.1rem;
            background-color: #999;
        }
    }
    .content-box {
        text-align: center;
        p {
            text-align: left;
            line-height: 2rem;
            font-size: 1.4rem;
            color: #666;
            margin-bottom: 1.5rem;
        }
        img {
            display: inline-block;
            width: auto;
            max-width: 100%;
            margin: 0 auto 1.5rem;
        }
    }
}
</style>

