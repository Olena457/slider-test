import { Box, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const Utils = {
  formatCurrency: n =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: n === 0 ? 0 : 2,
    }).format(n),
};

const PricingCardStyled = styled(Paper, {
  shouldForwardProp: prop => prop !== 'isSelected',
})(({ theme, isSelected }) => ({
  borderRadius: '16px',
  boxShadow: `inset 0 0 0 1px ${
    isSelected
      ? theme.palette.primary.main
      : theme.palette.mode === 'light'
      ? theme.palette.grey[400]
      : theme.palette.grey[800]
  }`,

  cursor: 'pointer',
  transition: theme.transitions.create('box-shadow'),
  '&:hover': {
    boxShadow: `inset 0 0 0 1px ${
      theme.palette.mode === 'light'
        ? theme.palette.grey[400]
        : theme.palette.grey[600]
    }`,
  },
  '&:has(input:checked)': {
    boxShadow: `inset 0 0 0 1px ${theme.palette.primary.main}`,
  },
  '& button': {
    '&:focus-visible': {
      boxShadow: `inset 0 0 0 4px ${theme.palette.secondary.main}`,
    },
  },
}));

const HiddenInput = styled('input')({
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'absolute',
  top: '-9px',
  left: '-9px',
  width: '1px',
  height: '1px',
  appearance: 'none',
  border: 0,
});

const ButtonWrapper = styled(motion.div)({
  overflow: 'hidden',
});

const PricingCard = ({ plan, unit, isSelected, onSelect }) => {
  const priceFormatted = Utils.formatCurrency(plan.price || 0);

  const confirmPlan = () => {
    console.log(`Selected plan: ${plan.name} (${priceFormatted}/${unit})`);
  };

  return (
    <PricingCardStyled elevation={0} isSelected={isSelected}>
      <label>
        <HiddenInput
          type="radio"
          name="plan"
          value={plan.type}
          checked={isSelected}
          onChange={onSelect}
        />
        <Box sx={{ p: '2.5em 2em' }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1em',
              marginBottom: '2em',
            }}
          >
            {/* <Typography
              variant="h3"
              color="#2193b0"
              sx={{ fontSize: '3em', lineHeight: 1 }}
            > */}
            <Typography
              variant="h3"
              color="#2193b0"
              sx={{
                fontSize: {
                  xs: '1.8em',
                  sm: '2.2em',
                  md: '3em',
                },
                lineHeight: 1,
              }}
            >
              {plan.name}
            </Typography>
            {/* <Typography
              variant="h3"
              color="#2193b0"
              sx={{ marginLeft: 'auto', fontSize: '3em', lineHeight: 1 }}
            > */}
            <Typography
              variant="h3"
              color="#2193b0"
              sx={{
                marginLeft: 'auto',
                fontSize: {
                  xs: '1.8em',
                  sm: '2.2em',
                  md: '3em',
                },
                lineHeight: 1,
              }}
            >
              {priceFormatted}
              {!!plan.price && (
                <Box component="small" sx={{ fontSize: '0.375em' }}>
                  /{unit}
                </Box>
              )}
            </Typography>
          </Box>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.375em' }}>
            {plan.description}
          </Typography>
        </Box>
      </label>
      <ButtonWrapper
        borderRadius={{ xs: '16px' }}
        initial={{ height: 0 }}
        animate={{ height: isSelected ? 'auto' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Button
          variant="contained"
          disabled={!isSelected}
          onClick={confirmPlan}
          sx={{
            width: '100%',
            fontSize: '1.5em',
            fontWeight: 500,
            padding: '1.375rem 1.5rem',
            borderRadius: '0 0 16px 16px',
            backgroundColor: theme => theme.palette.primary.main,
            color: theme => theme.palette.common.white,
            '&:hover': {
              backgroundColor: theme => theme.palette.secondary.main,
            },
            '&:focus-visible': {
              boxShadow: theme =>
                `0 0 0 4px ${theme.palette.secondary.main} inset`,
            },
          }}
        >
          Continue
        </Button>
      </ButtonWrapper>
    </PricingCardStyled>
  );
};

export default PricingCard;
