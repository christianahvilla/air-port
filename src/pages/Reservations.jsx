import {
    Grid, Paper, TableCell, TableRow, IconButton,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultTable from '../components/Common/Table';
import flightActions from '../actions/flight';
import DefaultSnackbar from '../components/Common/SnackBar';
import DefaultText from '../components/Common/Text';
import pagesStyles from './Style';

const Reservations = () => {
    const flight = useSelector((state) => state.flight);
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('');
    const [openAlert, setOpenAlert] = useState(false);
    const classes = pagesStyles();

    const {
        flights,
    } = flight;

    const handleDelete = (id) => {
        setMessage('¡Reservación cancelada!');
        setSeverity('success');
        setOpenAlert(true);
        dispatch(flightActions.deleteReservation(id));
    };

    const getCells = () => {
        return flights.map((item) => {
            return (
                <TableRow key={`row-${item.id}`}>
                    <TableCell align="center">{item.origin}</TableCell>
                    <TableCell align="center">{item.destiny}</TableCell>
                    <TableCell align="center">{item.time}</TableCell>
                    <TableCell align="right">{item.people}</TableCell>
                    <TableCell align="center">
                        <IconButton aria-label="delete" color="secondary" onClick={() => { handleDelete(item.id); }}>
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

    const handleClose = useCallback(() => {
        setOpenAlert(false);
    }, []);

    return (
        <Grid container>
            <DefaultSnackbar
                handleClose={handleClose}
                message={message}
                open={openAlert}
                severity={severity}
            />
            <Grid item xs={1} />
            <Grid item xs={10}>
                <DefaultText
                    className={classes.title}
                    text="Reservaciones"
                    variant="h3"
                    component="h1"
                />
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
