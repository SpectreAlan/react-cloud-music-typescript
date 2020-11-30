import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  background: #fff;
  height: 100%;
  padding: 160px 12px 0;
  box-sizing: border-box;
  z-index: 9999999;
  top: 0;
  left: 0;
  .fixed{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 12px;
    box-sizing: border-box;
    .top{
      height: 54px;
      line-height: 54px;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
    }
    .song{
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
    }
    .title{
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      h3{
        font-size: 15px;
      }
      .type{
        display: flex;
        .separator{
          margin: 0 6px;
        }
        span{
          color: gray;
        }
        .active{
          color: #000;
        }
      }
    }
  }
  .list{
    overflow: hidden;
    background: #fff;
    height: 100%;
    .none{
      padding-top: 20px;
      text-align: center;
    }
    .item{
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      .avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
      .info{
         width: 260px;
         margin: 0 10px;
         .time{
          line-height: 30px;
          color: lightslategrey;
         }
         .content{
          line-height: 16px;
           white-space:normal;
            word-break:keep-all;
            word-wrap: break-word;
         }
         p{
          line-height: 30px;
          color: darkcyan;
         }
      }
      .liked{
         width: 50px;
         .like{
          color: red;
         }
      }
    }
  }
`
