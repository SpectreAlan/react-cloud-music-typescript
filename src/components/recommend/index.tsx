import React from "react"
import {Container} from "./style"
import {IRecommend} from '../../store/modules/find/reducer'
import LazyLoad from 'react-lazyload'
import {getCount} from '../../utils'
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
    <>
      <Container>
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
                  <img width="104px" height="104px" src={require('../../assets/images/music.png')} alt="music"/>
                }
              >
                <img src={item.picUrl || item.coverImgUrl} alt="music"/>
              </LazyLoad>
              <span>{item.name}</span>
            </li>
          ))
        }
      </Container>
    </>
  )
}

export default React.memo(Recommend)
