import React, {useEffect, useRef, useState} from "react";
import {Container} from './style'
import {commentLikeRequest, commentRequest, commentsRequest} from "../../api/common";
import Loading from "../../components/loading";
import Scroll from "../../components/scroll";
import {IComments, IComment} from '../../interface'
import {getCount, formatTime} from '../../utils'

enum commentType {
  comments = 0,
  hotComments = 1,
  topComments = 2
}
interface IInfo {
  name: string;
  id: number;
  img: string;
  creator: string
}
interface IProps {
  info: IInfo;
  commentType: string;
  handleComment: Function
}

type TComments = IComments[]
const Comment = (props: IProps) => {
  const {info, handleComment, commentType} = props
  const [loading, setLoading] = useState(false)
  const [v, setV] = useState('')
  const [type, setType] = useState<commentType>(0)
  const [total, setTotal] = useState<commentType>(0)
  const [comments, setComments] = useState<TComments>([[], [], []])
  const scrollRef = useRef()
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    setLoading(true)
    commentsRequest(info.id, commentType).then(res => {
      setLoading(false)
      const {comments, hotComments, topComments, total} = res.data
      setComments([comments, hotComments, topComments])
      setTotal(total)
    })
  }
  const like = (item: IComment, info: IInfo) => {
    commentLikeRequest(info.id, item.liked ? 0 : 1, 0, item.commentId).then(res => {
      getData()
    })
  }
  const changeType = (type: number) => {
    setType(type)
    setTimeout(() => {
      if (scrollRef && scrollRef.current) {
        // @ts-ignore
        scrollRef.current.refresh()
      }
    }, 0)
  }
  const handleTextareaChange = (e:any)=>{
    setV(e.target.value)
  }
  const replay = ()=>{
    commentRequest(info.id,0,v).then(res=>{
      console.log(res.data)
      setV('')
    })
  }
  return (
    <>
      {
        loading ?
          <Loading/> :
          <Container>
            <div className="fixed">
              <div className="top">
                <i className='iconfont' onClick={() => handleComment()}>&#xe63a;</i>
                <span>评论({getCount(total)})</span>
                <div/>
              </div>
              <div className="song">
                <img src={info.img} alt={info.name}/>
                <div className="info">
                  <p>{info.name}</p>
                  <span>{info.creator}</span>
                </div>
              </div>
              <div className="title">
                <h3>评论区</h3>
                <div className='type'>
                <span className={type === 0 ? 'active' : ''}
                      onClick={() => changeType(0)}>最新</span>
                  <span className='separator'>|</span>
                  <span className={type === 1 ? 'active' : ''}
                        onClick={() => changeType(1)}>最热</span>
                  <span className='separator'>|</span>
                  <span className={type === 2 ? 'active' : ''} onClick={() => changeType(2)}>推荐</span>
                </div>
              </div>
            </div>
            <div className="list">
              <Scroll ref={scrollRef}>
                <ul>
                  {
                    comments[type].length ? comments[type].map((item, i: number) => (
                      <li className='item' key={item.commentId}>
                        <img className="avatar" src={item.user.avatarUrl} alt={item.user.nickname}/>
                        <div className="info">
                          <h3>{item.user.nickname}</h3>
                          <span className='time'>{formatTime(item.time)}</span>
                          <div className="content">{item.content}</div>
                          <p>{getCount(item.beReplied.length) > 0 ? getCount(item.beReplied.length) + '条回复 >' : ''}</p>
                        </div>
                        <div className="liked">
                          {getCount(item.likedCount)}
                          <i className={item.liked ? 'iconfont like' : 'iconfont'}
                             onClick={() => like(item, info)}>&#xe618;</i>
                        </div>
                      </li>
                    )) : <div className="none">暂时没有评论 ~ </div>
                  }
                </ul>
              </Scroll>
            </div>
            <div className="replay">
              <textarea value={v} onChange={handleTextareaChange}/>
              <button onClick={replay}>回复</button>
            </div>
          </Container>
      }
    </>
  )
}

export default React.memo(Comment)
