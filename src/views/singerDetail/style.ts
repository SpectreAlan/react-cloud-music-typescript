import styled from 'styled-components';
import {style} from '../../assets/style/base'

interface InterfaceImg {
  img: string
}

export const Top = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  z-index: 8;
  overflow: hidden;
  height: 54px;
  padding: 0 9px;
  span{
    opacity: 0;
  }
  .topContent{
    height: 54px;
    line-height: 54px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 16px;
  }
  .iconfont{
    font-size: 22px;
    color: #fff;
  }
  img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 54px;
    z-index: 9;
  }
`
export const ToolBar = styled.ul`
  position: fixed;
  top: 206px;
  left: 0;
  height: 54px;
  line-height: 54px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  background: #fff;
  z-index: 8;
  padding: 0 12px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  li{
    font-size: 16px;
    span{
      font-size: 12px;
      color: lightslategrey;
    }
  }
  .active{
    color: ${style['theme-color']};
    span{
      color: ${style['theme-color']};
    }
  }
`
export const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 220px;
  width: 100%;
  z-index: 6;
  overflow: hidden;
  background: url(${(props: InterfaceImg) => props.img}) no-repeat;
  background-size: cover;
  div{
    background: rgba(0,0,0,0.7);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
`
export const ScrollContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 48px;
  width: 100%;
  height: 100%;
  z-index: 7;
  .content{
    padding-bottom: 38px;
    .out{
      padding-top:260px;
      position: relative;
      .info-box{
        position: absolute;
        top: 70px;
        width: 100%;
        padding: 10px;
        .info{
          color: #fff;
          h2{
            font-size: 18px;
            font-weight: bold;
          }
          p{
            margin: 12px 0;
          }
        }
      }
      .scroll-content{
        background: #fff;
        padding: 12px;
        .description{
          font-size: 14px;
          line-height: 20px;
          text-align: justify;
        }
      }
    }
  }
`
export const AlbumContainer = styled.ul`
  background: #fff;
  li{
    margin-bottom: 12px;
    display: flex;
    img{
      width: 50px;
      height: 50px;
      margin-right: 12px;
      border-radius: 6px;
    }
    .info{
      >span{
        font-size: 15px;
        line-height: 30px;
        color: #000;
      }
      p{
        font-size: 12px;
        line-height: 20px;
        color: gray;
        span{
          margin-left: 12px;
        }
      }
    }
  }
`
