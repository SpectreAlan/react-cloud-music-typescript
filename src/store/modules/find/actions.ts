import types from './actionTypes';
import {getBannerRequest, getRecommendRequest, getTopSongRequest} from '../../../api/find';
import {Dispatch} from 'redux';
import {IBanner, IRecommend} from './reducer';
import {ITracks} from "../../../interface";
import {AxiosResponse} from 'axios';
import {getName} from '../../../utils'

export const changeBanner = (data: IBanner) => ({
  type: types.BANNER,
  data
});

export const changeFinishCount = (data: number) => ({
  type: types.FINISH_COUNT,
  data
});

export const changeRecommend = (data: IRecommend) => ({
  type: types.RECOMMEND,
  data
});

export const changeNewSong = (data: ITracks) => ({
  type: types.NEW_SONG,
  data
});

export const getBanner = () => {
  return (dispatch: Dispatch) => {
    getBannerRequest<{ banners: IBanner }>().then((data: AxiosResponse) => {
      dispatch(changeBanner(data.data.banners))
      dispatch(changeFinishCount(1))
    }).catch((e) => {
      console.log("轮播图:" + e);
    })
  }
};

export const getRecommend = () => {
  return (dispatch: Dispatch) => {
    getRecommendRequest<{ result: IRecommend }>().then((data: AxiosResponse) => {
      dispatch(changeRecommend(data.data.result));
      dispatch(changeFinishCount(1))
    }).catch((e) => {
      console.log("推荐歌单: " + e);
    });
  }
};

export const getNewSong = () => {
  return (dispatch: Dispatch) => {
    getTopSongRequest().then((data: AxiosResponse) => {
      const list: ITracks = []
      const arr = data.data.data.slice(0,20)
      // eslint-disable-next-line array-callback-return
      arr.map((item: any) => {
        list.push({
          name: item.name,
          id: item.id,
          url: item.mp3Url,
          img: item.album.picUrl,
          duration: item.duration,
          singer: getName(item.artists),
          album: item.album.name
        })
      })
      dispatch(changeFinishCount(1))
      dispatch(changeNewSong(list));
    }).catch((e) => {
      console.log("新歌: " + e);
    });
  }
};
