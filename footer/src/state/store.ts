import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import { productSlice } from "./productSlice";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export default store
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()