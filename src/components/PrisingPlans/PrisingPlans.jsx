const PricingPlans = ({
  billingCycle,
  plans,
  selectedPlan,
  onSelectPlan,
  units,
}) => (
  <Box sx={{ display: 'grid', gap: '2em' }}>
    {plans.map(plan => (
      <PricingCard
        key={plan.type}
        elevation={0}
        isSelected={selectedPlan === plan.type}
        onClick={() => onSelectPlan(plan.type)}
      >
        <Box sx={{ p: '2.5em 2em' }}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1em',
              marginBottom: '2em',
            }}
          >
            <Typography variant="h3">{plan.name}</Typography>
            <Typography variant="h3" sx={{ marginLeft: 'auto' }}>
              ${plan.price ? plan.price.toFixed(2) : '0'}
              {!!plan.price && (
                <Box component="small" sx={{ fontSize: '0.375em' }}>
                  /{units[billingCycle]}
                </Box>
              )}
            </Typography>
          </Box>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.375em' }}>
            {plan.description}
          </Typography>
        </Box>
        <Box
          sx={{
            height: selectedPlan === plan.type ? 'auto' : 0,
            overflow: 'hidden',
            transition: 'height 0.3s ease-in-out',
          }}
        >
          <Button
            variant="contained"
            disabled={!selectedPlan}
            onClick={() =>
              console.log(
                `Selected plan: ${plan.name} (${plan.price}/${units[billingCycle]})`
              )
            }
            sx={{
              width: '100%',
              fontSize: '1.5em',
              fontWeight: 500,
              padding: '1.375rem 1.5rem',
              borderRadius: 0,
            }}
          >
            Continue
          </Button>
        </Box>
      </PricingCard>
    ))}
  </Box>
);

export default PricingPlans;
