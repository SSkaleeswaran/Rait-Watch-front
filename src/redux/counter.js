import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  rabbit:1,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementvalue: (state) => {
      state.value += 1
    },
    decrementvalue: (state) => {
      state.value -= 1
    },
    decrementrabbit:(state)=>{
     state.rabbit-=1
    },
     incrementrabbit:(state)=>{
     state.rabbit +=1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { incrementvalue, decrementvalue, incrementByAmount,decrementrabbit,incrementrabbit } = counterSlice.actions

export default counterSlice.reducer