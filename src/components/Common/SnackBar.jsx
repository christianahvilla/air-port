import React from 'react';
import { Snackbar } from '@material-ui/core';
import DefaultAlert from './Alert';

const DefaultSnackbar = (props) => {
    const {
        message,
        severity,
        handleClose,
        open,
    } = props;

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <DefaultAlert
                onClose={handleClose}
                message={message}
                severity={severity}
            />
        </Snackbar>
    );
};

DefaultSnackbar.defaultProps = {
    message: '',
    severity: '',
    handleClose: () => {},
    open: false,
};

export default DefaultSnackbar;
