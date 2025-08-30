import hiPhoto from '../../assets/images/hi.png';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Box)({
  minHeight: '100vh',
  width: '100%',
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',
  color: '#fff',
  fontSize: '110px',
  '@media (max-width: 767px)': {
    fontSize: '70px',
  },
  overflow: 'clip',
  position: 'relative',
});

const Scene = styled(Box)({
  perspective: '400px',
  '& *': {
    transformStyle: 'preserve-3d',
  },
  transform: 'translateY(-200px)',
  '@media (max-width: 767px)': {
    transform: 'translateY(-120px)',
  },
});

const LayeredText = styled(Box)({
  '--layers-count': 24,
  '--layer-offset': '1px',
  position: 'relative',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 800,
  animation: 'wobble 27s infinite linear',

  '& span': {
    color: 'transparent',
    animation: 'shadow 2s infinite ease-in-out alternate',
  },

  '& .layers, & .layer': {
    position: 'absolute',
    inset: 0,
  },

  '& .layers': {
    animation: 'hover 2s infinite ease-in-out alternate',
  },

  '& .layer': {
    '--n': 'calc(var(--i) / var(--layers-count))',
    transform: 'translateZ(calc(var(--i) * var(--layer-offset)))',
    color: 'hsl(200 30% calc(var(--n) * 80% + 20%))',
  },

  //   '@keyframes wobble': {
  //     from: { transform: 'rotate(0deg) rotateX(30deg) rotate(360deg)' },
  //     to: { transform: 'rotate(360deg) rotateX(30deg) rotate(0deg)' },
  //   },
  //   '@keyframes hover': {
  //     from: { transform: 'translateZ(0.3em)' },
  //     to: { transform: 'translateZ(0.6em)' },
  //   },
  //   '@keyframes shadow': {
  //     from: { textShadow: '0 0 0.1em #000' },
  //     to: { textShadow: '0 0 0.2em #000' },
  //   },
});

const FloatingTextComponent = () => {
  const text = 'AI-DEV ENGINE';
  const layersCount = 24;
  const layers = Array.from({ length: layersCount }, (_, i) => i + 1);

  return (
    <div id="home-section">
      <Container>
        <Scene>
          <LayeredText>
            <span>{text}</span>
            <div className="layers" aria-hidden="true">
              {layers.map(i => (
                <Box key={i} className="layer" style={{ '--i': i }}>
                  {text}
                </Box>
              ))}
            </div>
          </LayeredText>
        </Scene>

        <Box
          component="img"
          src={hiPhoto}
          alt="photo"
          sx={{
            position: 'absolute',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            maxWidth: '80%',
            height: 'auto',
            zIndex: -1,
            '@media (max-width: 767px)': {
              bottom: '115px',
            },
          }}
        />
      </Container>
    </div>
  );
};

export default FloatingTextComponent;
