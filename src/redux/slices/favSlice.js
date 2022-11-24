import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    favItems: [],
    totalAmount: 0,
    totalQuantityFav: 0,
}

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.favItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQuantityFav++;

      if (!existingItem) {
        state.favItems.push({
          id: newItem.id,
          productName: newItem.productName,
          imgUrl: newItem.imgUrl,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.favItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    removeFromFav: (state, action) => {
      const id = action.payload;
      const existingItem = state.favItems.find((item) => item.id === id);

      if (existingItem) {
        state.favItems = state.favItems.filter((item) => item.id !== id);
        state.totalQuantityFav = state.totalQuantityFav - existingItem.quantity;
      }

      state.totalAmount = state.favItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
  },
});

export const favActions = favSlice.actions

export default favSlice.reducer