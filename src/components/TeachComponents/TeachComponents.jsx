import { Box, Typography } from '@mui/material';
import { toolsIcons } from '../../data/toolsData.js';
import SectionContainer from '../SectionContainer/SectionContainer.jsx';

const TeachComponents = () => {
  return (
    <SectionContainer id="tools-section">
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
                sx={{ mt: 1, whiteSpace: 'normal' }}
              >
                {item.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </SectionContainer>
  );
};

export default TeachComponents;
