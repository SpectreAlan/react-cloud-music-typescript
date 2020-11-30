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
