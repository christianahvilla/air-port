import React from 'react';
import {
    FormControl, InputLabel, makeStyles, MenuItem, Select,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 160,
        width: 360,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const DefaultSelect = (props) => {
    const classes = useStyles();
    const {
        items,
        handleChange,
        label,
        selected,
    } = props;

    const getItems = () => {
        return items.map((value) => {
            return <MenuItem key={`${value}`} value={value}>{value}</MenuItem>;
        });
    };

    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Destino</InputLabel>
            <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={selected}
                onChange={handleChange}
                label={label}
            >
                <MenuItem value="">
                    <em>Ninguno</em>
                </MenuItem>
                {getItems()}
            </Select>
        </FormControl>
    );
};

DefaultSelect.defaultProps = {
    items: [],
    label: '',
    selected: '',
    handleChange: () => {},
};

export default DefaultSelect;
