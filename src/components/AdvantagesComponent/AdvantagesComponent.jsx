import { features } from '../../data/featuresData.js';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import SectionContainer from '../SectionContainer/SectionContainer.jsx';

const AdvantagesComponent = () => {
  return (
    <SectionContainer id="options-section" pb={{ xs: 3, sm: 12 }}>
      <Box
        sx={{
          maxWidth: '95%',
          width: '95%',
          boxSizing: 'border-box',
          mx: 'auto',
        }}
      >
        <Typography
          variant="h4"
          mb={6}
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
            boxSizing: 'border-box',
            width: '90%',
            // minWidth: '250px',
            overflowWrap: 'break-word',
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 2,
            mt: 2,
            mx: 'auto',
          }}
        >
          {features.map((feature, index) => (
            <Box key={index}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked
                    sx={{
                      transform: {
                        xs: 'scale(1.1)',
                      },

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
    </SectionContainer>
  );
};

export default AdvantagesComponent;
