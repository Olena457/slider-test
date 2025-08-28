import React from 'react';
import { ListItem, Typography, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemComponent = ({ item, onDeleteItem }) => {
  return (
    <ListItem>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Typography variant="body1">
          {item.name} - {item.price} грн
        </Typography>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDeleteItem(item.id)}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default ItemComponent;
