import styled from "styled-components";
import {style} from "../../assets/style/base";

export const UserInfoBox = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding: 0 35px 0 70px;
  .center{
    color: ${style['font-color']};
    font-size: 15px;
    .name{
      height: 34px;
      font-size: 15px;
      color: #000;
    }
    .level{
      font-size: 14px;
    }
  }
  img{
    width: 50px;
    height: 50px;
    position: absolute;
    border-radius: 25px;
    left: 0;
    top: 0;
  }
`
export const ListContainer = styled.div`
  .title{
    display: flex;
    justify-content: space-around;
    margin-bottom: 12px;
    span{
      font-size: 15px;
      font-weight: bold;
      color: lightslategrey;
      padding: 8px 0;
    }
    .active{
      color: #000;
      border-bottom: 1px solid ${style['theme-color']};
    }
  }
  .list-item{
    position: relative;
    margin-bottom: 20px;
    padding: 0 35px 0 70px;
    .center{
      color: ${style['font-color']};
      font-size: 15px;
      .name{
        height: 34px;
        font-size: 15px;
        color: #000;
      }
      .trackCount{
        font-size: 14px;
      }
    }
    img{
      width: 50px;
      height: 50px;
      position: absolute;
      border-radius: 8px;
      left: 0;
      top: 0;
    }
  }
`
export const Container = styled.div`
  color: ${style["font-color"]};
  padding: 12px;
`

export const ScrollContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 48px;
  width: 100%;
  overflow: hidden;
`
