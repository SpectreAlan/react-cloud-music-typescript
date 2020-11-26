import types from './actionTypes'
import {ITracks} from "../../../interface"
import {playMode} from "../../../config/player"

enum type {
  reduce = -1,
  clear = 0,
  add = 1,
  change = 2
}

interface IPlayListProps {
  list?: ITracks,
  index?:number,
  type: type
}

export const changePlayList = (data: IPlayListProps) => ({
  type: types.PLAY_LIST,
  data
})

export const changeMode = (data: playMode) => ({
  type: types.MODE,
  data
})

export const changePlayListVisible = (data: boolean) => ({
  type: types.PLAY_LIST_VISIBLE,
  data
})

export const changeIndex = (data: number) => ({
  type: types.INDEX,
  data
})

export const changeFullScreen = (data: boolean) => ({
  type: types.FULLSCREEN,
  data
})

export const changePause = (data: boolean) => ({
  type: types.PAUSE,
  data
})

