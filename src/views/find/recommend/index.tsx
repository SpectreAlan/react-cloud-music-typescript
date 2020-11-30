import React from "react"
import {Container} from "./style"
import {IRecommend} from '../../../store/modules/find/reducer'
import LazyLoad, {forceCheck} from 'react-lazyload'
import Scroll from '../../../components/scroll'
import {getCount} from '../../../utils'
import {useHistory} from "react-router";

interface RecommendInterface {
  list: IRecommend
}

const Recommend = (props: RecommendInterface) => {
  const {list} = props
  const router = useHistory()
  const detail = (id: number) => {
    sessionStorage.setItem('songListId', String(id))
    router.push('/songList')
  }
  return (
    <Container>
      <div className="top">
        <h3>热门歌单</h3>
        <div>查看更多</div>
      </div>
      <Scroll direction={'horizontal'} onScroll={forceCheck}>
        <ul>
          {
            list.map((item, index) => (
              <li
                key={index}
                onClick={() => detail(item.id)}
              >
                <div className='play'>
                  <i className='iconfont'>&#xe60e;</i>
                  <span>{getCount(item.playCount)}</span>
                </div>
                <LazyLoad
                  overflow
                  placeholder={
                    <img width="104px" height="104px" src={require('../../../assets/images/music.png')} alt="music"/>
                  }
                >
                  <img src={item.picUrl} alt="music"/>
                </LazyLoad>
                <span>{item.name}</span>
              </li>
            ))
          }
        </ul>
      </Scroll>
    </Container>
  )
}

export default React.memo(Recommend)
