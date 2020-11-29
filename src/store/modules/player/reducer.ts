import types from './actionTypes'
import {AnyAction} from 'redux'
import {produce} from 'immer'
import {ITracks} from '../../../interface'
import {playMode} from "../../../config/player"

export interface PlayerState {
  fullScreen: boolean;
  pause: boolean;
  playList: ITracks;
  mode: playMode;
  index: number,
  playNext: false
}

const defaultState: PlayerState = {
  fullScreen: false,
  pause: true,
  playList: [],
  mode: playMode.sequence,
  index: -1,
  playNext: false
};

export const playerReducer = produce((state, action: AnyAction) => {
  switch (action.type) {
    case types.FULLSCREEN:
      state.fullScreen = action.data;
      break;
    case types.PAUSE:
      state.pause = action.data;
      break;
    case types.PLAY_LIST:
      switch (action.data.type) {
        case -1:
          const list = [...state.playList]
          list.splice(action.data.index, 1)
          state.playList = list
          break
        case 0:
          state.playList = []
          break
        case 1:
          state.playList = [...state.playList, ...action.data.list]
          break
        case 2:
          state.playList = action.data.list
          break
      }
      break;
    case types.PLAY_NEXT:
      state.playLNext = action.data;
      break;
    case types.INDEX:
      state.index = action.data;
      break;
    case types.MODE:
      state.mode = action.data;
      break;
  }
}, defaultState);
