export interface ITrack {
  id: number;
  url: string;
  img: string;
  duration: number;
  name: string;
  album: string;
  singer: string;
}

export type ITracks = ITrack[]

export interface ISongListProps {
  tracks: ITracks;
  trackCount: number;
  shareCount: number;
  commentCount: number;
  name: string;
  coverImgUrl: string;
  creator: string;
  avatarUrl: string;
  subscribedCount: number;
  subscribed: boolean;
  id: number
}

export type IComments = IComment[]

export interface IComment {
  content: string;
  liked: boolean;
  likedCount: number;
  parentCommentId: number;
  time: number;
  user: any;
  commentId: number;
  beReplied: any
}

export enum CommentType { // type 0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频 6: 动态
  music,mv,playlist,album,radio,video,trend
}
