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
  margin-bottom: 20px;
  margin-top: 20px;
  position: relative;
  .item-list {
    margin-bottom: 10px;
    box-sizing: border-box;
	background: $color-inverse;
	display: inline-block;
	width: 100%;
	@include clearfix;
    > a {
		display: inline-block;
		width: 100%;
      > .img {
        margin-bottom: 8px;
        float: left;
        width: 106px;
        height: 106px;
        @include bg-options;
      }
      .text {
        float: left;
        width: 70%;
        box-sizing: border-box;
        padding-top: 20px;
        padding-left: 6px;
        .title {
          color: #333;
          font-size: 18px;
          font-weight: normal;
          margin-bottom: 8px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .subTitle {
          color: #666;
          font-weight: normal;
          line-height: 20px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>


