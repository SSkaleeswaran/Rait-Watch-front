import { configureStore  } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import FavReducer from "./fav"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: FavReducer,
    
  },
});
