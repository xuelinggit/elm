<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rathings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  const RES_SUCCESS = 0;
  import header from './components/header/header';
  export default {
    data() {
      return {
        seller: {}
      };
    },
    components: {
      'v-header': header
    },
    created: function () {
      this.$http.get('/api/seller').then(res => {
        res = res.data;
        if (res.errno === RES_SUCCESS) {
          this.seller = res.data;
        }
      });
    }
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import "./common/stylus/index.styl"
  #app
    .tab
      display flex
      width 100%
      height 40px
      line-height 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          display block
          font-size 20px
          &.active
            color rgb(240, 20, 20)
            line-height 28px
            font-weight 200
</style>
