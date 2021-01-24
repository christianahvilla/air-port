import {
    Grid, Paper, Typography, TableCell, TableRow, IconButton,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';
import DefaultTable from '../components/Common/Table';

const Reservations = () => {
    const createData = (id, origen, destiny, time, people) => {
        return {
            id, origen, destiny, time, people,
        };
    };

    const rows = [
        createData(1, 'CDMX', 'Cancun', '12-12-2021 9:51', 3),
        createData(2, 'CDMX', 'Morelia', '12-12-2021 9:51', 1),
        createData(3, 'CDMX', 'MTY', '12-12-2021 9:51', 2),
        createData(4, 'CDMX', 'GDL', '12-12-2021 9:51', 6),
        createData(5, 'CDMX', 'La Paz', '12-12-2021 9:51', 4),
    ];

    const deleteItem = (index) => {
        rows.splice(index, 1);
    };

    const getCells = () => {
        return rows.map((item, index) => {
            return (
                <TableRow key={`row-${item.id}`}>
                    <TableCell align="center">{item.origen}</TableCell>
                    <TableCell align="center">{item.destiny}</TableCell>
                    <TableCell align="center">{item.time}</TableCell>
                    <TableCell align="right">{item.people}</TableCell>
                    <TableCell align="center">
                        <IconButton aria-label="delete" color="secondary" onClick={deleteItem(index)}>
                            <DeleteOutlined />
                        </IconButton>
                    </TableCell>
                </TableRow>
            );
        });
    };

    const getColumns = () => {
        return (
            <TableRow>
                <TableCell align="center">Origen</TableCell>
                <TableCell align="center">Destino</TableCell>
                <TableCell align="center">Horario</TableCell>
                <TableCell align="center">Personas</TableCell>
                <TableCell align="center">Acciones</TableCell>
            </TableRow>
        );
    };

    return (
        <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Typography variant="h2" gutterBottom>
                    Tus reservaciones
                </Typography>
                <Paper elevation={0}>
                    <DefaultTable
                        getColumns={getColumns}
                        getCells={getCells}
                    />
                </Paper>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
};

export default Reservations;
