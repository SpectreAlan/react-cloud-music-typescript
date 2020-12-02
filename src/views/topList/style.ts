import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top:0;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 111;
  overflow: hidden;
  padding-top: 40px;
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
      color: gray;
      font-size: 16px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: flex;
      justify-content: space-between;
      i{
        font-size: 20px;
        line-height: 40px;
        margin-left: 12px;
      }
    }
  }
  .item{
    padding: 12px;
    h3{
      font-size: 16px;
      font-weight: bold;
      color: #000;
      margin-bottom: 12px;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      .hot{
        width: 104px;
        position: relative;
        max-height: 150px;
        margin: 0 4px 12px;
        span{
          position: absolute;
          top: 0;
          left: 0;
          color: #fff;
          display: inline-block;
          width: 100%;
          background: rgba(0,0,0,0.5);
          padding: 6px 0;
          text-align: center;
        }
        img{
          width: 104px;
          height: 104px;
          margin-bottom: 6px;
        }
        p{
          line-height: 16px;
        }
      }
    }
  }
`

