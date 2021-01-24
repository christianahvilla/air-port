import {
    Button, Grid, makeStyles, Paper, Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import DefaultSelect from '../components/Common/Select';
import DefaultStepper from '../components/Common/Stepper';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    paper: {
        height: 400,
    },
}));

const Home = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [startPoint, setStartPoint] = useState('');

    const getSteps = () => {
        return ['Punto de partida', 'Destino', 'Horario', 'Pasajeros'];
    };

    const getStartPoints = () => {
        return ['CDMX'];
    };

    const startPoints = getStartPoints();

    const steps = getSteps();

    const handleStart = () => {
        setStartPoint('CDMX');
    };

    const getStepContent = (step) => {
        switch (step) {
        case 0:
            return (
                <DefaultSelect
                    items={startPoints}
                    label="Origen"
                    handleChange={handleStart}
                    selected={startPoint}
                />
            );
        case 1:
            return (
                <DefaultSelect
                    items={startPoints}
                    label="Destino"
                    handleChange={handleStart}
                    selected={startPoint}
                />
            );
        case 2:
            return (
                <DefaultSelect
                    items={startPoints}
                    label="Destino"
                    handleChange={handleStart}
                    selected={startPoint}
                />
            );
        case 3:
            return (
                <DefaultSelect
                    items={startPoints}
                    label="Destino"
                    handleChange={handleStart}
                    selected={startPoint}
                />
            );
        default:
            return 'Unknown step';
        }
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
                <Typography variant="h2" gutterBottom>
                    ¿A dondé vamos?
                </Typography>
                <Paper elevation={0} className={classes.paper}>
                    <DefaultStepper
                        steps={steps}
                        isStepOptional={() => false}
                        activeStep={activeStep}
                        isStepSkipped={() => false}
                    />
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reiniciar
                            </Button>
                        </div>
                    ) : (
                        <Grid container direction="row" alignItems="center" justify="center">
                            <Grid item justify="space-around">
                                {getStepContent(activeStep)}
                            </Grid>
                            <Grid container justify="flex-end" direction="row" alignItems="center">
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Atras
                                </Button>

                                <Button
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Terminar' : 'Siguiente'}
                                </Button>
                            </Grid>
                        </Grid>
                    )}
                </Paper>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    );
};

export default Home;
