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
    <div id="plans-section">
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{
          fontSize: {
            xs: '1.5rem',
            sm: '1.8rem',
            md: '2.5rem',
          },
          textAlign: 'center',
          pt: 14,
          mb: 14,
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        }}
      >
        Pick the plan that fits you!
      </Typography>
      <PricingContainer
        borderRadius="16px"
        sx={{
          p: {
            xs: 2,
            sm: 3,
            md: 6,
          },
        }}
      >
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
    </div>
  );
};

export default PricingComponent;
