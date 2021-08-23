import React,{useState,useEffect} from "react";

const Laboratory = () => {
  const [nameTerm,setNameTerm]=useState([]);
  const [searchResults,setSearchResults]=useState([]);
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
                      <h3 className="panel-title">Laboratory list</h3>
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
                              placeholder="Enter Laboratory"
                              onChange={(event) => {
                                setNameTerm(event.target.value);
                              }}
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
                            data-target="#LaboratoryModal"
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
                        <th width="15%">Name</th>
                        <th width="20%">Description</th>
                        <th width="15%">Address</th>
                        <th width="15%">E-mail</th>
                        <th width="20%">Contact Number</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>#45685</td>
                        <td>Blood Test</td>
                        <td>
                          <span className="badge badge-danger">Incomplete</span>
                        </td>
                        <td>14 Nov 2019 10:15 AM</td>
                        <td>
                          <span className="badge-warning">Due</span>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>#45685</td>
                        <td>Blood Test</td>
                        <td>
                          <span className="badge badge-info">Complete</span>
                        </td>
                        <td>14 Nov 2019 10:15 AM</td>
                        <td>
                          <span className="badge badge-primary">Paid</span>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>#45685</td>
                        <td>Blood Test</td>
                        <td>
                          <span className="badge badge-danger">Incomplete</span>
                        </td>
                        <td>14 Nov 2019 10:15 AM</td>
                        <td>
                          <span className="badge-warning">Due</span>
                        </td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>#45685</td>
                        <td>Blood Test</td>
                        <td>
                          <span className="badge badge-info">Complete</span>
                        </td>
                        <td>14 Nov 2019 10:15 AM</td>
                        <td>
                          <span className="badge badge-primary">Paid</span>
                        </td>
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
        id="LaboratoryModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Laboratory
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
                  <label htmlFor="exampleInputName1">Laboratory Name<sup>*</sup></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Description<sup>*</sup></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Address<sup>*</sup></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">E-mail<sup>*</sup></label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Contact Number<sup>*</sup></label>
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
};

export default Laboratory;
