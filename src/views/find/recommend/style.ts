import styled from "styled-components";
import {style} from "../../../assets/style/base";

export const Container = styled.div`
  .top{
    display: flex;
    justify-content: space-between;
    color: #000;
    line-height: 24px;
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
  ul{
    padding: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li{
      width: 104px;
      position: relative;
      font-size: 14px;
      margin-top: 7px;
      height: 150px;
      .play{
        text-align: right;
        position: absolute;
        border-top-right-radius: 6px;
        border-top-left-radius: 6px;
        width: 100%;
        background: rgba(0,0,0,0.4);
        top: 0;
        left: 0;
        color: #fff;
        line-height: 20px;
        &>span{
          color: #fff;
          padding-right: 6px;
          font-size: 12px;
        }
      }
      img{
        width: 104px;
        height: 104px;
        border-radius: 6px;
      }
      &>span{
        color: black;
        font-size: 14px;
        line-height: 22px;
        text-align: start;
        overflow: hidden; 
        text-overflow: ellipsis;
        display: -webkit-box; 
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
`
