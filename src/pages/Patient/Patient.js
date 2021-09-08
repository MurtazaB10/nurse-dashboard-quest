import React,{useEffect, useState} from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import MedicalQuestions from "./MedicalQuestions";
import {setPatientInfo} from "../../redux/actions/patientInfoActions";
import Medications from "./Medications";
import Documents from "./Documents";
import Prescriptions from "./Prescriptions";
import PatientLab from "./PatientLab";
import ContactTracing from "./ContactTracing";
import VisitLog from "./VisitLog";
import Payment from "./Payment";
import ProfileCard from "./ProfileCard";
import DoctorsNotes from "./DoctorsNote";
import NurseNotes from "./NursesNote";
import { setPatientsList } from "../../redux/actions/patientListActions";
import Loader from '../../utils/Loader'

const Patient = () => {
  const patientInfo = useSelector((state) => state.patientInfo.patient);
  const patientsList = useSelector((state) => state.patientsList.patients);
  const [id,setId]=useState("6103f172ef6ebe0359c9e411");
  const [loading,setLoading]=useState(false);
  const dispatch = useDispatch();
  async function fetchData() {
    setLoading(false);
    try {
      const res = await axios.post(`/nurse/patientDetails/${id}`);
      const result = await axios.get("nurse/dashboard");
      dispatch(setPatientsList(result.data.data.patient_list))
      dispatch(setPatientInfo(res.data.data));
      console.log(res.data.data);
      setLoading(true);
    } catch (error) {
      console.error(error);
    } finally {
      // setLoading(false);
    }
  }
// console.log(patientsList);

const handleSelect=(e)=>{
  setId(e.target.value);
}

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div>
      <section className="dashboard">
        <div className=" container-fluid p-0">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            <div className="col-xl-12 col-lg-12">
              <div className="mb-3 d-flex w-100 align-items-center auto-fill-patient">
                <select
                  className="form-control"
                  name="patient_id"
                  onChange={handleSelect}
                >
                  {patientsList &&
                    patientsList.map((patient) => {
                      return (
                        <option value={patient._id}>
                          {patient.name}
                        </option>
                      );
                    })}
                </select>
                {/* <select
                            className="form-control"
                            name="doctor"
                            id="select-new2"
                            {...register("doctor", {
                              required: "Doctor is required",
                            })}
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                          </select> */}

                <div className="col-md-3 rounded text-center">
                  <button type="submit" className="btn btn-gradient-primary">Search</button>
                </div>
              </div>
              {/* Widget User list */}
              <ProfileCard />
              <div className="tabs-list-patient doctor-tab">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link active"
                      data-toggle="tab"
                      href="#patienttab1"
                      role="tab"
                      aria-controls="patienttab1"
                      aria-selected="true"
                    >
                      Health Details
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#patienttab2"
                      role="tab"
                      aria-controls="patienttab2"
                      aria-selected="false"
                    >
                      Doctor's Notes
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#nursenote"
                      role="tab"
                      aria-controls="nursenote"
                      aria-selected="false"
                    >
                      Nurse's Notes
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#patienttab3"
                      role="tab"
                      aria-controls="patienttab3"
                      aria-selected="false"
                    >
                      Document
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#patienttab4"
                      role="tab"
                      aria-controls="patienttab4"
                      aria-selected="false"
                    >
                      Visit logs
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#patienttab5"
                      role="tab"
                      aria-controls="patienttab5"
                      aria-selected="false"
                    >
                      Payment
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#patienttab6"
                      role="tab"
                      aria-controls="patienttab6"
                      aria-selected="false"
                    >
                      Prescription
                    </a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      data-toggle="tab"
                      href="#patienttab7"
                      role="tab"
                      aria-controls="patienttab7"
                      aria-selected="false"
                    >
                      Laboratory
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="patienttab1"
                  role="tabpanel"
                >
                  <div>
                    <div className="row mt-4">
                      <MedicalQuestions />
                      <Medications />
                    </div>
                  </div>
                </div>
                <DoctorsNotes id={id}/>
                <NurseNotes />
                <Documents />
                <VisitLog />
                <Payment />
                <Prescriptions id={id} />
                <PatientLab id={id} setId={setId}/>
              </div>
            </div>
          </div>
        </div>
        <ContactTracing />
      </section>
    </div>
                        );
};

export default Patient;
