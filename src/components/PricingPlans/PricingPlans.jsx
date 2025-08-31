import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import PricingCard from '../../components/PricingCard/PricingCard.jsx';

const OptionsContainer = styled(Box)({
  display: 'grid',
  gap: '2em',
});

const PricingPlans = ({
  billingCycle,
  plans,
  selectedPlan,
  onSelectPlan,
  units,
}) => {
  return (
    <OptionsContainer>
      {plans.map(plan => (
        <PricingCard
          key={plan.type}
          plan={plan}
          unit={units[billingCycle]}
          isSelected={selectedPlan === plan.type}
          onSelect={() => onSelectPlan(plan.type)}
        />
      ))}
    </OptionsContainer>
  );
};

export default PricingPlans;
