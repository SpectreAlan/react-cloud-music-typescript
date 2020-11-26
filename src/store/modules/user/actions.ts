import types from './actionTypes';
import {loginRequest, getRecordRequest, getCollectRequest} from '../../../api/user';
import {Dispatch} from 'redux';
import {ISongList, IInfo} from './reducer';
import {AxiosResponse} from "axios";

export const changeInfo = (data: IInfo) => ({
  type: types.INFO,
  data
});

export const changCollect = (data: ISongList) => ({
  type: types.COLLECT,
  data
});

export const changRecord = (data: ISongList) => ({
  type: types.RECORD,
  data
});

export const changeLoading = (data: boolean) => ({
  type: types.LOADING,
  data
});

export const clearInfo = () => ({type: types.RESET});

export const login = (param: any, router: any) => (dispatch: Dispatch) => {
  dispatch(changeLoading(true));
  loginRequest(param).then((data: AxiosResponse) => {
    const {userId, backgroundUrl, nickname, avatarUrl} = data.data.profile
    const info: IInfo = {userId, backgroundUrl, nickname, avatarUrl}
    dispatch(changeInfo(info));
    dispatch(changeLoading(false));
    router.push('/');
  })
};

export const getRecord = (uid: number) => (dispatch: Dispatch) => {
  dispatch(changeLoading(true));
  getRecordRequest(uid).then((res) => {
    dispatch(changRecord(res.data.allData));
    dispatch(changeLoading(false));
  })
};

export const getCollect = (uid: number) => (dispatch: Dispatch) => {
  dispatch(changeLoading(true));
  getCollectRequest(uid).then((res) => {
    dispatch(changCollect(res.data.playlist));
    dispatch(changeLoading(false));
  })
};
