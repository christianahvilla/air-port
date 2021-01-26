import React from 'react';
import { CircularProgress } from '@material-ui/core';

const DefaultProgress = (props) => {
    const {
        color,
        size,
        className,
    } = props;

    return (
        <CircularProgress color={color} size={size} className={className} />
    );
};

DefaultProgress.defaultProps = {
    color: '',
    size: 0,
    className: '',
};

export default DefaultProgress;
