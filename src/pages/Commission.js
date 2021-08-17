import React from 'react';
import { render } from "react-dom";

import { 
  BrowserRouter
} from "react-router-dom";


const Commission = () => {
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
                                Commission list
                                </h3>
                            </div>
                            </div>
                            <hr />
                            <div className="row align-items-center m-0">
                            <div className="col-md-8 text-left">
                                <div className="row mt-3 filter-btn-row">
                                <div className="col-md-3">
                                    <a href className="btn btn-gradient-primary w-100">Daily</a>
                                </div>
                                <div className="col-md-3">
                                    <a href className="btn btn-gradient-primary w-100">Weekly</a>
                                </div>
                                <div className="col-md-3">
                                    <a href className="btn btn-gradient-primary w-100">Month</a>
                                </div>
                                </div>
                                <div className="row align-items-center mt-3 filter-btn-row">
                                <div className="col-md-3">
                                    <div className="form-group mb-0">
                                    <input type="text" className="form-control" id="datepicker" placeholder="From" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group mb-0">
                                    <input type="text" className="form-control" id="datepicker3" placeholder="To" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="form-group doctor-appointment-filter mb-0">
                                    <select id="select-new" className="form-control">
                                        <option>Bawe</option>
                                        <option>Doctor</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <a href className="btn btn-gradient-primary w-100">Search</a>
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
                                <th width="20%">Nursing services</th>
                                <th width="20%">Other professional services</th>
                                <th width="15%">General services</th>
                                <th width="15%">Fiscal services</th>
                                <th width="15%">Administrative services</th>
                                <th width="15%" className="text-left">Other services</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
                                </tr>
                                <tr>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
                                </tr>
                                <tr>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
                                <td>xyz</td>
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
                {/* Modal */}
                <div className="modal fade" id="addexpenseModal" tabIndex={-1} role="dialog" aria-labelledby aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Expense</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form className="forms-sample">
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Patient Name</label>
                            <input type="text" className="form-control" placeholder="Enter Patient Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Select Doctor</label>
                            <div>
                            <select className="form-control" id="select-new2">
                                <option>Doctor1</option>
                                <option>Doctor2</option>
                                <option>Doctor3</option>
                                <option>Doctor4</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleTextarea1">Select Date</label>
                            <input type="text" className="form-control" id="datepicker1" placeholder="Select Date" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputName1">Time Slot</label>
                            <div>
                            <select className="form-control" id="select-new3">
                                <option>9:00 AM - 9:30 AM</option>
                                <option>9:30 AM - 10:00 AM</option>
                                <option>10:00 AM - 10:30 AM</option>
                                <option>10:30 AM - 11:00 AM</option>
                                <option>11:00 AM - 11:30 AM</option>
                                <option>11:30 AM - 12:00 AM</option>
                            </select>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-gradient-primary mr-2">Submit</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
        
         </div>
      );
}



export default Commission;