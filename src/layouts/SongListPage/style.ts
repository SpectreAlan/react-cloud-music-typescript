import styled from 'styled-components';

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
export const ToolBar = styled.div`
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
  .iconfont{
    font-size: 22px;
  }
  span{
    font-size: 16px;
    &.count{
      font-size: 14px;
      margin-left: 8px;
      color: lightslategrey;
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
        top: 40px;
        width: 100%;
        padding: 10px;
        .info{
          display: flex;
          margin-bottom: 20px;
          .center{
            height: 60px;
            margin-left: 10px;
            width: 220px;
            position: relative;
            padding: 10px;
            color: #fff;
            .name{
              font-size: 16px;
              line-height: 20px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
            .creator{
              font-size: 12px;
              position: absolute;
              left: 10px;
              bottom: 10px;
            }
          }
          img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
          }
        }
        .icons{
          display: flex;
          justify-content: space-around;
          li{
            text-align: center;
            i{
              font-size: 25px;
              color: #fff;
            }
            p{
              color: #fff;
              font-size: 14px;
            }
          }
        }
      }
    }
    .songList{
      background-color: #fff;
    }
  }
`
