import React, {useCallback, useEffect, useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Cover, ScrollContainer, ToolBar, Top} from './style'
import Scroll from '../../components/scroll'
import {forceCheck} from 'react-lazyload'
import {ISingerInfo, singerInfoRequest} from '../../api/singer'
import Songs from "./songs";
import Albums from "./albums";
import Mv from "./mv";

const SingerDetail = () => {
  const listRef = useRef(null)
  const toolbarRef = useRef(null)
  const coverRef = useRef(null)
  const titleRef = useRef(null)
  const headRef = useRef(null)
  const router = useHistory()
  const [i, setI] = useState(0)
  const [info, setInfo] = useState<ISingerInfo>({
    name: '',
    eventCount: 0,
    id: -1,
    detailDescription: '',
    description: '',
    cover: '',
    briefDesc: '',
    albumSize: 0,
    musicSize: 0,
    mvSize: 0,
    followed: false,
    identifyTag: [],
  })
  useEffect(() => {
    singerInfoRequest(sessionStorage.getItem('singerId') || '').then((res: any) => {
      const {eventCount, user, artist} = res.data.data
      const {name, id, cover, identifyTag, briefDesc, albumSize, musicSize, mvSize} = artist
      const {detailDescription, description, followed} = user || {}
      setInfo({
        eventCount,
        name,
        id,
        cover,
        identifyTag,
        briefDesc,
        albumSize,
        musicSize,
        mvSize,
        detailDescription,
        description,
        followed
      })
    })
  }, [])
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
  const scrollRef = useRef(null)
  const refresh = useCallback(() => { // 解决切换tab以后better-scroll滚动假死bug
    if (scrollRef && scrollRef.current) {
      // @ts-ignore
      scrollRef.current.refresh()
    }
  }, [])
  return (
    <>
      <Top ref={headRef}>
        <div className='topContent'>
          <i className='iconfont' onClick={() => router.goBack()}>&#xe63a;</i>
          <span ref={titleRef}>{info.name}</span>
          <div/>
        </div>
      </Top>
      <Cover ref={coverRef} img={info.cover}>
        <div/>
      </Cover>
      <ToolBar ref={toolbarRef}>
        <li onClick={() => setI(0)} className={i === 0 ? 'active' : ''}>主页</li>
        <li onClick={() => setI(1)} className={i === 1 ? 'active' : ''}>歌曲 <span>({info.musicSize})</span></li>
        <li onClick={() => setI(2)} className={i === 2 ? 'active' : ''}>专辑 <span>({info.albumSize})</span></li>
        <li onClick={() => setI(3)} className={i === 3 ? 'active' : ''}>视频<span>({info.mvSize})</span></li>
      </ToolBar>
      <ScrollContainer ref={listRef}>
        <Scroll onScroll={onScroll} ref={scrollRef}>
          <div className='content'>
            <div className="out">
              <div className="info-box">
                <div className="info">
                  <h2>{info.name}</h2>
                  <p>{info.description}</p>
                  <div className="tags">
                    {
                      info.identifyTag && info.identifyTag.map((item: string) => (
                        <span>{item}</span>
                      ))
                    }
                  </div>
                </div>
              </div>
              {
                i === 0 ?
                  <div className="scroll-content">
                    <div className='description'>
                      {info.briefDesc}
                    </div>
                  </div> : i === 1 ?
                  <div className="scroll-content">
                    <Songs id={info.id} refresh={refresh}/>
                  </div> : i === 2 ?
                    <div className="scroll-content">
                      <Albums id={info.id} refresh={refresh}/>
                    </div> :
                    <div className="scroll-content">
                      <Mv id={info.id} refresh={refresh}/>
                    </div>
              }
            </div>
          </div>
        </Scroll>
      </ScrollContainer>
    </>
  )
}

export default React.memo(SingerDetail)
