<div align="center">
<h1 align="center">网易云音乐</h1>
<img src="https://img.shields.io/github/issues/SpectreAlan/react-cloud-music-typescript?color=green">
<img src="https://img.shields.io/github/stars/SpectreAlan/react-cloud-music-typescript?color=yellow">
<img src="https://img.shields.io/github/forks/SpectreAlan/react-cloud-music-typescript?color=orange">
<img src="https://img.shields.io/github/license/SpectreAlan/react-cloud-music-typescript?color=ff69b4">
<img src="https://img.shields.io/github/search/SpectreAlan/react-cloud-music-typescript/main?color=blue">
<img src="https://img.shields.io/github/v/release/SpectreAlan/react-cloud-music-typescript?color=blueviolet">
<img src="https://img.shields.io/github/languages/code-size/SpectreAlan/react-cloud-music-typescript?color=critical">
</div>

# 简介
基于React搭建的移动端网易云音乐，React Hooks + Typescript练手项目，接口使用 [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

# 功能

* [x] 二次封装 [Better-scroll](https://github.com/ustbhuangyi/better-scroll) 组件，实现个页面的横向及纵向弹性滚动、轮播等复用组件、上拉加载下拉刷新
* [x] 手机号登录、403权限跳转
* [x] 集成全局搜索，实现关键字搜索、搜索建议等
* [x] 封装歌单组件、评论组件
* [x] mini、normal音乐播放，实现播放列表、播放模式、播放进度、切换歌曲、评论等功能
* [x] 歌手分类检索，以及歌手介绍、热歌、专辑、mv
* [x] 视频分类检索，播放进度、评论等功能
* [x] 个人中心，歌单管理

# 使用方法

## 1.fork本项目

项目地址：[SpectreAlan/react-cloud-music-typescript](https://github.com/SpectreAlan/react-cloud-music-typescript)

## 2.本地运行
```bash
# 克隆项目
git clone https://github.com/SpectreAlan/react-cloud-music-typescript.git
# 切换到项目目录
cd react-cloud-music-typescript
# 安装依赖
yarn install
# 启动服务
yarn run dev
