import React from 'react';
import {
    TableBody,
    TableHead,
    Table,
    TableContainer,
    Paper,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const DefaultTable = (props) => {
    const classes = useStyles();
    const {
        getColumns,
        getCells,
    } = props;

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="a dense table">
                <TableHead>
                    {getColumns()}
                </TableHead>
                <TableBody>
                    {getCells()}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

DefaultTable.defaultProps = {
    getCells: () => {},
    getColumns: () => {},
};

export default DefaultTable;
