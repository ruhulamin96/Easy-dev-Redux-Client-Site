import { configureStore } from '@reduxjs/toolkit'
import  pythonSlice  from './pythonSlice'
import authReducer from './authSlice'
export const store = configureStore({
  reducer: {
      allData:pythonSlice,
      auth: authReducer
  },
})