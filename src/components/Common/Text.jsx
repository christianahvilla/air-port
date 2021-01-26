import React from 'react';
import { Typography } from '@material-ui/core';

const DefaultText = (props) => {
    const {
        text,
        variant,
        component,
        className,
    } = props;

    return (
        <Typography
            className={className}
            gutterBottom
            variant={variant}
            component={component}
            noWrap
        >
            {text}
        </Typography>
    );
};

DefaultText.defaultProps = {
    text: '',
    variant: '',
    component: '',
    className: '',
};

export default DefaultText;
