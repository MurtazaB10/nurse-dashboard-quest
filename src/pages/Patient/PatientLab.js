import React from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { Controller, useForm } from "react-hook-form";
function PatientLab({id}) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const labs = useSelector((state) => state.patientInfo.patient.patientlab);
  const onSubmit=async(data)=>{
    data={...data,patient_id:id}
    const result = await axios.post("/nurse/addPatientLabNote", data);
    console.log(result);
    console.log(data);
  }
  return (
    <div class="tab-pane fade" id="patienttab7" role="tabpanel">
      <div className="row mt-4">
        <div className="col-xxl-12 col-lg-12">
          <div className="panel" id="projects-status">
            <div className="panel-heading appointment-schedule pb-0">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h3 className="panel-title pb-0">
                    Patient Laboratory Report
                  </h3>
                </div>
              </div>
              <button
                type="button"
                className="btn-raised btn btn-danger btn-floating "
                data-toggle="modal"
                data-target="#addlabModal"
              >
                <i className="icon mdi mdi-plus" aria-hidden="true" />
              </button>
            </div>
            <hr />
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th width="15%">S.No</th>
                    <th width="15%">Name</th>
                    <th width="20%">Note</th>
                
                  </tr>
                </thead>
                <tbody>
                  {labs &&
                    labs.map((lab, idx) => {
                      return (
                        <tr>
                          <td>{idx + 1}</td>
                          <td>{lab.name}</td>
                          <td>{lab.note}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addlabModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Laboratory Report
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
                <p className="formErrors">{errors.name?.message}</p>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Patient Name"
                    {...register("name", {
                      required: " Name is required",
                    })}
                  />
                </div>
                <div className="form-group">
                  <p className="formErrors">{errors.note?.message}</p>
                  <label htmlFor="exampleTextarea1">
                    Add Note<sup>*</sup>
                  </label>
                  <textarea
                    type="text"
                    name="note"
                    rows={4}
                    className="form-control"
                    placeholder="Enter Address"
                    {...register("note", {
                      required: "Note is required",
                    })}
                  />
                </div>
                
                <button type="submit" className="btn btn-gradient-primary mr-2">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientLab;
