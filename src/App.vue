<template>
  <div id="app">
      
    <div class="tab">
          <div class="tab-header">
              <ul class="tab-list clearfix">
                  <router-link tag="li" class="link-item"  v-for="(tab,index) in tabList" :to="{name: tab.to}"><span>{{tab.name}}</span></router-link>
                  
              </ul>
          </div>
          <div class="tab-content-box">
              <keep-alive>
                <router-view></router-view>    
              </keep-alive>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
        tabList: [
            {"name":"精选","to": "Special"},
            {"name":"话题","to": "Topic"},
            {"name":"作者","to": "Author"}
        ],
        cur: 0
    }
  },
  methods: {
    changeActive(index){
        console.log(index);
      this.cur = index;
    }
  }
}
</script>

<style lang="scss">
@mixin box-sizing {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  
}
ul,
li {
  list-style: none;
}
.tab {
    font-family: "Microsoft Yahei";
    .tab-header {
        height: 36px;
        line-height: 36px;
        margin-left: -10px;
        margin-right: -10px;
        .tab-list {
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            background-color: #fff;
            overflow: hidden;
            li {
                text-align: center;
                flex-grow: 2;
                
                span {
                    display: inline-block;
                    width: 100%;
                    border-bottom: 2px solid transparent;
                }
                &.router-link-exact-active{
                    span {
                        @include box-sizing;
                        border-bottom-color: #ff1435;
                    }
                }
            }
        }
    }
    .tab-content-box {
        margin-top: 2px;
        .content-item {
            display: none;
            position: relative;
            height: 100%;
            min-height: 100%;
            &:first-child {
                display: block;
            }
            img.no-data {
                
                width: 100%;
                max-width: 100%;
            }
        }
    }
}
</style>
