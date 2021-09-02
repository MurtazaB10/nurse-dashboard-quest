import { combineReducers } from "redux";
import { appointmentListReducer } from "./appointmentListReducer";
import { doctorsListReducer } from "./doctorListReducer";
import { patientInfoReducer } from "./patientInfoReducer";
import { productreducer } from "./productReducer";
const reducers = combineReducers({
  allProducts: productreducer,
  doctorsList: doctorsListReducer,
  doctorAppointmentList: appointmentListReducer,
  patientInfo:patientInfoReducer,
});
export default reducers;
