import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Address from './Address';
import Display_order from './Display_order';
import Confirm_order from './Confirm_order';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const OrderSkeleton = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Display_order />;
      case 1:
        return <Address />;
      case 2:
        return <Confirm_order />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2 }}>
        {getStepContent(activeStep)}
      </Box>
      <Stepper nonLinear activeStep={activeStep} sx={{ mt: 2 }}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default OrderSkeleton;
