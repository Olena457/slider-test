import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';

const FormComponent = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (itemName && itemPrice) {
      onAddItem({ name: itemName, price: parseFloat(itemPrice) });
      setItemName('');
      setItemPrice('');
    }
  };

  return (
    <Container component={Paper} elevation={3} sx={{ p: 4, mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Add new item
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          value={itemName}
          onChange={e => setItemName(e.target.value)}
        />
        <TextField
          label="Price"
          variant="outlined"
          fullWidth
          type="number"
          value={itemPrice}
          onChange={e => setItemPrice(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Add Item
        </Button>
      </Box>
    </Container>
  );
};

export default FormComponent;
