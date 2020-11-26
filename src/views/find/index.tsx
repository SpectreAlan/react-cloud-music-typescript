import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"
import {RouteConfigComponentProps} from 'react-router-config'
import {forceCheck} from 'react-lazyload'
import {RootState} from '../../store/reducer'
import {getBanner, getRecommend, getNewSong, changeFinishCount} from '../../store/modules/find/actions'
import Search from "../../components/search"
import Scroll from "../../components/scroll"
import Nav from './nav'
import {ScrollContainer} from '../../assets/style/base'
import NewSongs from "./newSongs";
import Banner from "./banner";
import Recommend from "./recommend";
import Loading from '../../components/loading'

const Find = (props: RouteConfigComponentProps) => {
  const {banner, recommend, newSong, finishCount} = useSelector((state: RootState) => ({
    banner: state.find.banner,
    finishCount: state.find.finishCount,
    newSong: state.find.newSong,
    recommend: state.find.recommend
  }));
  const dispatch = useDispatch()

  useEffect(() => {
    !banner.length && dispatch(getBanner());
    !recommend.length && dispatch(getRecommend());
    !newSong.length && dispatch(getNewSong());
  }, [])

  const pullDown = () => {
    dispatch(changeFinishCount(-2))
    dispatch(getNewSong());
    dispatch(getRecommend());
  }
  return (
    <>
      <Search/>
      <ScrollContainer>
        <Scroll onScroll={forceCheck} pullDown={pullDown} pullLoading={finishCount !== 3}>
          <div>
            <Banner list={banner}/>
            <Nav/>
            {finishCount !== 3 ? <Loading/> : <NewSongs list={newSong}/>}
            <Recommend list={recommend}/>
          </div>
        </Scroll>
      </ScrollContainer>
    </>
  );
};

export default React.memo(Find);
