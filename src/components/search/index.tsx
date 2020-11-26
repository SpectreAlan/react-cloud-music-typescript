import React, {useEffect} from 'react';
import {Container} from './style'
import {withRouter, RouteComponentProps} from 'react-router-dom'

interface SearchProps extends RouteComponentProps {
    location: any;
}

const Search = (props: SearchProps) => {

    useEffect(() => {
    }, []);

    const mv = props.location.pathname.includes('/mv')
    return (
        <Container>
            <i className='iconfont' dangerouslySetInnerHTML={{__html: mv ? '&#xe603;' : '&#xe61c;'}}/>
            <input type="text" placeholder='123'/>
            <div/>
        </Container>
    )
};
export default React.memo(withRouter(Search))
