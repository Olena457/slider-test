import { createSelector } from '@reduxjs/toolkit';

const selectItemsData = state => state.items.data;
const selectSearchTerm = state => state.items.searchTerm;

// get filtered items
export const selectFilteredItems = createSelector(
  [selectItemsData, selectSearchTerm],
  (data, searchTerm) => {
    return data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
);

// amount
export const selectTotalSum = createSelector(
  [selectFilteredItems],
  filteredItems => {
    return filteredItems.reduce(
      (acc, item) => acc + item.price * item.amount,
      0
    );
  }
);
// total
export const selectTotalAmount = createSelector(
  [selectFilteredItems],
  filteredItems => {
    return filteredItems.reduce((acc, item) => acc + item.amount, 0);
  }
);
