import styled from "styled-components";
import {style} from "../../assets/style/base";
export const RecommendContainer = styled.div`
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
`
