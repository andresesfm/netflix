import React from 'react';
import { Spinner, LockBody, Picture } from './styles/loading'

const Loading = ({ src, ...restProps }) => {
    return <Spinner {...restProps}>
        <LockBody />
        <Picture src={`/images/users/${src}.png`} />
    </Spinner>;
};

export default Loading;
