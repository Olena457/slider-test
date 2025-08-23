import { features } from '../../data/featuresData.js';

import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';

const FeaturesComponent = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Typography
        variant="h5"
        mb={5}
        component="h2"
        gutterBottom
        sx={{
          fontSize: {
            xs: '1.5rem',
            sm: '1.8rem',
            md: '2.5rem',
          },
          textAlign: 'center',
        }}
      >
        "Why is this app the right choice for you?"
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 2,
          mt: 2,
        }}
      >
        {features.map((feature, index) => (
          <Box key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  checked
                  sx={{
                    transform: 'scale(1.5)',
                    '& .MuiSvgIcon-root': {
                      color: 'primary.main',
                    },
                  }}
                />
              }
              label={
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: {
                      xs: '1rem',
                      sm: '1.2rem',
                      md: '1.4rem',
                    },
                  }}
                >
                  {feature}
                </Typography>
              }
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturesComponent;
