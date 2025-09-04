import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Modal,
} from '@mui/material';
import {
  ThumbUpAlt as LikeIcon,
  Comment as CommentIcon,
} from '@mui/icons-material';
import transparent from '../../assets/images/hi.png';
import SectionContainer from '../SectionContainer/SectionContainer.jsx';
import css from './InfinityTextAnimation.module.css';

const InfinityTextAnimation = ({
  text = 'AIDE PERSONAL DEVELOPMENT ENGINE',
}) => {
  const letters = text.split('');
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SectionContainer id="like-section" py={{ sx: 2, xs: 3, md: 8 }}>
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
          // pt: 12,
          // mb: 6,
          pt: {
            xs: 3,
            md: 6,
            lg: 12,
          },
          color: '#f5f5f5',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        }}
      >
        Experience the Future of Personal Growth with AIDE
      </Typography>

      <Box className={css.mainContainer}>
        <Box className={css.circlesRow}>
          <Box className={css.circleWrapper}>
            <Box
              component="img"
              src={transparent}
              alt="Animated Photo"
              className={css.imageCircle}
            />
          </Box>
          <Box className={css.circleWrapper}>
            <Box className={css.aideCircle}>
              <Typography variant="h3" className={css.aideText}>
                AIDE
              </Typography>
            </Box>
          </Box>
          <Card
            className={css.promoCard}
            elevation={3}
            sx={{
              borderRadius: '16px',
              marginBottom: '2.2rem',
              background: `linear-gradient(135deg,  #F5F5F5, #f7f9fc)`,
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              textAlign: 'center',
              padding: '1rem',
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
            <CardContent>
              <Typography
                variant="h5"
                component="h3"
                className={css.cardTitle}
                gutterBottom
                color="primary"
              >
                Try Now!
              </Typography>
              <Typography
                marginTop={3}
                variant="body1"
                className={css.cardText}
                color="#4d535b"
              >
                Try a free trial period, find out more information.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={css.cardButton}
                onClick={handleOpen}
                sx={{
                  borderRadius: 3,
                  mt: 5,
                  color: '#f5f5f5',
                  backgroundColor: theme => theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme => theme.palette.primary.dark,
                    color: '#000',
                  },
                }}
              >
                More Details
              </Button>
            </CardContent>
          </Card>
        </Box>
        <Box className={css.infinityTextWrapper}>
          <Box className={css.swirl}>
            {letters.map((char, index) => (
              <span
                key={index}
                style={{
                  '--char-index': index,
                  '--total-chars': letters.length,
                  '--glow': `hsl(${(360 / letters.length) * index} 100% 50%)`,
                }}
              >
                {char}
              </span>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Modal window */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', md: 400 },
            background: `linear-gradient(135deg,  #F5F5F5, #f7f9fc)`,
            border: '2px solid #0083b0',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            textAlign: 'center',
            color: '#333',
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
            color="primary"
          >
            Free Trial Period
          </Typography>
          <Typography
            component="div"
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: 'left' }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                color: '#ff0000',
              }}
            >
              <LikeIcon color="primary" sx={{ mr: 1 }} />
              **Basic subscription** for a month for one LinkedIn **like**.
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 1,
                color: '#ff0000',
              }}
            >
              <CommentIcon color="#ff0000" sx={{ mr: 1 }} />
              **Pro subscription** for a year for one LinkedIn **comment**.
            </Box>
          </Typography>
          <Typography
            sx={{
              mt: 3,
              fontStyle: 'italic',
              textAlign: 'center',
              color: '#0083b0',
            }}
          >
            Thank you for your attention!
          </Typography>
          <Button
            onClick={handleClose}
            variant="contained"
            className={css.cardButton}
            sx={{
              borderRadius: 3,
              mt: 2,
              color: '#fff',
              backgroundColor: theme => theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme => theme.palette.primary.dark,
                color: '#000',
              },
            }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    </SectionContainer>
  );
};

export default InfinityTextAnimation;
