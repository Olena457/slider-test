import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import PricingTabs from '../PricingTabs/PricingTabs.jsx';
import PricingPlans from '../PrisingPlans/PrisingPlans.jsx';
import plans from '../../data/dataPlans.js';

const PricingContainer = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'light'
      ? theme.palette.common.white
      : theme.palette.grey[900],
  maxWidth: '36em',
  margin: '0 auto',
  padding: '3em',
  transition: theme.transitions.create('background-color'),
  width: '100%',
}));

const PricingComponent = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const units = {
    monthly: 'month',
    yearly: 'year',
  };

  return (
    <PricingContainer borderRadius="16px">
      <Typography
        variant="h4"
        color="primary"
        component="h2"
        sx={{
          fontSize: '1.5em',
          fontWeight: 500,
          lineHeight: 1,
          marginBottom: '1rem',
        }}
      >
        Pick Your Plan
      </Typography>
      <PricingTabs billingCycle={billingCycle} onChange={setBillingCycle} />
      <PricingPlans
        billingCycle={billingCycle}
        plans={plans[billingCycle]}
        selectedPlan={selectedPlan}
        onSelectPlan={setSelectedPlan}
        units={units}
      />
    </PricingContainer>
  );
};

export default PricingComponent;
