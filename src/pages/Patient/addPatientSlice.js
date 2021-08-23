import { createSlice } from '@reduxjs/toolkit'

export const addPatientSlice = createSlice({
  name: 'addPatient',
  initialState: {
    value: 0,
  },
  reducers: {
    onSubmitHandler: (state) => {
      console.log(state);
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})


export const { onSubmitHandler } = addPatientSlice.actions

export default addPatientSlice.reducer