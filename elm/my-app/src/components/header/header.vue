<template>
  <div class="v-header">
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" :src="seller.avatar"/>
        </div>
        <div class="content">
            <div class="title">
                <span>{{seller.name}}</span>
                <span></span>
            </div>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="warpper-content">
      </div>
      <div class="warpper-buttom">
      </div>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default{
    props: {
      seller: {
        type: Object
      }
    }
  };
</script>

<style lang='stylus' rel='stylesheet/stylus'>
</style>
