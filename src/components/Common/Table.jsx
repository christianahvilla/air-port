import React from 'react';
import {
    TableBody,
    TableHead,
    Table,
    TableContainer,
    Paper,
} from '@material-ui/core';
import commonStyles from './Style';

const DefaultTable = (props) => {
    const classes = commonStyles();
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
