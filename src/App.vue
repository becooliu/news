<template>
  <div id="app">
      
    <div class="tab">
          <div class="tab-header">
              <ul class="tab-list clearfix">
                  <router-link tag="li" class="link-item"  v-for="(tab,index) in tabList" :to="{name: tab.to}" :key="index"><span>{{tab.name}}</span></router-link>
                  
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
  name: "App",
  data() {
    return {
      tabList: [
        { name: "精选", to: "Special" },
        { name: "话题", to: "Topic" },
        { name: "作者", to: "Author" }
      ],
      cur: 0
    };
  },
  methods: {}
};
</script>

<style lang="scss">
/* html {
    font-size: 10px;
    font-size: 62.5%;
} */
html {
  font-size: 62.5%; /* html默认字体为16px, 10px就是 10/16=0.625 */
}
body {
  font-size: 16px;
  font-size: 1.6rem;
}
p {
  font-size: 14px;
  font-size: 1.6rem;
}
@media only screen and (min-width: 320px) {
  html {
    font-size: 62.5% !important;
  }
}
@media only screen and (min-width: 640px) {
  html {
    font-size: 125% !important;
  }
}
@media only screen and (min-width: 750px) {
  html {
    font-size: 150% !important;
  }
}
@media only screen and (min-width: 1242px) {
  html {
    font-size: 187.5% !important;
  }
}
@mixin box-sizing {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
ul,
li {
  list-style: none;
  padding-left: 0;
}
.tab {
  font-family: "Microsoft Yahei";
  .tab-header {
    height: 3.6rem;
    line-height: 3.6rem;
    /* margin-left: -10px;
        margin-right: -10px; */
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
          border-bottom: 0.2rem solid transparent;
        }
        &.router-link-exact-active {
          span {
            @include box-sizing;
            border-bottom-color: #ff1435;
          }
        }
      }
    }
  }
  .tab-content-box {
    margin-top: 0.2rem;
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
