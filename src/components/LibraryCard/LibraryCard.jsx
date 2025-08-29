import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import { PlayCircleFilled as PlayCircleIcon } from '@mui/icons-material';

const MAX_DESCRIPTION_LINES = 2;

const LibraryCard = ({ item, onDescriptionClick }) => {
  const handleYoutubeClick = () => {
    window.open(item.youtubeLink, '_blank');
  };

  return (
    <Card
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px 35px 30px 35px',
        backgroundColor: '#fff',
        borderRadius: '30px',
        overflow: 'hidden',
        boxShadow: 4,
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
        '@media (max-width: 900px)': {
          padding: '20px',
        },
        '@media (max-width: 600px)': {
          padding: '30px 20px',
        },
        '@media (max-width: 480px)': {
          padding: '20px 15px',
        },
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '10px',
          left: '10px',
          right: '10px',
          bottom: '10px',
          borderRadius: '20px',
          pointerEvents: 'none',
          border: '1px solid #e0e0e0',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 180,
          overflow: 'hidden',
          borderRadius: '15px',
        }}
      >
        <Box
          component="img"
          src={item.photo}
          alt={item.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      <CardContent
        sx={{
          flexGrow: 1,
          p: 0,
          pt: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: 'bold', color: '#69a7e8' }}
        >
          {item.title}
        </Typography>
        {item.price && (
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ mb: 1, fontWeight: 'bold' }}
          >
            Price: ${item.price}
          </Typography>
        )}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            flexGrow: 1,
            cursor: 'pointer',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: MAX_DESCRIPTION_LINES,
            WebkitBoxOrient: 'vertical',
          }}
          onClick={() => onDescriptionClick(item)}
        >
          {item.description}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: 'space-between',
          p: 0,
          pt: 2,
          borderTop: '1px solid #69a7e8',
          mt: 'auto',
        }}
      >
        <Typography variant="body2" color="primary.main">
          {item.name}
        </Typography>
        <IconButton onClick={handleYoutubeClick} sx={{ color: '#ff0000' }}>
          <PlayCircleIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default LibraryCard;
