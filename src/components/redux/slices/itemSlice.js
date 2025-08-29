import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    searchTerm: '',
    data: [],
  },
  reducers: {
    addItem(state, action) {
      state.data.push({
        ...action.payload,
        id: Date.now(),
      });
    },
    removeItem(state, action) {
      state.data = state.data.filter(item => item.id !== action.payload);
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addItem, removeItem, changeSearchTerm } = itemsSlice.actions;
export default itemsSlice.reducer;
