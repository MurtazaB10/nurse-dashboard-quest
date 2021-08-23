import { configureStore } from '@reduxjs/toolkit'
import addPatientReducer from '../pages/Patient/addPatientSlice'
export default configureStore({
  reducer: {
    addPatient:addPatientReducer,
  },
})