import React from "react";

function Prescriptions() {
  return (
    <div class="tab-pane fade" id="patienttab6" role="tabpanel">
      <div className="row mt-4">
        <div className="col-xxl-12 col-lg-12">
          <div className="panel" id="projects-status">
            <div className="panel-heading appointment-schedule pb-0">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h3 className="panel-title pb-0">Prescription List</h3>
                </div>
              </div>
              <button
                type="button"
                className="btn-raised btn btn-danger btn-floating "
                data-toggle="modal"
                data-target="#prescriptionModal"
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
                    <th width="15%">Patient</th>
                    <th width="15%">Date</th>
                    <th width="20%">Name</th>
                    <th width="20%">Doses</th>
                    <th width="15%">Interval</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>#45685</td>
                    <td>14 Nov 2019</td>
                    <td>Albuteol HFA</td>
                    <td>250 mg</td>
                    <td>2 Daily</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>#45685</td>
                    <td>14 Nov 2019</td>
                    <td>Albuteol HFA</td>
                    <td>250 mg</td>
                    <td>2 Daily</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>#45685</td>
                    <td>14 Nov 2019</td>
                    <td>Albuteol HFA</td>
                    <td>250 mg</td>
                    <td>2 Daily</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>#45685</td>
                    <td>14 Nov 2019</td>
                    <td>Albuteol HFA</td>
                    <td>250 mg</td>
                    <td>2 Daily</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="prescriptionModal"
        role="dialog"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Prescription list
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
              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Name
                  <sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              <form className="forms-sample">
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Date
                    <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="datepicker8"
                    placeholder="Date"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Patient
                    <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Patient"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Doses
                    <sup>*</sup>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Doses"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Interval
                    <sup>*</sup>
                  </label>
                  <div>
                    <select className="form-control" id="select-new3" required>
                      <option>2 Daily</option>
                      <option>3 Daily</option>
                      <option>In Morning</option>
                      <option>In Evening</option>
                    </select>
                  </div>
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

export default Prescriptions;
