import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {Container} from './style'
import {areaType, ISinger, ISingers, singerRequest, singerType} from '../../api/singer'
import {AxiosResponse} from "axios";
import {forceCheck} from "react-lazyload";
import Scroll from "../../components/scroll";
import Loading from "../../components/loading";

const Singer = () => {
  const [type, setType] = useState<singerType>(-1)
  const [area, setArea] = useState<areaType>(-1)
  const [loading, setLoading] = useState(false)
  const [singers, setSingers] = useState<ISingers>([])
  const router = useHistory()
  useEffect(() => {
    setLoading(true)
    console.log(type, area)
    singerRequest<{ artists: ISingers }>(type, area).then((res: AxiosResponse) => {
      const {artists} = res.data
      setSingers(artists)
      setLoading(false)
    }).catch((e) => {
      console.log(e)
      setLoading(false)
    })
  }, [type, area])
  return (
    <Container>
      <div className="fixed">
        <div className="top">
          <i className='iconfont back' onClick={() => router.go(-1)}>&#xe63a;</i>
          <span>歌手</span>
          <i/>
        </div>
        <div className="category">
          {
            [-1, 1, 2, 3].map((item: singerType) => (
              <span onClick={() => setType(item)} className={item === type ? 'active' : ''}>{singerType[item]}</span>
            ))
          }
        </div>
        <div className="category">
          {
            [-1, 0, 7, 8, 16, 96].map((item: areaType) => (
              <span onClick={() => setArea(item)} className={item === area ? 'active' : ''}>{areaType[item]}</span>
            ))
          }
        </div>
      </div>
      <Scroll onScroll={forceCheck}>
        {
          loading ? <Loading/> : (singers.length ?
            <ul className='singer-list'>
              {
                singers.map((item: ISinger) => (
                  <li key={item.id}>
                    <div className="left">
                      <img src={item.picUrl} alt={item.name}/>
                      <div className={item.alias.length ? 'alias' : 'no-alias'}>
                        <span>{item.name}</span>
                        <p>{item.alias.length ? ('(' + item.alias.join(',') + ')') : ''}</p>
                      </div>
                    </div>
                    <div className="right">
                      <i className='iconfont'>&#xe6da;</i>
                      关注
                    </div>
                  </li>
                ))
              }
            </ul> :
            <div className="none">没有找到对应歌单 ^-^</div>)
        }
      </Scroll>
    </Container>
  )
}

export default React.memo(Singer)
