import styled from "styled-components";
import {style} from "../../assets/style/base";

export const Container = styled.ul`
padding: 12px;
li{
  position: relative;
  margin-bottom: 12px;
  padding: 0 35px 0 60px;
  height: 50px;
  .center{
    color: ${style['font-color']};
    font-size: 15px;
    .name{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      height: 34px;
      font-size: 15px;
      color: #000;
      span{
        font-size: 14px;
        color: ${style['font-color']};
      }
    }
    .album{
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
  }
  img{
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius: 6px;
    left: 0;
    top: 0;
  }
  .right{
    position: absolute;
    line-height: 52px;
    right: 0;
    top: 0;
    width: 30px;
    .iconfont{
      font-size: 22px;
    }
  }
}
`

