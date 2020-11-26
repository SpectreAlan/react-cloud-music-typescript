import styled from "styled-components";
import {style} from "../../../assets/style/base";

export const Container = styled.ul`
  padding: 12px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-radius: 8px;
  background-color: #fff;
  li{
    width: 80px;
    height: 54px;
    text-align: center;
    font-size: 12px;
    margin-bottom: 12px;
    .iconBox{
      width:34px;
      margin: 0 auto 6px;
      height: 34px;
      line-height: 34px;
      border-radius: 50%;
      background: ${style['theme-color']};
      .iconfont{
        font-size: 20px;
        color: #fff;
      }
    }
  }
`
