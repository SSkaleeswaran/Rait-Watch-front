import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   items: JSON.parse(localStorage.getItem("favItems")) || []
}
const favSlice = createSlice({
    name: "fav",
    initialState,
    reducers:{

        addToFav:(state, action)=>{
       const item = action.payload;

      const existingItem = state.items.find((x) => x.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;  
      } else {
        state.items.push( item); 
      }

       localStorage.setItem("favItems", JSON.stringify(state.items))
    },

    removeFromFav:(state, action)=>{
        const idRemove = action.payload;
        state.items = state.items.filter((k)=> k.id!==idRemove)

         localStorage.setItem("favItems", JSON.stringify(state.items))
    }
}
})

export const {addToFav, removeFromFav}=favSlice.actions;
export default favSlice.reducer;