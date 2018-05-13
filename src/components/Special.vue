<template>
  <div class="index-item clearfix">
    <router-link class="item-list" v-for="(item,index) in s_data" :key="index" :artId='item.articleId' @click="giveData(item.articleId)" :to="{name: 'Detail',query: {id:item.articleId}}">
      <a href="javascript:void(0);" class="clearfix">
        <div class="img" :style="{backgroundImage: 'url('+item.image+')'}"></div>
        <div class="text">
          <h3 class="title">{{item.articleTitle}}</h3>
          <h4 class="subTitle">{{item.subTitle}}</h4>
        </div>
      </a>
    </router-link>
  </div>
</template>

<script>
/* Vue.use(VueResource); */

export default {
  name: "Special",
  data() {
    return {
	  s_data: "",
	  artId: null
    };
  },
	mounted() {
		let _this = this
		this.$nextTick().then(function() {
			_this.$http.get('/static/detail/d_data.json').then(function(response){
				if(response.data.status == "success") {
					this.s_data = response.data.result;
				}
			})
		});
	},
	methods: {
		giveData(id){
			this.$emit("artData",[{'artId':id}])
		}
	}
};
</script>

<style lang="scss">
$color-inverse: #fff;
@mixin bg-options {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
@mixin clearfix {
    zoom :1;
    &:after {
        display: block;
        content: "";
        height: 0;
        visibility: hidden;
        clear: both;
    }
}
.index-item {
  margin-bottom: 2rem;
  margin-top: 2rem;
  .item-list {
    display: block;
    overflow: hidden;
    margin-bottom: 1rem;
    box-sizing: border-box;
	background: $color-inverse;
	@include clearfix;
    > a {
		display: inline-block;
      > .img {
        margin-bottom: 0.8ren;
        float: left;
        width: 10.6rem;
        height: 10.6rem;
        @include bg-options;
      }
      .text {
        float: left;
        width: 70%;
        box-sizing: border-box;
        padding-top: 2rem;
        padding-left: 0.6rem;
        .title {
          color: #333;
          font-size: 1.8rem;
          font-weight: normal;
          margin-bottom: 0.8rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .subTitle {
          color: #666;
          font-weight: normal;
          line-height: 2rem;
          font-size: 1.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>


