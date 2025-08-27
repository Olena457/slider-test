import { features } from '../../data/featuresData.js';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
// import SectionContainer from '../SectionContainer/SectionContainer.jsx';
import { useState, useEffect, useRef } from 'react';

const AdvantagesComponent = () => {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current; // save ref

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        // use current ref
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <Box id="options-section" ref={sectionRef} sx={{ pb: { xs: 3, sm: 12 } }}>
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
            <Box
              key={index}
              sx={{
                background: `linear-gradient(45deg, #e0f7fa, #ffffff)`,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '16px',
                p: 2,
                boxShadow: 4,

                // animation
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.9s ease-out, transform 0.9s ease-out',
                transitionDelay: isAnimated ? `${index * 0.3}s` : '0s',

                minHeight: '220px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',

                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  right: '10px',
                  bottom: '10px',
                  borderRadius: '10px',
                  pointerEvents: 'none',
                  border: '1px solid #69a7e8',
                },
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked
                    sx={{
                      transform: {
                        xs: 'scale(1.1)',
                      },
                      '& .MuiSvgIcon-root': {
                        color: 'secondary.main',
                      },
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      fontSize: {
                        xs: '1.1rem',
                        sm: '1.2rem',
                        md: '1.3rem',
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
    </Box>
  );
};

export default AdvantagesComponent;
