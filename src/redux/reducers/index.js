import { combineReducers } from "redux";
import { doctorsListReducer } from "./doctorListReducer";
import { productreducer } from "./productReducer";
 const reducers=combineReducers({
    allProducts:productreducer,
    doctorsList:doctorsListReducer,
})
export default reducers;