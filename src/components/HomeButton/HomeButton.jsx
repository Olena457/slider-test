import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const StyledButton = styled(motion.button)(({ theme }) => ({
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  cursor: 'pointer',
  background: `linear-gradient(
    75deg,
    #4a93ff,
    #00aef6,
    #00c3e5,
    #00d7d8,
    #00ebc3,
    #28ff90,
    #b4ff72,
    #f9ff28
  )`,
  border: 'none',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  padding: 0,
  minWidth: 0,
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
  },
  [theme.breakpoints.down('md')]: {
    bottom: '20px',
    right: '20px',
    width: '40px',
    height: '40px',
  },
}));

const HomeButton = () => {
  const scrollToHome = () => {
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledButton
      onClick={scrollToHome}
      aria-label="Scroll to home section"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <KeyboardArrowUpIcon sx={{ color: '#0083b0' }} />
    </StyledButton>
  );
};

export default HomeButton;
