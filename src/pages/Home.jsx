import {
    Dialog,
    Grid, Paper,
} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import flightActions from '../actions/flight';
import DefaultSelect from '../components/Common/Select';
import DefaultStepper from '../components/Common/Stepper';
import DefaultTextField from '../components/Common/TextField';
import DefaultButton from '../components/Common/Button';
import { getQueryPayload } from '../helpers/api';
import DefaultText from '../components/Common/Text';
import DefaultProgress from '../components/Common/Progress';
import pagesStyles from './Style';

const Home = () => {
    const url = `${process.env.REACT_APP_API_URL}/flights`;
    const dispatch = useDispatch();
    const flight = useSelector((state) => state.flight);
    const classes = pagesStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [disabledButton, setDisabledButton] = useState(false);
    const [reservation, setReservation] = useState({});
    const [open, setOpen] = React.useState(true);

    const saveReservation = (newReservation) => dispatch(flightActions.saveReservation(newReservation));

    const fetchOriginBegin = () => dispatch(flightActions.fetchOriginBegin());
    const fetchOriginSuccess = (response) => dispatch(flightActions.fetchOriginSuccess(response));
    const fetchOriginError = (error) => dispatch(flightActions.fetchOriginError(error));

    const fetchDestinyBegin = () => dispatch(flightActions.fetchDestinyBegin());
    const fetchDestinySuccess = (response) => dispatch(flightActions.fetchDestinySuccess(response));
    const fetchDestinyError = (error) => dispatch(flightActions.fetchDestinyError(error));

    const fetchTimeBegin = () => dispatch(flightActions.fetchTimeBegin());
    const fetchTimeSuccess = (response) => dispatch(flightActions.fetchTimeSuccess(response));
    const fetchTimeError = (error) => dispatch(flightActions.fetchTimeError(error));

    const {
        origins,
        destinies,
        times,
        flights,
        loading,
    } = flight;

    const {
        origin,
        destiny,
        time,
        people,
    } = reservation;

    const getOrigin = () => {
        const params = {
            headers: {
                Accept: 'application/json',
            },
        };
        getQueryPayload(`${url}/origin`, params, fetchOriginBegin, fetchOriginSuccess, fetchOriginError);
    };

    const getDestiny = () => {
        const params = {
            headers: {
                Accept: 'application/json',
            },
        };
        getQueryPayload(`${url}/destiny/${origin}`, params, fetchDestinyBegin, fetchDestinySuccess, fetchDestinyError);
    };

    const getTime = () => {
        const params = {
            headers: {
                Accept: 'application/json',
            },
        };
        getQueryPayload(`${url}/time/${origin}/${destiny}`, params, fetchTimeBegin, fetchTimeSuccess, fetchTimeError);
    };

    const getDisabled = () => ({
        0: origin === undefined,
        1: destiny === undefined,
        2: time === undefined,
        3: people === undefined,
    })[activeStep];

    useEffect(() => {
        getOrigin();
    }, []);

    useEffect(() => {
        if (origin !== undefined) {
            getDestiny();
        }
    }, [origin]);

    useEffect(() => {
        if (destiny !== undefined) {
            getTime();
        }
    }, [destiny]);

    useEffect(() => {
        setDisabledButton(getDisabled);
    }, [origin, destiny, time, people, activeStep]);

    const getSteps = () => {
        return ['Origen', 'Destino', 'Horario', 'Pasajeros'];
    };

    const getOrigins = () => {
        return origins.map((item) => { return (item.origin); });
    };

    const getDestinies = () => {
        return destinies.map((item) => { return (item.destiny); });
    };

    const getTimes = () => {
        return times.map((item) => { return (item.time); });
    };

    const startPoints = getOrigins();
    const destinyPoints = getDestinies();
    const timePoints = getTimes();
    const steps = getSteps();

    const handleOrigin = (event) => {
        setReservation({ ...reservation, origin: event.target.value });
    };

    const handleDestiny = (event) => {
        setReservation({ ...reservation, destiny: event.target.value });
    };

    const handleTime = (event) => {
        setReservation({ ...reservation, time: event.target.value });
    };

    const handleNext = () => {
        if (activeStep === steps.length - 1) {
            const newReservation = {
                id: flights.length + 1,
                origin,
                destiny,
                time,
                people,
            };
            saveReservation(newReservation);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handlePeople = (event) => {
        setReservation({ ...reservation, people: event.target.value });
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getStepContent = (step) => {
        switch (step) {
        case 0:
            return (
                <DefaultSelect
                    items={startPoints}
                    label="Origen"
                    handleChange={handleOrigin}
                    selected={origin}
                />
            );
        case 1:
            return (
                <DefaultSelect
                    items={destinyPoints}
                    label="Destino"
                    handleChange={handleDestiny}
                    selected={destiny}
                />
            );
        case 2:
            return (
                <DefaultSelect
                    items={timePoints}
                    label="Horario"
                    handleChange={handleTime}
                    selected={time}
                />
            );
        case 3:
            return (
                <DefaultTextField
                    label="Personas"
                    type="number"
                    variant="outlined"
                    value={people}
                    handleChange={handlePeople}
                    inputProps={{ min: 1 }}
                />
            );
        default:
            return 'Unknown step';
        }
    };

    return (
        <Grid container>
            <Dialog
                open={loading && open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                }}
            >
                <DefaultProgress color="primary" size={120} />
            </Dialog>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <DefaultText
                    className={classes.title}
                    text="¿A donde vamos?"
                    variant="h3"
                    component="h1"
                />
                <Paper elevation={0} className={classes.paper}>
                    <DefaultStepper
                        steps={steps}
                        isStepOptional={() => false}
                        activeStep={activeStep}
                        isStepSkipped={() => false}
                    />
                    <Grid container direction="row" alignItems="center" justify="center">
                        <Grid item justify="space-around" className={classes.stepContent}>
                            {getStepContent(activeStep)}
                        </Grid>
                        <Grid className={classes.buttonsBottom} container justify="flex-end" direction="row" alignItems="center">
                            <DefaultButton
                                text="Atras"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                className={classes.button}
                            />

                            {
                                activeStep === steps.length - 1 ? (
                                    <Link to="/reservations" className={classes.link}>
                                        <DefaultButton
                                            color="primary"
                                            onClick={handleNext}
                                            className={classes.button}
                                            disabled={disabledButton}
                                            text={activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                                        />
                                    </Link>
                                ) : (
                                    <DefaultButton
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                        disabled={disabledButton}
                                        text={activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                                    />
                                )
                            }

                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
};

export default Home;
