import React from "react";
import Comments from '../../layouts/comments'
import { CommentType} from '../../interface'
import {Container} from './style'

interface IInfo {
  name: string;
  id: number;
  img: string;
  creator: string
}

interface IProps {
  info: IInfo;
  commentType: CommentType;
  handleComment: Function
}

const Comment = (props: IProps) => {
  const {info, handleComment, commentType} = props
  return (
    <Comments title='评论' commentType={commentType} handleBack={handleComment} id={info.id} height='160px'>
      <Container>
        <img src={info.img} alt={info.name}/>
        <div className="info">
          <p>{info.name}</p>
          <span>{info.creator}</span>
        </div>
      </Container>
    </Comments>
  )
}

export default React.memo(Comment)
