import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../store/reducer"
import {ListContainer} from './style'
import {getCollect} from "../../store/modules/user/actions"
import {ISongListItem, ISongList} from "../../store/modules/user/reducer"
import {useHistory} from 'react-router'

interface InterfaceProps {
  refresh: Function
}

const SongList = (props: InterfaceProps) => {
  const {refresh} = props
  const {collect, info} = useSelector((state: RootState) => ({
    collect: state.user.collect,
    info: state.user.info,
  }));

  const dispatch = useDispatch()
  const router = useHistory()
  const [type, setType] = useState(0)
  const [list, setList] = useState<ISongList>([])

  useEffect(() => {
    if (!collect.length) {
      dispatch(getCollect(info.userId));
    }
  }, [])

  useEffect(() => {
    if (collect.length) {
      getList(type)
    }
  }, [collect.length, type])

  const getList = (type: number) => {
    const list: ISongListItem[] = collect.filter(item => (type ? (item.creator.userId !== info.userId) : (item.creator.userId === info.userId)))
    setList(list)
    setTimeout(() => {
      refresh()
    }, 0)
  }
  const detail = (id: number)=>{
    sessionStorage.setItem('songListId', String(id))
    router.push('/songList')
  }
  return (
    <ListContainer>
      <div className="title">
        <span className={type ? '' : 'active'} onClick={() => setType(0)}>创建的歌单</span>
        <span>|</span>
        <span className={type ? 'active' : ''} onClick={() => setType(1)}>收藏的歌单</span>
      </div>
      <ul>
        {
          list.map((item, index) => (
            <li key={index} className='list-item' onClick={() => detail(item.id)}>
              <img src={item.coverImgUrl} alt={item.name}/>
              <div className="center">
                <div className='name'>
                  {item.name}
                </div>
                <div className="trackCount">
                  {item.trackCount}首
                  {item.creator.userId === info.userId ? '' : (' ,by ' + item.creator.nickname)}
                </div>
              </div>
            </li>
          ))
        }
      </ul>
    </ListContainer>
  )
}

export default React.memo(SongList)
