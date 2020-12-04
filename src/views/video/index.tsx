import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {RootState} from "../../store/reducer";
import {getVideo, getTypes} from "../../store/modules/video/actions"
import Loading from "../../components/loading"
import Search from "../../components/search"
import Nav from './nav'
import VideoList from './videoList'

const Video = () => {
  const {list, loading, types} = useSelector((state: RootState) => ({
    list: state.video.list,
    loading: state.video.loading,
    types: state.video.types
  }));

  const dispatch = useDispatch()

  useEffect(() => {
    if (!types.length) {
      dispatch(getTypes());
    }
  }, [])

  const updateCategory = (val: number) => {
    dispatch(getVideo(val))
  }

  return (
    <>
      <Search/>
      <Nav list={types} updateCategory={updateCategory}/>
      {
        loading ? <Loading/> : <VideoList list={list}/>
      }
    </>
  );
};

export default React.memo(Video);
