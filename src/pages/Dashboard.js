import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <section className="dashboard">
        <div className=" container-fluid p-0">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            <div className="col-xl-3 col-md-6 pl-3 pr-3">
              {/* Widget Linearea One*/}
              <div className="card card-shadow" id="widgetLineareaOne">
                <div className="card-block p-20 pt-10">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="grey-800 py-10">
                      <i className="icon mdi mdi-account grey-600 font-size-24 vertical-align-bottom " />
                      Patient
                    </div>
                    <span className="grey-700 font-size-30">1,253</span>
                  </div>
                  <div className="mb-20 grey-500">
                    <i className="icon md-long-arrow-up green-500 font-size-16" />{" "}
                    15% From this yesterday
                  </div>
                  <div className="ct-chart h-50"></div>
                </div>
              </div>
              {/* End Widget Linearea One */}
            </div>
            <div className="col-xl-3 col-md-6 pl-3 pr-3">
              {/* Widget Linearea Two */}
              <div className="card card-shadow" id="widgetLineareaTwo">
                <div className="card-block p-20 pt-10">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="grey-800  py-10">
                      <i className="icon mdi mdi-flash grey-600 font-size-24 vertical-align-bottom " />
                      Appointment
                    </div>
                    <span className=" grey-700 font-size-30">2,425</span>
                  </div>
                  <div className="mb-20 grey-500">
                    <i className="icon md-long-arrow-up green-500 font-size-16" />{" "}
                    34.2% From this week
                  </div>
                  <div className="ct-chart h-50"></div>
                </div>
              </div>
              {/* End Widget Linearea Two */}
            </div>
            <div className="col-xl-3 col-md-6 pl-3 pr-3">
              {/* Widget Linearea Three */}
              <div className="card card-shadow" id="widgetLineareaThree">
                <div className="card-block p-20 pt-10">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="grey-800 py-10">
                      <i className="icon mdi mdi-chart-bar grey-600 font-size-24 vertical-align-bottom" />
                      Sales
                    </div>
                    <span className="grey-700 font-size-30">1,864</span>
                  </div>
                  <div className="mb-20 grey-500">
                    <i className="icon md-long-arrow-down red-500 font-size-16" />{" "}
                    15% From this yesterday
                  </div>
                  <div className="ct-chart h-50"></div>
                </div>
              </div>
              {/* End Widget Linearea Three */}
            </div>
            <div className="col-xl-3 col-md-6 pl-3 pr-3">
              {/* Widget Linearea Four */}
              <div className="card card-shadow" id="widgetLineareaFour">
                <div className="card-block p-20 pt-10">
                  <div className="d-flex align-items-center justify-content-between w-100">
                    <div className="grey-800  py-10">
                      <i className="icon mdi mdi-view-list grey-600 font-size-24 vertical-align-bottom " />
                      Commission
                    </div>
                    <span className=" grey-700 font-size-30">845</span>
                  </div>
                  <div className="mb-20 grey-500">
                    <i className="icon md-long-arrow-up green-500 font-size-16" />{" "}
                    18.4% From this yesterday
                  </div>
                  <div className="ct-chart h-50"></div>
                </div>
              </div>
              {/* End Widget Linearea Four */}
            </div>
            <div className="col-xl-6 col-lg-6">
              {/* Widget User list */}
              <div className="card" id="widgetUserList">
                <div className="card-header cover overlay">
                  <img
                    className="cover-image h-200"
                    src="assets/images/other/dashboard-header.jpg"
                    alt="..."
                  />
                  <div className="overlay-panel vertical-align overlay-background">
                    <div className="vertical-align-middle">
                      <a
                        className="avatar avatar-100 float-left mr-20"
                        href="javascript:void(0)"
                      >
                        <img src="assets/images/other/5.jpg" alt="" />
                      </a>
                      <div className="float-left user-info-box">
                        <div className="font-size-20">Robin Ahrens</div>
                        <p className="mb-0 text-nowrap">
                          <span className="text-break">
                            <a href className="__cf_email__">
                              91546558674
                            </a>
                          </span>
                        </p>
                        <div className="text-nowrap font-size-18">
                          <a href="#" className="white mr-10">
                            <i className="icon mdi mdi-pencil-box" />
                          </a>
                          <a href="#" className="white mr-10">
                            <i className="icon mdi mdi-eye" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-block py-0">
                  <ul className="list-group list-group-full list-group-dividered mb-0">
                    <li className="list-group-item">
                      <div className="media align-items-center">
                        <div className="pr-20">
                          <a
                            className="avatar avatar-lg"
                            href="javascript:void(0)"
                          >
                            <img
                              className="img-responsive"
                              src="assets/images/other/5.jpg"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0 mb-0">Herman Beck</h5>
                          <small>91546558674</small>
                          <div className="edit-icon">
                            <a href="#" className="white mr-10">
                              <i className="icon mdi mdi-pencil" />
                            </a>
                            <a href="#" className="white mr-10">
                              <i className="icon mdi mdi-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media align-items-center">
                        <div className="pr-20">
                          <a
                            className="avatar avatar-lg"
                            href="javascript:void(0)"
                          >
                            <img
                              className="img-responsive"
                              src="assets/images/other/5.jpg"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0 mb-0">Mary Adams</h5>
                          <small>91546558674</small>
                          <div className="edit-icon">
                            <a href="#" className="white mr-10">
                              <i className="icon mdi mdi-pencil" />
                            </a>
                            <a href="#" className="white mr-10">
                              <i className="icon mdi mdi-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media align-items-center">
                        <div className="pr-20">
                          <a
                            className="avatar avatar-lg"
                            href="javascript:void(0)"
                          >
                            <img
                              className="img-responsive"
                              src="assets/images/other/5.jpg"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0 mb-0">Caleb Richards</h5>
                          <small>91546558674</small>
                          <div className="edit-icon">
                            <a href="#" className="white mr-10">
                              <i className="icon mdi mdi-pencil" />
                            </a>
                            <a href="#" className="white mr-10">
                              <i className="icon mdi mdi-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media align-items-center">
                        <div className="pr-20">
                          <a
                            className="avatar avatar-lg"
                            href="javascript:void(0)"
                          >
                            <img
                              className="img-responsive"
                              src="assets/images/other/5.jpg"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0 mb-0">Caleb Richards</h5>
                          <small>91546558674</small>
                          <div className="edit-icon">
                            <a href="#" className="white mr-10">
                              <i className="icon mdi mdi-pencil" />
                            </a>
                            <a href="#" className="white mr-10">
                              <i className="icon mdi mdi-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="media align-items-center">
                        <div className="pr-20">
                          <a
                            className="avatar avatar-lg"
                            href="javascript:void(0)"
                          >
                            <img
                              className="img-responsive"
                              src="assets/images/other/5.jpg"
                              alt="..."
                            />
                          </a>
                        </div>
                        <div className="media-body">
                          <h5 className="mt-0 mb-0">Caleb Richards</h5>
                          <small>91546558674</small>
                          <div className="edit-icon">
                            <a href="#" className="white mr-10">
                              <i className="icon mdi mdi-pencil" />
                            </a>
                            <a href="#" className="white mr-10">
                              <i className="icon mdi mdi-eye" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn-raised btn btn-danger btn-floating"
                  >
                    <i className="icon mdi mdi-plus" aria-hidden="true" />
                  </button>
                </div>
              </div>
              {/* End Widget User list */}
            </div>
            <div className="col-xxl-6 col-lg-6">
              {/* Panel Projects Status */}
              <div className="panel" id="projects-status">
                <div className="panel-heading appointment-schedule">
                  <div className="row align-items-center">
                    <div className="col-md-8">
                      <h3 className="panel-title">
                        Appointment Schedule
                        <span className="badge badge-pill badge-info">5</span>
                      </h3>
                    </div>
                    <div className="col-md-4 ml-auto">
                      <div className="form-group doctor-appointment-filter mb-0 mr-4">
                        <select id="select-new" className="form-control">
                          <option>All Doctors</option>
                          <option>Doctor1</option>
                          <option>Doctor2</option>
                          <option>Doctor3</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-raised btn btn-danger btn-floating"
                  >
                    <i className="icon mdi mdi-plus" aria-hidden="true" />
                  </button>
                </div>
                <hr />
                <div className="table-responsive p-3">
                  <table className="table table-striped appointment-table">
                    <thead>
                      <tr>
                        <th width="10%">Time</th>
                        <th width="90%">
                          <span className="dr-name">DR Joe</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td width="10%">
                          <table className="table" style={{ width: "100%" }}>
                            <tbody>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:00 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:10 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:20 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:30 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:40 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 9:50 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:00 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:10 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:20 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:30 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:40 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 10:50 AM
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <span className="time">
                                    <i className="mdi mdi-timer" /> 11:00 AM
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                        <td width="90%">
                          <table className="table w-100">
                            <tbody>
                              <tr>
                                <td></td>
                              </tr>
                              <tr>
                                <td className="clearfix d-block" rowSpan={3}>
                                  <div className="appointment-box">
                                    <p className="notes-edit text-right mb-2">
                                      <a href>
                                        Edit <i className="mdi mdi-pencil" />
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        Delete <i className="mdi mdi-delete" />
                                      </a>{" "}
                                      &nbsp; <span />
                                    </p>
                                    <span className="patient-name">
                                      Patient Name
                                    </span>
                                    <p className="mb-0">
                                      <a href>
                                        <span className="badge badge-primary">
                                          Arrive
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        <span className="badge badge-danger">
                                          Cancel
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        <span className="badge badge-info">
                                          OTW
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        {" "}
                                        <span className="badge badge-warning">
                                          Waiting
                                        </span>
                                      </a>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td></td>
                              </tr>
                              <tr>
                                <td></td>
                              </tr>
                              <tr>
                                <td className="clearfix d-block" rowSpan={3}>
                                  <div className="appointment-box">
                                    <p className="notes-edit text-right mb-2">
                                      <a href>
                                        Edit <i className="mdi mdi-pencil" />
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        Delete <i className="mdi mdi-delete" />
                                      </a>{" "}
                                      &nbsp; <span />
                                    </p>
                                    <span className="patient-name">
                                      Patient Name
                                    </span>
                                    <p className="mb-0">
                                      <a href>
                                        <span className="badge badge-primary">
                                          Arrive
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        <span className="badge badge-danger">
                                          Cancel
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        <span className="badge badge-info">
                                          OTW
                                        </span>
                                      </a>{" "}
                                      |{" "}
                                      <a href>
                                        {" "}
                                        <span className="badge badge-warning">
                                          Waiting
                                        </span>
                                      </a>
                                    </p>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
    </div>
  );
};

export default Dashboard;
