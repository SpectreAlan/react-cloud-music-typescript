import React from 'react';
import {SpectrumContainer} from './style'

const Loading = () => (
    <SpectrumContainer>
        <div/>
        <div/>
        <div/>
        <div/>
        <div/>
        <span>拼命加载中...</span>
    </SpectrumContainer>
)

export default React.memo(Loading);
