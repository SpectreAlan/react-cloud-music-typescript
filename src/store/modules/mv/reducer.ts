import types from './actionTypes';
import { AnyAction } from 'redux';
import { produce } from 'immer';

export interface ITypesItem {
  id: number;
  name: string;
}


interface IMvItem {
  coverUrl: string;
  title: string;
  avatarUrl: string;
  nickname: string;
  praisedCount: number;
  playTime: number;
  durationms: number;
  commentCount: number;
}

export type ITypes = ITypesItem[];

export type IMv = IMvItem[];

export interface MvState {
  loading: boolean;
  types: ITypes;
  list: IMv;
}

const defaultState: MvState = {
  types: [],
  list: [],
  loading: false
};

export const mvReducer = produce((state, action: AnyAction) => {
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
