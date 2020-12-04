import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
margin-bottom: 15px;
img{
  width: 60px;
  height: 60px;
  border-radius: 8px;
}
.info{
  margin-left: 10px;
  p{
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 40px;
  }
  span{
    font-size: 12px;
    color: lightslategrey;
    line-height: 20px;
  }
}  
`
