import styled from "styled-components";
import {style} from "../../../assets/style/base";

export const Container = styled.div`
  padding: 10px;
  .top{
    display: flex;
    justify-content: space-between;
    color: #000;
    line-height: 24px;
    margin-bottom: 6px;
    h3{
      font-size: 14px;
    }
    div{
      border-radius: 12px;
      border: 1px solid ${style['font-color']};
      padding: 0 12px;
      font-size: 12px;
    }
  }
`
export const SongsList = styled.ul`
li{
  position: relative;
  margin-bottom: 12px;
  padding: 0 35px 0 60px;
  height: 50px;
  .center{
    color: ${style['font-color']};
    font-size: 15px;
    .name{
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
      font-size: 30px;
    }
  }
}
`
