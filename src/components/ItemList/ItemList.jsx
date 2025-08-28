import React from 'react';
import { Container, List, Typography, Paper } from '@mui/material';
import ItemComponent from './ItemComponent';

const ItemsList = ({ items, onDeleteItem }) => {
  return (
    <Container component={Paper} elevation={3} sx={{ p: 4, mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Список елементів
      </Typography>
      <List>
        {items.map(item => (
          <ItemComponent
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </List>
    </Container>
  );
};

export default ItemsList;
