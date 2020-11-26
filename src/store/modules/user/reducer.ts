import types from './actionTypes'
import {AnyAction} from 'redux'
import {produce} from 'immer'

export interface ISongListItem {
  id: number;
  trackCount: number;
  name: string;
  coverImgUrl: string;
  creator: any;
}


export interface IInfo {
  userId: number;
  backgroundUrl: string;
  nickname: string;
  avatarUrl: string;
}

export type ISongList = ISongListItem[];

export interface UserState {
  info: IInfo;
  record: ISongList;
  collect: ISongList;
  loading: boolean;
}

const defaultState: UserState = {
  info: {
    userId: -1,
    backgroundUrl: '',
    nickname: '',
    avatarUrl: '',
  },
  record: [],
  collect: [],
  loading: false
};

export const userReducer = produce((state, action: AnyAction) => {
  switch (action.type) {
    case types.LOADING:
      state.loading = action.data
      break;
    case types.COLLECT:
      state.collect = action.data
      break;
    case types.RECORD:
      state.record = action.data
      break
    case types.INFO:
      state.info = action.data
      break;
    case types.RESET:
      state.info = defaultState
      state.record = []
      state.collect = []
      break;
  }
}, defaultState)
