import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find((x) => x.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;  
      } else {
        state.items.push({ ...item, quantity: 1 }); 
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items))
    },

    increase: (state, action) => {
      const id = action.payload;
      const product = state.items.find((x) => x.id === id);
      if (product) product.quantity += 1;

      localStorage.setItem("cartItems", JSON.stringify(state.items))
    },

    decrease: (state, action) => {
      const id = action.payload;
      const product = state.items.find((k) => k.id === id);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items))
    },

    removeFromCart: (state, action) => {
      const idRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idRemove);

      localStorage.setItem("cartItems", JSON.stringify(state.items))
    }

  },
});

export const { addToCart, removeFromCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
