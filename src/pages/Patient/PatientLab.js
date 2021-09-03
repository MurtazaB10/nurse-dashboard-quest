import React from "react";
import { useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
function PatientLab() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const labs = useSelector((state) => state.patientInfo.patient.patientlab);
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
              <form className="forms-sample">
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Name<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Description<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Address<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    E-mail<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Contact Number<sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contact Number"
                    required
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
