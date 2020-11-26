export interface IrouteItem {
  name: string;
  path: string;
  icon: string;
}

export type IRoutes = IrouteItem[];

export const routes: IRoutes = [
  {name: '本地音乐', path: '/dailyRecommendation', icon: '&#xe89e;'},
  {name: '云盘', path: '/songs', icon: '&#xe636;'},
  {name: '已购', path: '/ranking', icon: '&#xe62f;'},
  {name: '最近播放', path: '/radio', icon: '&#xe65b;'},
  {name: '我的好友', path: '/fm', icon: '&#xe725;'},
  {name: '收藏和赞', path: '/chat', icon: '&#xe608;'},
  {name: '我的电台', path: '/singer', icon: '&#xe601;'},
]
