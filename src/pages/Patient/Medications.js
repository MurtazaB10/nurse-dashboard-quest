import React from "react";
import {  useSelector } from "react-redux";
function Medications() {
    const medications = useSelector((state) => state.patientInfo.patient.Patient_list_of_medication);

  return (
    <div className="col-md-5">
      <div className="panel">
        <div className="panel-heading ">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h3 className="panel-title">Medications</h3>
            </div>
          </div>
        </div>
        <div className="table-responsive p-3">
          <table className="table table-striped madication-table">
            <thead>
              <tr>
                <th scope="col">S. No.</th>
                <th scope="col">Name</th>
                <th scope="col">Interval</th>
                <th scope="col">Doses</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
                {medications&&medications.map((medication,idx)=>{
                    return(
              <tr key={idx}>
                <th scope="row">{idx+1}</th>
                <td>{medication.name}</td>
                <td>{medication.interval}</td>
                <td>{medication.dose}</td>
                <td>{medication.date.substring(0,10)}</td>
              </tr>)
              })
                }               
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Medications;
