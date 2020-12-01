import React, {useCallback, useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Cover, ScrollContainer, ToolBar, Top} from './style'
import Scroll from '../../components/scroll'
import SongList from '../SongList'
import {forceCheck} from 'react-lazyload'
import {CommentType, ISongListProps} from '../../interface'
import {getCount} from '../../utils'
import {playListSubscribeRequest} from '../../api/common'
import {changeFullScreen, changeIndex, changePlayList} from '../../store/modules/player/actions'
import {useDispatch} from "react-redux";
import Comment from "../../views/comment";

interface IInfo {
  info: ISongListProps
}

const SongListPage = (props: IInfo) => {
  const {tracks, coverImgUrl, name, creator, avatarUrl, trackCount, shareCount, commentCount, subscribedCount, subscribed, id} = props.info
  const listRef = useRef(null)
  const toolbarRef = useRef(null)
  const coverRef = useRef(null)
  const titleRef = useRef(null)
  const headRef = useRef(null)
  const router = useHistory()
  const dispatch = useDispatch()
  const [comment, setComment] = useState(false)
  const handleComment = ()=>{
    if(id > 0){
      setComment(!comment)
    }
  }
  const onScroll = useCallback((pos) => {
    if (!toolbarRef) {
      return
    }
    // @ts-ignore
    const toolbarStyle = toolbarRef.current.style
    // @ts-ignore
    const headStyle = headRef.current.style
    // @ts-ignore
    const coverStyle = coverRef.current.style
    // @ts-ignore
    const listStyle = listRef.current.style
    forceCheck()
    const y = pos.y
    toolbarStyle.top = y + 206 + 'px'
    if (y > 0) { // 下滑
      coverStyle.transform = 'scale(' + (100 + y) / 100 + ')'
    } else { // 上滑
      // @ts-ignore
      titleRef.current.style.opacity = 1 - (100 + y) / 100
      headStyle.color = '#fff'
      if (y < -155) { // 吸顶
        toolbarStyle.top = '48px'
        coverStyle.height = '48px'
        coverStyle['z-index'] = 7
        listStyle['z-index'] = 6
      } else {
        headStyle['z-index'] = 8
        coverStyle.height = '220px'
        coverStyle['z-index'] = 6
        listStyle['z-index'] = 7
      }
    }
  }, [])

  const subscribe = () => {
    playListSubscribeRequest(id, subscribed ? 2: 1).then(res=>{
      if(res.data.code === 200){
        console.log('操作成功')
      }
    }).catch(e=>{
      console.log('操作失败')
    })
  }
  const playAll = () => {
    dispatch(changePlayList({type: 2, list: tracks}))
    dispatch(changeIndex(0))
    dispatch(changeFullScreen(true))
  }

  return (
    <>
      <Top ref={headRef}>
        <div className='topContent'>
          <i className='iconfont' onClick={() => router.goBack()}>&#xe63a;</i>
          <span ref={titleRef}>{name}</span>
          <div/>
        </div>
      </Top>
      <Cover ref={coverRef} img={coverImgUrl}>
        <div/>
      </Cover>
      <ToolBar ref={toolbarRef}>
        <div className='item' onClick={() => playAll()}>
          <i className='iconfont'>&#xe774;</i>
          <span>播放全部</span>
          <span className='count'>(共{trackCount}首)</span>
        </div>
        <div className='item'>
          <i className='iconfont' onClick={() => {
            subscribe()
          }}>&#xe619;</i>
          <span>{getCount(subscribedCount)}</span>
        </div>
      </ToolBar>
      <ScrollContainer ref={listRef}>
        <Scroll onScroll={onScroll}>
          <div className='content'>
            <div className="out">
              <div className="info-box">
                <div className="info">
                  <img src={avatarUrl} alt={name}/>
                  <div className="center">
                    <div className="creator">
                      {creator}
                    </div>
                    <div className='name'>
                      {name}
                    </div>
                  </div>
                </div>
                <ul className="icons">
                  <li onClick={handleComment}>
                    <i className='iconfont'>&#xe865;</i>
                    <p>{getCount(commentCount)}</p>
                  </li>
                  <li>
                    <i className='iconfont'>&#xe65c;</i>
                    <p>{getCount(shareCount)}</p>
                  </li>
                  <li>
                    <i className='iconfont'>&#xe626;</i>
                    <p>下载</p>
                  </li>
                  <li>
                    <i className='iconfont'>&#xe669;</i>
                    <p>多选</p>
                  </li>
                </ul>
              </div>
              <div className="songList">
                <SongList list={tracks}/>
              </div>
            </div>
          </div>
        </Scroll>
      </ScrollContainer>
      {comment ? <Comment info={{name,img: coverImgUrl, id, creator}} commentType={CommentType.playlist} handleComment={handleComment}/> : ''}
    </>
  )
}

export default React.memo(SongListPage)
