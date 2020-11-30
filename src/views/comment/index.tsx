import React, {useEffect, useRef, useState} from "react";
import {Container} from './style'
import {commentsRequest} from "../../api/player";
import {commentLikeRequest} from "../../api/common";
import Loading from "../../components/loading";
import Scroll from "../../components/scroll";
import {IComments, IComment, ITrack} from '../../interface'
import {getCount} from '../../utils'

enum commentType {
  hotComments = 0,
  topComments = 1,
  comments = 2
}

interface IProps {
  song: ITrack;
  handleComment: Function
}

type TComments = IComments[]
const Comment = (props: IProps) => {
  const {song, handleComment} = props
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState<commentType>(2)
  const [total, setTotal] = useState<commentType>(0)
  const [comments, setComments] = useState<TComments>([[], [], []])
  const scrollRef = useRef()
  useEffect(() => {
    getData()
  }, [])
  const getData = () => {
    setLoading(true)
    commentsRequest(song.id).then(res => {
      setLoading(false)
      const {comments, hotComments, topComments, total} = res.data
      setComments([topComments, hotComments, comments,])
      setTotal(total)
    })
  }
  const like = (item: IComment, song: ITrack) => {
    commentLikeRequest(song.id, item.liked ? 0 : 1, 0, item.commentId).then(res => {
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
                <img src={song.img} alt={song.name}/>
                <div className="info">
                  <p>{song.name}</p>
                  <span>{song.singer}</span>
                </div>
              </div>
              <div className="title">
                <h3>评论区</h3>
                <div className='type'>
                <span className={type === 0 ? 'active' : ''}
                      onClick={() => changeType(0)}>最热</span>
                  <span className='separator'>|</span>
                  <span className={type === 1 ? 'active' : ''}
                        onClick={() => changeType(1)}>推荐</span>
                  <span className='separator'>|</span>
                  <span className={type === 2 ? 'active' : ''} onClick={() => changeType(2)}>最新</span>
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
                          <span className='time'>{item.time}</span>
                          <div className="content">{item.content}</div>
                          <p>{getCount(item.beReplied.length) > 0 ? getCount(item.beReplied.length) + '条回复 >' : ''}</p>
                        </div>
                        <div className="liked">
                          {getCount(item.likedCount)}
                          <i className={item.liked ? 'iconfont like' : 'iconfont'}
                             onClick={() => like(item, song)}>&#xe618;</i>
                        </div>
                      </li>
                    )) : <div className="none">暂时没有评论 ~ </div>
                  }
                </ul>
              </Scroll>
            </div>
          </Container>
      }
    </>
  )
}

export default React.memo(Comment)
