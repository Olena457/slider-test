import cardData from '../../data/sliderData.js';
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Link,
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { styled } from '@mui/material/styles';
import SectionContainer from '../SectionContainer/SectionContainer';

const Scroller = styled(Box)(() => ({
  display: 'inline-flex',
  gap: '16px',
  animation: 'scroll-left 100s linear infinite', // duration to control speed
  '&:hover': {
    animationPlayState: 'paused',
  },

  '@keyframes scroll-left': {
    '0%': {
      transform: 'translateX(0%)',
    },
    '100%': {
      transform: 'translateX(-100%)',
    },
  },
}));

const ToolsComponet = () => {
  return (
    <SectionContainer id="tools-section">
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
          pt: 14,
          mb: 12,
          color: '#f5f5f5',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        }}
      >
        Additional Tools
      </Typography>
      <Box
        sx={{
          width: '100%',
          maxWidth: 1560,
          mx: 'auto',
          p: 2,
          overflow: 'hidden',
        }}
      >
        {/* The scrolling container */}
        <Scroller>
          {cardData.map((card, index) => (
            <Box
              key={`card-${index}-2`}
              sx={{
                flexShrink: 0,
                width: {
                  xs: 280,
                  sm: 350,
                },
                minWidth: {
                  xs: 280,
                  sm: 350,
                },
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background:
                    'linear-gradient(to left, #a0eaff, #80c8e0, #70d8f0, #50b0d0)',
                  p: 2,
                  boxShadow: 3,
                  borderRadius: 2,
                  height: 200,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {card.title}
                  </Typography>
                  <img
                    src={card.iconUrl}
                    alt={`${card.title} icon`}
                    style={{ width: 40, height: 40, borderRadius: '50%' }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 0 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Link
                    href={card.youtubeLink}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                  >
                    <IconButton color="#4d535b" aria-label="watch video">
                      <PlayArrowIcon />
                      <Typography
                        sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}
                      >
                        Video
                      </Typography>
                    </IconButton>
                  </Link>
                  <Link
                    href={card.appLink}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                  >
                    <IconButton color="#4d535b" aria-label="visit app">
                      <OpenInNewIcon />
                      <Typography
                        sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}
                      >
                        App
                      </Typography>
                    </IconButton>
                  </Link>
                </Box>
              </Card>
            </Box>
          ))}
          {/*  duplicate the cards a second time to create a seamless infinite loop */}
          {cardData.map((card, index) => (
            <Box
              key={`card-${index}-2`}
              sx={{
                flexShrink: 0,
                width: {
                  xs: 280,
                  sm: 350,
                },
                minWidth: {
                  xs: 280,
                  sm: 350,
                },
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background:
                    'linear-gradient(to left, #a0eaff, #80c8e0, #70d8f0, #50b0d0)',
                  p: 2,
                  boxShadow: 3,
                  borderRadius: 2,
                  height: 200,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 1,
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {card.title}
                  </Typography>
                  <img
                    src={card.iconUrl}
                    alt={`${card.title} icon`}
                    style={{ width: 40, height: 40, borderRadius: '50%' }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 0 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {card.description}
                  </Typography>
                </CardContent>
                <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                  <Link
                    href={card.youtubeLink}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                  >
                    <IconButton color="#4d535b" aria-label="watch video">
                      <PlayArrowIcon />
                      <Typography
                        sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}
                      >
                        Video
                      </Typography>
                    </IconButton>
                  </Link>
                  <Link
                    href={card.appLink}
                    target="_blank"
                    rel="noopener"
                    underline="none"
                  >
                    <IconButton color="#4d535b" aria-label="visit app">
                      <OpenInNewIcon />
                      <Typography
                        sx={{ ml: 1, display: { xs: 'none', sm: 'block' } }}
                      >
                        App
                      </Typography>
                    </IconButton>
                  </Link>
                </Box>
              </Card>
            </Box>
          ))}
        </Scroller>
      </Box>
    </SectionContainer>
  );
};

export default ToolsComponet;
