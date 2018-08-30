<template>
  <div class="myheader">
    <ul>
        <li><i class='iconfont icon-fanhui'></i></li>
        <li class='cart'>购物车</li>
        <li><i class='iconfont icon-caidan'></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang='scss'>
  @import '../styles/common.scss';
    .myheader{
      background:#fe575c;
      width:px2rem(750);
      min-width:px2rem(300);
      height:px2rem(130);
      padding:px2rem(65) px2rem(25) px2rem(25);
      >ul{
          margin-left:px2rem(25);
          >li{
              float:left;
              font-size:px2rem(36);
              color:#fff;
              cursor:pointer;
              >i{
                font-size:px2rem(36);
              }
          }
          .cart{
              margin-left:px2rem(250);
              margin-right:px2rem(200);
          }
      }
    }
</style>
