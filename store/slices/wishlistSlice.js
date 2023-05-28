import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishListItems: [],
  isItemAdded: 0,
  lastAddedItem: null,
};

const wishlistSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addWishList: (state, action) => {
      const item = state.wishListItems.find((product) => {
        return (
          product.id === action.payload.id ||
          product.image[0] === action.payload.colorType
        );
      });

      if (!item) {
        state.wishListItems.push(action.payload);
        state.lastAddedItem = action.payload;
        state.isItemAdded = 0;
      }
    },
    deleteFromWishList: (state, action) => {
      state.wishListItems = state.wishListItems.filter(
        (product) => product.id !== action.payload.id
      );
    },
    changeIsItemAdded: (state, aciton) => {
      state.isItemAdded += 1;
    },
  },
});
export const { addWishList, changeIsItemAdded, deleteFromWishList } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
