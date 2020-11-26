import React, {useRef, useCallback} from 'react'
import {useHistory} from 'react-router-dom'
import {Top, Cover, ToolBar, ScrollContainer} from './style'
import Scroll from '../../components/scroll'
import SongList from '../SongList'
import {forceCheck} from 'react-lazyload'
import {ISongListProps} from '../../interface'
import {getCount} from '../../utils'

interface IInfo {
  info: ISongListProps
}

const SongListPage = (props: IInfo) => {
  const {tracks, coverImgUrl, name, creator, avatarUrl, trackCount, shareCount, commentCount, subscribedCount, subscribed} = props.info
  const listRef = useRef(null)
  const toolbarRef = useRef(null)
  const coverRef = useRef(null)
  const titleRef = useRef(null)
  const headRef = useRef(null)
  const router = useHistory()

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

  const subscribe = ()=>{
    if(subscribed){return}
    console.log('subscribe')
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
      <Cover ref={coverRef} img={coverImgUrl}/>
      <ToolBar ref={toolbarRef}>
        <div className='item'>
          <i className='iconfont'>&#xe774;</i>
          <span>播放全部</span>
          <span className='count'>(共{trackCount}首)</span>
        </div>
        <div className='item'>
          <i className='iconfont' onClick={()=>{subscribe()}}>&#xe619;</i>
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
                  <li>
                    <i className='iconfont'>&#xe865;</i>
                    <p>{commentCount}</p>
                  </li>
                  <li>
                    <i className='iconfont'>&#xe65c;</i>
                    <p>{shareCount}</p>
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
    </>
  )
}

export default React.memo(SongListPage)
