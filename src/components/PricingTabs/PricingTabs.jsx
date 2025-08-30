import { useRef } from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const TabsWrapper = styled(Box)(({ theme }) => ({
  boxShadow: `inset 0 -1px 0 ${
    theme.palette.mode === 'light'
      ? theme.palette.grey[200]
      : theme.palette.grey[800]
  }`,
  display: 'flex',
  position: 'relative',
  width: '100%',
  marginBottom: '3em',
  transition: theme.transitions.create('box-shadow'),
}));

const TabButton = styled(Button, {
  shouldForwardProp: prop => prop !== 'isActive',
})(({ theme, isActive }) => ({
  flexGrow: 1,
  background: 'none',
  color: isActive
    ? theme.palette.text.primary
    : theme.palette.mode === 'light'
    ? theme.palette.grey[550]
    : theme.palette.grey[450],
  cursor: 'pointer',
  padding: '2.75rem 0',
  position: 'relative',
  transition: theme.transitions.create('color'),
  '&:hover': {
    color: isActive
      ? theme.palette.text.primary
      : theme.palette.mode === 'light'
      ? theme.palette.grey[650]
      : theme.palette.grey[350],
    backgroundColor: 'transparent',
  },
  '&.Mui-focusVisible': {
    boxShadow: `inset 0 0 0 2px ${theme.palette.primary.main}`,
  },
}));

const TabText = styled(Box, {
  shouldForwardProp: prop => prop !== 'isActive',
})(({ theme, isActive }) => ({
  display: 'inline-block',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  transform: isActive ? 'scale(1.5)' : 'none',
}));

const TabIndicator = styled(motion.div)({
  backgroundColor: 'currentColor',
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: '1px',
});

const PricingTabs = ({ billingCycle, onChange }) => {
  const tabsRef = useRef({});
  const tabNames = ['monthly', 'yearly'];

  const getIndicatorPosition = () => {
    const activeTab = tabsRef.current[billingCycle];
    if (activeTab) {
      return {
        width: activeTab.offsetWidth,
        x: activeTab.offsetLeft,
      };
    }
    return { width: 0, x: 0 };
  };

  return (
    <TabsWrapper>
      {tabNames.map(cycle => {
        const isActive = billingCycle === cycle;
        return (
          <TabButton
            key={cycle}
            ref={el => (tabsRef.current[cycle] = el)}
            isActive={isActive}
            onClick={() => onChange(cycle)}
          >
            <TabText isActive={isActive}>
              {cycle === 'monthly' ? 'Monthly' : 'Yearly'}
            </TabText>
          </TabButton>
        );
      })}
      <TabIndicator
        animate={getIndicatorPosition()}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </TabsWrapper>
  );
};

export default PricingTabs;
