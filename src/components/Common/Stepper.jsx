import React from 'react';
import {
    Step, StepLabel, Stepper, Typography,
} from '@material-ui/core';

const DefaultStepper = (props) => {
    const {
        steps,
        isStepOptional,
        activeStep,
        isStepSkipped,
    } = props;

    return (
        <Stepper alternativeLabel nonLinear activeStep={activeStep}>
            {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                    labelProps.optional = <Typography variant="caption">Optional</Typography>;
                }
                if (isStepSkipped(index)) {
                    stepProps.completed = false;
                }
                return (
                    <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                );
            })}
        </Stepper>
    );
};

DefaultStepper.defaultProps = {
    steps: [],
    isStepOptional: false,
    activeStep: 0,
    isStepSkipped: false,
};

export default DefaultStepper;
