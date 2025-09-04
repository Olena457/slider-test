import { Box, Typography } from '@mui/material';
import { toolsIcons } from '../../data/toolsData.js';
import SectionContainer from '../SectionContainer/SectionContainer.jsx';

const TeachComponents = () => {
  return (
    <div id="home-section">
      <SectionContainer>
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
            mb: 6,
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
          }}
        >
          "🔗 Learn from Official Sources"
        </Typography>
        <Box
          sx={{
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            py: 3,
            px: { xs: 2, sm: 3, md: 4 },
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 2, sm: 4, md: 6 },
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {toolsIcons.map(item => {
            return (
              <Box
                key={item.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: { xs: 60, sm: 80, md: 100 },
                }}
              >
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Box
                    component="img"
                    src={item.logo}
                    alt={item.name}
                    sx={{
                      width: { xs: 40, sm: 60, md: 80 },
                      height: 'auto',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.1)',
                      },
                    }}
                  />
                </a>
                <Typography
                  variant="caption"
                  display="block"
                  sx={{
                    mt: 1,
                    whiteSpace: 'normal',
                    color: 'white',
                  }}
                >
                  {item.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </SectionContainer>
    </div>
  );
};

export default TeachComponents;
