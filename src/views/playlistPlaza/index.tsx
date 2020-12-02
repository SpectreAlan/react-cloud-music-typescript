import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {Container} from './style'
import {detailRequest, navRequest} from '../../api/playListPlaza'
import Nav from './nav'
import Recommend from "../../components/recommend";
import {IRecommend} from "../../store/modules/find/reducer";
import {AxiosResponse} from "axios";
import {forceCheck} from "react-lazyload";
import Scroll from "../../components/scroll";
import Loading from "../../components/loading";

const PlayListPlaza = () => {
  const [category, setCategory] = useState('全部歌单')
  const [nav, setNav] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [recommend, setRecommend] = useState<IRecommend>([])
  const router = useHistory()
  useEffect(() => {
    navRequest().then(res => {
      const types = res.data.sub
      const list: string[] = ['全部歌单']
      types.map((item: any) => {
        list.push(item.name)
      })
      setNav(list)
    })
  }, [])
  useEffect(() => {
    setLoading(true)
    detailRequest<{ playlists: IRecommend }>(category).then((res: AxiosResponse) => {
      const {playlists} = res.data
      setRecommend(playlists)
      setLoading(false)
    }).catch((e) => {
      console.log(e)
      setLoading(false)
    })
  }, [category])
  const handleNavClick = (item: string) => {
    setCategory(item)
  }
  return (
    <Container>
      <div className="fixed">
        <div className="top">
          <i className='iconfont back' onClick={() => router.go(-1)}>&#xe63a;</i>
          <span>歌单广场</span>
          <i/>
        </div>
        <Nav nav={nav} handleNavClick={handleNavClick} category={category}/>
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
