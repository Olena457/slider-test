import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  List,
  Typography,
  Paper,
  TextField,
  Box,
} from '@mui/material';

import ItemComponent from '../ItemComponent/ItemComponent.jsx';
import { removeItem, changeSearchTerm } from '../redux/slices/itemSlice.js';
import {
  selectFilteredItems,
  selectTotalSum,
  selectTotalAmount,
} from '../redux/selectors/itemSelectors.js';

const ItemsList = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(state => state.items.searchTerm);
  const filteredItems = useSelector(selectFilteredItems);
  const totalSum = useSelector(selectTotalSum);
  const totalAmount = useSelector(selectTotalAmount);

  const handleDeleteItem = id => {
    dispatch(removeItem(id));
  };

  const handleSearchTermChange = event => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <Container
      component={Paper}
      elevation={3}
      sx={{ p: 4, mt: 4, borderRadius: 3 }}
    >
      <Typography variant="h4" gutterBottom color="primary">
        list of items
      </Typography>
      <Box sx={{ mb: 2, borderRadius: 3 }}>
        <TextField
          label="Search by name"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </Box>
      <List>
        {filteredItems.map(item => (
          <ItemComponent
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
          />
        ))}
      </List>
      <Box sx={{ mt: 2, borderTop: '1px solid #ccc', pt: 2 }}>
        <Typography
          variant="h6"
          color="primary"
          sx={{ textAlign: 'right', fontWeight: 'bold' }}
        >
          Total Sum: {totalSum.toFixed(2)} USD
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          sx={{ textAlign: 'right', fontWeight: 'bold' }}
        >
          Amount: {totalAmount} - items
        </Typography>
      </Box>
    </Container>
  );
};

export default ItemsList;
