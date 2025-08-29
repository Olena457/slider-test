import { useEffect, useRef } from 'react';
const PricingTabs = ({ billingCycle, onChange }) => {
  const indicatorRef = useRef(null);
  const tabsRef = useRef({});

  const tabNames = ['monthly', 'yearly'];

  useEffect(() => {
    const activeTab = tabsRef.current[billingCycle];
    const indicator = indicatorRef.current;

    if (activeTab && indicator) {
      const rect = activeTab.getBoundingClientRect();
      const containerRect = activeTab.parentElement.getBoundingClientRect();
      const translateX = rect.left - containerRect.left;

      indicator.style.width = `${rect.width}px`;
      indicator.style.transform = `translateX(${translateX}px)`;
    }
  }, [billingCycle]);

  return (
    <TabsWrapper>
      {tabNames.map(cycle => (
        <TabButton
          key={cycle}
          ref={el => (tabsRef.current[cycle] = el)}
          isActive={billingCycle === cycle}
          onClick={() => onChange(cycle)}
        >
          <Box component="span">
            {cycle === 'monthly' ? 'Monthly' : 'Yearly'}
          </Box>
        </TabButton>
      ))}
      <TabIndicator ref={indicatorRef} />
    </TabsWrapper>
  );
};
export default PricingTabs;
