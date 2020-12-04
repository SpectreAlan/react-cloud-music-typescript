import types from './actionTypes';
import {getVideoRequest, getTypesRequest} from '../../../api/video';
import {Dispatch} from 'redux';
import {ITypes, IVideo } from './reducer';
import {AxiosResponse} from 'axios';

export const changeVideo = (data: IVideo) => ({
  type: types.LIST,
  data
});

export const changeTypes = (data: ITypes) => ({
  type: types.TYPES,
  data
});

export const changeLoading = (data: boolean) => ({
  type: types.LOADING,
  data
});

export const getVideo = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(changeLoading(true))
    getVideoRequest(id).then((data: AxiosResponse) => {
      const res = data.data.datas
      const list: IVideo = []
      // eslint-disable-next-line array-callback-return
      res.map((item: any) => {
        const {coverUrl, title, praisedCount, playTime, durationms, commentCount, vid} = item.data
        const {avatarUrl, nickname} = item.data.creator
        list.push({
          coverUrl, title, avatarUrl, nickname, praisedCount, playTime, durationms, commentCount,vid
        })
      })
      dispatch(changeVideo(list))
      dispatch(changeLoading(false))
    }).catch((e) => {
      dispatch(changeLoading(false))
      console.log("video:" + e);
    })
  }
};

export const getTypes = () => {
  return (dispatch: Dispatch) => {
    getTypesRequest<{ types: ITypes }>().then((data: AxiosResponse) => {
      dispatch(changeTypes(data.data.data))
    }).catch((e) => {
      console.log("video类别:" + e);
    })
  }
};

