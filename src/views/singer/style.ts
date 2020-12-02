import styled from "styled-components";
import {style} from "../../assets/style/base";

export const Container = styled.div`
  position: fixed;
  top:0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 11;
  box-sizing: border-box;
  overflow: hidden;
  padding-top: 100px;
  background: #fff;
  .none{
    text-align: center;
    padding-top: 20px;
  }
  .fixed{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .top{
      color: #000;
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      i{
        font-size: 20px;
        line-height: 40px;
        margin-left: 12px;
      }
    }
    .category{
      padding: 0 12px;
      margin-bottom: 12px;
      display: flex;
      span{
        margin-right: 12px;
        color: gray;
      }
      .active{
        color: ${style['theme-color']};
      }
    }
  }
  .singer-list{
    padding: 0 12px 12px;
    li{
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      .left{
        display: flex;
        font-size: 14px;
        height: 50px;
        img{
          border-radius: 50%;
          width: 50px;
          height: 50px;
          margin-right: 14px;
        }
        .alias{
          line-height: 25px;
        }
        .no-alias{
          line-height: 50px;
        }
      }
      .right{
        border: 1px solid ${style['theme-color']};
        color: ${style['theme-color']};
        padding-left: 8px;
        height: 20px;
        border-radius: 10px;
        margin-top: 15px;
        width: 60px;
        i{
          margin-right: 2px;
        }
      }
    }
  }
`
