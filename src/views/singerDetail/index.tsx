import React, {useCallback, useEffect, useRef, useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Cover, ScrollContainer, ToolBar, Top} from './style'
import Scroll from '../../components/scroll'
import {forceCheck} from 'react-lazyload'
import {getCount} from '../../utils'
import {ISingerInfo, singerInfoRequest} from '../../api/singer'


const SingerDetail = () => {
  const listRef = useRef(null)
  const toolbarRef = useRef(null)
  const coverRef = useRef(null)
  const titleRef = useRef(null)
  const headRef = useRef(null)
  const router = useHistory()
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
      const {detailDescription, description, followed} = user
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
        toolbar
      </ToolBar>
      <ScrollContainer ref={listRef}>
        <Scroll onScroll={onScroll}>
          <div className='content'>
            <div className="out">
              <div className="info-box">
                <div className="info">
                  <h2>{info.name}</h2>
                  <p>{info.description}</p>
                  <div className="tags">
                    {
                      info.identifyTag.map((item: string) => (
                        <span>{item}</span>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div className="songList">
                songList
              </div>
            </div>
          </div>
        </Scroll>
      </ScrollContainer>
    </>
  )
}

export default React.memo(SingerDetail)
