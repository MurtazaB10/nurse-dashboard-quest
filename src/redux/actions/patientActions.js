import { ActionTypes } from "../constants/action-types";
export const setDoctorsList = (patient) => {
  return {
    type: ActionTypes.SET_PATIENT,
    payload: patient,
  };
};
