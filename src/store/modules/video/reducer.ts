import types from './actionTypes';
import { AnyAction } from 'redux';
import { produce } from 'immer';

export interface ITypesItem {
  id: number;
  name: string;
}


interface IVideoItem {
  coverUrl: string;
  title: string;
  avatarUrl: string;
  nickname: string;
  praisedCount: number;
  playTime: number;
  durationms: number;
  commentCount: number;
  vid: string;
}

export type ITypes = ITypesItem[];

export type IVideo = IVideoItem[];

export interface VideoState {
  loading: boolean;
  types: ITypes;
  list: IVideo;
}

const defaultState: VideoState = {
  types: [],
  list: [],
  loading: false
};

export const videoReducer = produce((state, action: AnyAction) => {
  switch(action.type) {
    case types.LOADING:
      state.loading = action.data;
      break;
    case types.LIST:
      state.list = action.data;
      break;
      case types.TYPES:
      state.types = action.data;
      break;
  }
}, defaultState);
