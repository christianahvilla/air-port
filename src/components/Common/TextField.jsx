import React from 'react';
import TextField from '@material-ui/core/TextField';
import commonStyles from './Style';

const DefaultTextField = (props) => {
    const {
        variant,
        label,
        type,
        inputProps,
        handleChange,
        value,
    } = props;

    const classes = commonStyles();

    return (
        <TextField
            className={classes.formControl}
            variant={variant}
            label={label}
            type={type}
            value={value}
            onChange={handleChange}
            inputProps={inputProps}
        />
    );
};

DefaultTextField.defaultProps = {
    variant: '',
    label: '',
    type: '',
    inputProps: {},
    handleChange: () => {},
    value: '',
};

export default DefaultTextField;
