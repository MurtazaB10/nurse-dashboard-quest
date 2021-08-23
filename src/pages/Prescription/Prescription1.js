import React from "react";

const Prescription = () => {
  return (
    <div>
      <section className="dashboard">
        <div className=" container-fluid p-0">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            <div className="col-xxl-12 col-lg-12">
              {/* Panel Projects Status */}
              <div className="panel" id="projects-status">
                <div className="panel-heading appointment-schedule pt-3">
                  <div className="row align-items-center">
                    <div className="col-md-12">
                      <h3 className="panel-title">Prescription list</h3>
                    </div>
                  </div>
                  <hr />
                  <div className="row align-items-center m-0">
                    <div className="col-md-8 text-left">
                      <div className="row align-items-center mt-3 filter-btn-row">
                        <div className="col-md-6">
                          <div className="form-group mb-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Product"
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <a href className="btn btn-gradient-primary w-100">
                            Search
                          </a>
                        </div>
                        <div className="col-md-2">
                          <button
                            type="button"
                            className="btn-raised btn btn-danger btn-floating position-static"
                            data-toggle="modal"
                            data-target="#prescriptionModal"
                          >
                            <i
                              className="icon mdi mdi-plus"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
                <div className="table-responsive p-3">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th width="15%">S.No</th>
                        <th width="15%">ID</th>
                        <th width="15%">Date</th>
                        <th width="20%">Medication</th>
                        <th width="20%">Doses</th>
                        <th width="15%">Frequency</th>
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
              {/* End Panel Projects Stats */}
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="prescriptionModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
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
              <form className="forms-sample">
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="datepicker"
                    placeholder="Date"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Medication</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Medication"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Doses</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Doses"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Select Frequency</label>
                  <div>
                    <select className="form-control" id="select-new2">
                      <option>2 Daily</option>
                      <option>3 Daily</option>
                      <option>In Morning</option>
                      <option>In Evening</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 ml-auto">
                    <div className="form-group text-right">
                      <label htmlFor="exampleTextarea1">
                        <b>Doctor Name:</b> - John Doe
                      </label>
                    </div>
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
};

export default Prescription;
