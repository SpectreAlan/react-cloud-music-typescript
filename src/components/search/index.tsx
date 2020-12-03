import React, {useEffect, useRef, useState} from 'react';
import {Container} from './style'
import {withRouter, RouteComponentProps} from 'react-router-dom'
import {searchRequest, hotRequest} from '../../api/search'
import {ITracks, ITrack} from "../../interface";
import {getName} from "../../utils";
import Scroll from "../scroll";
import {changeFullScreen, changeIndex, changePlayList} from "../../store/modules/player/actions";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducer";

interface SearchProps extends RouteComponentProps {
  location: any;
}

const Search = (props: SearchProps) => {
  const [search, setSearch] = useState(false)
  const [keywords, setKeywords] = useState('')
  const [time, setTime] = useState(new Date().getTime())
  const [hots, setHots] = useState<string[]>([])
  const [result, setResult] = useState<ITracks>([])
  const {playList} = useSelector((state: RootState) => ({
    playList: state.player.playList
  }));
  const dispatch = useDispatch()
  const inputRef = useRef(null)
  useEffect(() => {
    hotRequest().then((res: any) => {
      const list: string[] = []
      res.data.result.hots.map((item: any) => {
        list.push(item.first)
      })
      setHots(list)
    })
  }, []);
  const onChange = (val: string) => {
    setKeywords(val)
    const currentTime = new Date().getTime()
    if (keywords.length && (currentTime - time > 500)) {
      setTime(currentTime)
      searchRequest(keywords).then((res: any) => {
        const list: ITracks = []
        const {songs} = res.data.result
        // eslint-disable-next-line array-callback-return
        songs.map((item: any) => {
          list.push({
            name: item.name,
            id: item.id,
            url: item.mp3Url,
            img: item.al.picUrl,
            duration: item.dt,
            singer: getName(item.ar),
            album: item.al.name
          })
        })
        setResult(list)
      })
    }
  }
  const cancel = () => {
    setSearch(false)
    setKeywords('')
    // @ts-ignore
    inputRef.current.value = ''
  }
  const play = (song: ITrack) => {
    setSearch(false)
    setResult([])
    setKeywords('')
    const index = playList.length
    dispatch(changePlayList({list: [song], type: 1}))
    dispatch(changeIndex(index))
    dispatch(changeFullScreen(true))
    // @ts-ignore
    inputRef.current.value = ''
  }
  const handleSuggestClick = (k: string) => {
    setKeywords(k)
    // @ts-ignore
    inputRef.current.value = k
  }
  const mv = props.location.pathname.includes('/mv')
  return (
    <Container show={search}>
      <div className='top'>
        <i className='iconfont' dangerouslySetInnerHTML={{__html: mv ? '&#xe603;' : '&#xe61c;'}}/>
        <input type="text" placeholder='输入关键字搜索...' onChange={(e: any) => onChange(e.target.value)}
               onFocus={() => setSearch(true)} ref={inputRef}/>
        <span onClick={cancel}>取消</span>
      </div>
      {
        search ?
          <Scroll>
            <div className='content'>
              <ul className='result'>
                {
                  result.map((item: ITrack) => <li key={item.id} onClick={() => {
                    play(item)
                  }}>
                    <i className="iconfont">&#xe74e;</i>
                    <span>
                    {item.name} - {item.singer}
                  </span>
                  </li>)
                }
              </ul>
              <h3 className='suggest-title'>热搜榜</h3>
              <ul className="suggest">
                {
                  hots.map((item: string, i: number) => <li
                      key={item} onClick={() => handleSuggestClick(item)}>
                      <span className={i < 3 ? 'red' : ''}>{i + 1}.</span>{item}
                    </li>
                  )
                }
              </ul>
            </div>
          </Scroll> : ''
      }
    </Container>
  )
};
export default React.memo(withRouter(Search))
