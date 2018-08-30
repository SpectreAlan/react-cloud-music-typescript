<template>
  <div class="cart">
    <div class="circle"></div>
    <div class="content">
      <p>您的购物车还木有商品</p>
      <p>赶快去挑选吧</p>
    </div>
    <button>去挑选</button>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang='scss'>
  @import '../styles/common.scss';
    .cart{
      background:#fff;
      width:px2rem(750);
      height:px2rem(1100);
      padding: px2rem(50) px2rem(25);
      .circle{
          width:px2rem(180);
          height:px2rem(180);
          margin:0 auto;
          background: #c5c5c5;
          border-radius: 50%;
      }
      .content{
        margin:px2rem(50);
        text-align: center;
        >p{
          font-size: px2rem(28);
        }
      }
      button{
        margin-top:px2rem(200);
        height:px2rem(100);
        width:px2rem(670);
        background:#ff4249;
        border:none;
        color:#fff;
        font-size:px2rem(35);
        border-radius:px2rem(10);
        outline:none;
        cursor:pointer;
      }
    }
</style>
