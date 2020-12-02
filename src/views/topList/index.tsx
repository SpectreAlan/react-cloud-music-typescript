import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom'
import {Container} from './style'
import {toplistRequest} from '../../api/common'
import {AxiosResponse} from "axios";
import LazyLoad, {forceCheck} from "react-lazyload"
import Scroll from "../../components/scroll"
import Loading from "../../components/loading"

interface IItem {
  name: string;
  coverImgUrl: string;
  id: number;
  updateFrequency: string;
}

type TType = IItem[]

const HotList = () => {
  const [loading, setLoading] = useState(false)
  const [hot, setHot] = useState<TType[]>([[]])
  const [types, setTypes] = useState<string[]>([])
  const router = useHistory()
  useEffect(() => {
    setLoading(true)
    toplistRequest<{ list: TType }>().then((res: AxiosResponse) => {
      const {list} = res.data
      let tags:any[] = ['其他']
      list.map((item: any) => (tags = [...item.tags, ...tags]))
      tags = Array.from(new Set(tags))
      setTypes(tags)
      const topList:TType[] = [[]]
      list.map((item: any) => {
        const {name,coverImgUrl,id,updateFrequency} = item
        const o: IItem = {name,coverImgUrl,id,updateFrequency}
        if(item.tags.length){
          item.tags.map((tag:any)=>{
            const i: number = tags.indexOf(tag)
            if(!topList[i]){
              topList[i] = []
            }
            topList[i].push(o)
          })
        }else{
          if(!topList[tags.length -1] ){
            topList[tags.length -1] = []
          }
          topList[tags.length -1].push(o)
        }
      })
      setHot(topList)
      console.log(tags)
      console.log(topList)
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
          <span>排行榜</span>
          <i/>
        </div>
      </div>
      <Scroll onScroll={forceCheck}>
        {
          loading ? <Loading/> :
            <div>
              {
                types.map((type, index) => (
                  <div
                    className='item'
                    key={index}
                  >
                    <h3>{type}</h3>
                    <ul>
                    {
                      hot.length && hot[index].map((item:IItem)=>(

                          <li
                            className='hot'
                            key={item.id}
                          >
                            <span>{item.updateFrequency}</span>
                            <LazyLoad
                              overflow
                              placeholder={
                                <img width="104px" height="104px" src={require('../../assets/images/music.png')} alt="music"/>
                              }
                            >
                              <img src={item.coverImgUrl} alt="music"/>
                            </LazyLoad>
                            <p>{item.name}</p>
                          </li>
                      ))
                    }
                    </ul>
                  </div>
                ))
              }
            </div>
        }
      </Scroll>
    </Container>
  )
}

export default React.memo(HotList)
