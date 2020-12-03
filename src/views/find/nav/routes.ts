export interface IrouteItem {
  name: string;
  path: string;
  icon: string;
}

export type IRoutes = IrouteItem[]

export const routes: IRoutes = [
  {name: '每日推荐', path: '/dailyRecommendation', icon: '&#xe89e;'},
  {name: '歌单', path: '/playlistPlaza', icon: '&#xe636;'},
  {name: '排行榜', path: '/topList', icon: '&#xe62f;'},
  {name: '歌手专区', path: '/singer', icon: '&#xe601;'},
  {name: '私人FM', path: '/', icon: '&#xe725;'},
  {name: '畅聊', path: '/', icon: '&#xe608;'},
  {name: '歌手专区', path: '/', icon: '&#xe608;'},
]
