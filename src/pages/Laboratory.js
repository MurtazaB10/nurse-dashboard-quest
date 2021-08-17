import React from 'react';
import { render } from "react-dom";

import { 
  BrowserRouter
} from "react-router-dom";


const Laboratory = () => {
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
                          <h3 className="panel-title">
                            Laboratory list
                          </h3>
                        </div>
                      </div>
                      <hr />
                      <div className="row align-items-center m-0">
                        <div className="col-md-8 text-left">
                          <div className="row align-items-center mt-3 filter-btn-row">
                            <div className="col-md-6">
                              <div className="form-group mb-0">
                                <input type="text" className="form-control" placeholder="Enter Laboratory" />
                              </div>
                            </div>
                            <div className="col-md-3">
                              <a href className="btn btn-gradient-primary w-100">Search</a>
                            </div>
                            <div className="col-md-2">
                              <button type="button" className="btn-raised btn btn-danger btn-floating position-static" data-toggle="modal" data-target="#LaboratoryModal">
                                <i className="icon mdi mdi-plus" aria-hidden="true" />
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
                            <th width="20%">Test</th>
                            <th width="15%">Test Status</th>
                            <th width="20%">Accession Date</th>
                            <th width="15%">Payment Status</th>
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
          <div className="modal fade" id="LaboratoryModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Laboratory list</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form className="forms-sample">
                    <div className="form-group">
                      <label htmlFor="exampleInputName1">Date</label>
                      <input type="text" className="form-control" id="datepicker" placeholder="Date" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputName1">Medication</label>
                      <input type="text" className="form-control" placeholder="Medication" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputName1">Doses</label>
                      <input type="text" className="form-control" placeholder="Doses" />
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
                          <label htmlFor="exampleTextarea1"><b>Doctor Name:</b> - John Doe</label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-gradient-primary mr-2">Save</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      );
}



export default Laboratory;