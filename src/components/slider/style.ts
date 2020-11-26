import styled from 'styled-components';
import {style} from '../../assets/style/base';

interface interfaceProps {
  height: number
}

export const Container = styled.div`
    .banner-wrapper{
      position: relative;
      .slide-banner-wrapper{
        min-height: 1px;
        overflow: hidden;
        .slide-banner-content{
          height: ${(props: interfaceProps) => props.height}px;
          white-space: nowrap;
          font-size: 0;
          .slide-page{
            display: inline-block;
            height: 200px;
            width: 100%;
          }
        }
      }
      .dots-wrapper{
        position: absolute;
        bottom: 4px;
        left: 50%;
        transform: translateX(-50%);
        span{
          transition: 0.4s all;
        }
        .dot{
          display: inline-block;
          margin: 0 4px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #eee;
        }
        .active{
          width: 20px;
          border-radius: 5px;
          background: ${style['theme-color']};
        }
      }
    }
`;
