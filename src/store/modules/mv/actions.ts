import types from './actionTypes';
import {getMvRequest, getTypesRequest} from '../../../api/mv';
import {Dispatch} from 'redux';
import {ITypes, IMv } from './reducer';
import {AxiosResponse} from 'axios';

export const changeMv = (data: IMv) => ({
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

export const getMv = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch(changeLoading(true))
    getMvRequest(id).then((data: AxiosResponse) => {
      const res = data.data.datas
      const list: IMv = []
      // eslint-disable-next-line array-callback-return
      res.map((item: any) => {
        const {coverUrl, title, praisedCount, playTime, durationms, commentCount, vid} = item.data
        const {avatarUrl, nickname} = item.data.creator
        list.push({
          coverUrl, title, avatarUrl, nickname, praisedCount, playTime, durationms, commentCount,vid
        })
      })
      dispatch(changeMv(list))
      dispatch(changeLoading(false))
    }).catch((e) => {
      dispatch(changeLoading(false))
      console.log("mv:" + e);
    })
  }
};

export const getTypes = () => {
  return (dispatch: Dispatch) => {
    getTypesRequest<{ types: ITypes }>().then((data: AxiosResponse) => {
      dispatch(changeTypes(data.data.data))
    }).catch((e) => {
      console.log("mv类别:" + e);
    })
  }
};

