import { createSlice } from '@reduxjs/toolkit';

const itemFormSlice = createSlice({
  name: 'itemForm',
  initialState: {
    name: '',
    price: '',
    amount: '',
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changePrice(state, action) {
      state.price = action.payload;
    },
    changeAmount(state, action) {
      state.amount = action.payload;
    },
    resetForm(state) {
      state.name = '';
      state.price = '';
      state.amount = '';
    },
  },
});

export const { changeName, changePrice, changeAmount, resetForm } =
  itemFormSlice.actions;
export default itemFormSlice.reducer;
