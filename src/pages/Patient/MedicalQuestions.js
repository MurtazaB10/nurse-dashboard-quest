import React from "react";
import {  useSelector } from "react-redux";
function MedicalQuestions() {
    const questions = useSelector((state) => state.patientInfo.patient.patientMedicalQues&&state.patientInfo.patient.patientMedicalQues[0]);
    
  return (
    <div className="col-md-7">
      <div className="panel ">
        <div className="panel-heading ">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h3 className="panel-title">Medical Questions</h3>
            </div>
          </div>
        </div>
        <div className="accordion madical-ques p-3 " id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Did you experience any excessive bleeding?
                  <div className="for-plus">
                    <i className="mdi mdi-plus" style={{ display: "none" }} />
                    <i className="mdi mdi-minus" />
                  </div>
                </button>
              </h2>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                {questions&&questions.did_you_experience_any_excessive_bleeding.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Did your blood pressure so low that affects other vital organ?
                  <div className="for-plus">
                    <i className="mdi mdi-plus" style={{ display: "none" }} />
                    <i className="mdi mdi-minus" />
                  </div>
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
              {questions&&questions.did_your_blood_pressure_so_low_that_affects_other_vital_organ.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Did you suffer from any infection?
                  <div className="for-plus">
                    <i className="mdi mdi-plus" style={{ display: "none" }} />
                    <i className="mdi mdi-minus" />
                  </div>
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
              {questions&&questions.did_you_suffer_from_any_infection.toUpperCase()}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingFour">
              <h2 className="mb-0">
                <button
                  className="btn btn-link btn-block text-left collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Are you taking Anticoagulant Drug?
                  <div className="for-plus">
                    <i className="mdi mdi-plus" style={{ display: "none" }} />
                    <i className="mdi mdi-minus" />
                  </div>
                </button>
              </h2>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              aria-labelledby="headingFour"
              data-parent="#accordionExample"
            >
              <div className="card-body">
              {questions&&questions.are_you_taking_Anticoagulant_Drug.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalQuestions;
