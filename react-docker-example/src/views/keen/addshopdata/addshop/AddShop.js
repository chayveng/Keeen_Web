import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import { Typography, Card, Dialog, DialogActions } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';

import AlertSuccess from 'src/components/keen/AlertSuccess';
const useColorlibStepIconStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#fff',
    zIndex: 1,
    color: '#d3d3d3',
    width: 40,
    height: 40,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #d3d3d3',
    fontWeight: 700
  },
  active: {
    border: '2px solid #1F8F5B',
    backgroundColor: '#FFFFFF',

    color: '#1F8F5B'
  },
  completed: {
    backgroundColor: '#1F8F5B',
    border: '2px solid #1F8F5B',
    color: '#fff'
  }
}));

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: 1,
    2: 2,
    3: 3,
    4: 4
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(3),
    borderRadius: 0
  },
  button: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  btnCenter: {
    textAlign: 'center'
  }
}));

function getSteps() {
  return [
    'ที่อยู่ตามในหนังสือรับรอง',
    'ที่อยู่ตามใน ภพ.20',
  ];
}

export default function Addshop() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [successShow, setSuccessShow] = useState(false);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              <Card>{getStepContent(activeStep)}</Card>
            </Typography>
            {/* <div>
              {activeStep === 0 && activeStep === 2 ? (
                <Link style={{ textDecoration: 'none' }} to="/datalist">
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                </Link>
              ) : (
                <Button onClick={handleBack} className={classes.button}>
                  Back
                </Button>
              )}

              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Step1 handleNext={handleNext} handleBack={handleBack} />;
      case 1:
        return <Step2 handleNext={handleNext} handleBack={handleBack} />;
      default:
        return 'Unknown step';
    }
  }
}
