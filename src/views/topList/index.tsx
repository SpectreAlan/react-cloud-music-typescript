import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {Container} from './style'
import {toplistRequest} from '../../api/common'
import Recommend from "../../components/recommend";
import {IRecommend} from "../../store/modules/find/reducer";
import {AxiosResponse} from "axios";
import {forceCheck} from "react-lazyload";
import Scroll from "../../components/scroll";
import Loading from "../../components/loading";

const PlayListPlaza = () => {
  const [loading, setLoading] = useState(false)
  const [recommend, setRecommend] = useState<IRecommend>([])
  const router = useHistory()
  useEffect(() => {
    setLoading(true)
    toplistRequest<{ playlists: IRecommend }>().then((res: AxiosResponse) => {
      const {playlists} = res.data
      setRecommend(playlists)
      setLoading(false)
    }).catch((e) => {
      console.log(e)
      setLoading(false)
    })
  }, [])
  return (
    <Container>
      <div className="fixed">
        <div className="top">
          <i className='iconfont back' onClick={() => router.go(-1)}>&#xe63a;</i>
          <span>歌单广场</span>
          <i/>
        </div>
      </div>
      <Scroll onScroll={forceCheck}>
        {
          loading ? <Loading/> : (recommend.length ? <Recommend list={recommend}/> : <div className="none">没有找到对应歌单 ^-^</div>)
        }
      </Scroll>
    </Container>
  )
}

export default React.memo(PlayListPlaza)
