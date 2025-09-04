import { ListItem, Typography, Box, IconButton, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemComponent = ({ item, onDeleteItem }) => {
  return (
    <ListItem component={Paper} elevation={3} sx={{ my: 1, borderRadius: 2 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',

          background: `linear-gradient(135deg,  #F5F5F5, #f7f9fc)`,
          width: '100%',
        }}
      >
        <Typography variant="body1" color="textSecondary">
          {item.name} - {item.amount} items - {item.price} USD/pc.
        </Typography>
        <Typography
          variant="body1"
          color="textPrimary"
          sx={{
            ml: 2,
            fontWeight: 'bold',
          }}
        >
          Sum: {(item.price * item.amount).toFixed(2)} USD
        </Typography>
        <IconButton
          edge="end"
          aria-label="delete"
          sx={{ color: '#4a93ff' }}
          onClick={() => onDeleteItem(item.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default ItemComponent;
