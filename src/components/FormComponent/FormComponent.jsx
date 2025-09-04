import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
} from '@mui/material';

import {
  changeName,
  changePrice,
  changeAmount,
  resetForm,
} from '../redux/slices/itemFormSlice';

import { addItem } from '../redux/slices/itemSlice.js';
const FormComponent = () => {
  const dispatch = useDispatch();
  const { name, price, amount } = useSelector(state => state.itemForm);

  const handleSubmit = event => {
    event.preventDefault();
    if (name && price && amount) {
      dispatch(
        addItem({
          name: name,
          price: parseFloat(price),
          amount: parseInt(amount),
        })
      );
      dispatch(resetForm());
    }
  };

  return (
    <div id="prices-section">
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
          mb: 6,
          color: '#f5f5f5',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
        }}
      >
        Your App Market
      </Typography>
      <Container
        component={Paper}
        elevation={3}
        sx={{
          p: 4,
          mt: 4,
          borderRadius: 3,
          background: `linear-gradient(135deg,  #F5F5F5, #f7f9fc)`,
        }}
      >
        <Typography variant="h4" gutterBottom color="primary">
          Add new item
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',

            gap: 2,
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={e => dispatch(changeName(e.target.value))}
          />
          <TextField
            label="Amount"
            variant="outlined"
            fullWidth
            type="number"
            value={amount}
            onChange={e => dispatch(changeAmount(e.target.value))}
          />
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            type="number"
            value={price}
            onChange={e => dispatch(changePrice(e.target.value))}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              borderRadius: '16px',
              color: '#fff',
              backgroundColor: theme => theme.palette.primary.main,
              '&:hover': {
                backgroundColor: theme => theme.palette.primary.main,
                color: '#000',
              },
            }}
          >
            Add Item
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default FormComponent;
