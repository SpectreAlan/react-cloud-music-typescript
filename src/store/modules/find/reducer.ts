import types from './actionTypes'
import {AnyAction} from 'redux'
import {produce} from 'immer'
import {ITracks} from "../../../interface"

export interface IBannerItem {
  pic: string;
  typeTitle: string;
  bannerId: string;
}

interface IRecommendItem {
  id: number;
  picUrl: string;
  name: string;
  playCount: number;
}

export type IBanner = IBannerItem[];

export type IRecommend = IRecommendItem[];

export interface FindState {
  banner: IBanner;
  finishCount: number;
  recommend: IRecommend;
  newSong: ITracks;
}

const defaultState: FindState = {
  banner: [],
  finishCount: 0,
  recommend: [],
  newSong: []
};

export const findReducer = produce((state, action: AnyAction) => {
  switch (action.type) {
    case types.BANNER:
      state.banner = action.data
      break
    case types.RECOMMEND:
      state.recommend = action.data
      break
    case types.FINISH_COUNT:
      state.finishCount = state.finishCount + action.data
      break
    case types.NEW_SONG:
      state.newSong = action.data
      break
  }
}, defaultState)
