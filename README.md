# flexible

> vue移动端屏幕适配

## 效果预览

``` bash
# 项目clone
git clone git@github.com:NicolasGui/flexible.git

# 进入项目目录
cd flexible

# 安装依赖
npm install

# 启动服务 localhost:8080
npm run dev

```
## 原理概述
### 插件安装
``` bash
# 插件一：amfe-flexible
npm install amfe-flexible --save
#  插件二： node-sass
npm install amfe-flexible --save  # 同时，在main.js文件内引入
npm install sass-loader --save
```
### 编写js处理方法
在utils目录下创建flex.js文件，内容如下：
``` javascript
import Vue from 'vue'
Vue.prototype.$setTitle = function (text) {
  document.title = text
}
Vue.prototype.$getPX = function (design, designWidth = 750) { // 750为设计稿宽度
  // 获取窗口尺寸
  let width = document.documentElement.getBoundingClientRect().width
  // 计算缩放比例
  let scale = width / designWidth
  // 获取实时尺寸
  return design * scale
}
```
同时，在main.js文件内引入该js文件
``` javascript
import Vue from 'vue'
import App from './App'
import router from './router'
import 'amfe-flexible'
import './utils/flex'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

```
### 编写css处理方法
在src目录创建styles目录，同时在该目录新增common.scss文件，内容如下：
``` scss
body,div,ul,ol,dl,li,dt,dd,h1,h2,h3,h4,p,form,iframe,input,textarea,a,span,em,strong,img,html,nav,header,article,button,footer,var {
  padding:0;
  margin:0;
}
body { font:12px/1.2rem "Microsoft YaHei",tahoma,arial,sans-serif;min-width:320px;position:relative; }
form,input {background:none;border:none;}
ul,dl,ol {list-style-type:none;}
h1, h2, h3, h4, h5 { font:12px/1.2rem "Microsoft YaHei",arial,tahoma; }
a { text-decoration:none; }
a:hover,a:focus { outline:none; }
table { border-collapse:collapse;border-spacing:0; }
img { border:none; }
strong,b { font-weight:normal; }
em,i,var { font-style:normal; }
p { text-indent:0; }
.clear { clear:both;height:0;line-height:0;overflow:hidden;width:0; }
.clearfix:after { clear:both;content:".";display:block;font-size:0;height:0;visibility:hidden; }
  // 尺寸转换
  @function px2rem($px, $base-font-size: 75px) { /*设计稿宽度为750，因此此处为75*/
    @if (unitless($px)) {
      @return px2rem($px + 0px); 
    } @else if (unit($px) == rem) {
      @return $px;
    }
    @return ($px / $base-font-size) * 1rem;
  }
  // 字体转换
  @mixin font-dpr($font-size) {
    font-size: $font-size;
    [data-dpr="2"] & {
      font-size: $font-size * 2;
    }
    [data-dpr="3"] & {
      font-size: $font-size * 3;
    }
  }
  
```

### css内使用
``` scss
<style scoped lang='scss'>
  @import '../styles/common.scss';
    .content{
      width:px2rem(750);  /*750为设计稿实际尺寸*/
      font-size:px2rem(20)  /*20为设计稿实际尺寸*/
</style>

```
### js内使用
``` javascript
export default {
   name:'test',
   data() {
     return {
       w:0;
     }
   },
   watch:{
     getWidth() {
         this.w=this.$getPX(500);
       }
     }
   },
   computed: {
     fun() {
       return (this.w/this.$getPX(500)*100).toFixed(2) + '';
     }
   }
 }

```
