import React from "react";

function DashboardAppointmentTable() {
  return (
    <div className="table-responsive p-3">
      <table className="table table-striped appointment-table">
        <thead>
          <tr>
            <th width="10%">Time</th>
            <th width="90%">
              <span className="dr-name">RAjesh</span>
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
                        <span className="patient-name">Patient Name</span>
                        <p className="mb-0">
                          <a href>
                            <span className="badge badge-primary">Arrive</span>
                          </a>{" "}
                          |{" "}
                          <a href>
                            <span className="badge badge-danger">Cancel</span>
                          </a>{" "}
                          |{" "}
                          <a href>
                            <span className="badge badge-info">OTW</span>
                          </a>{" "}
                          |{" "}
                          <a href>
                            {" "}
                            <span className="badge badge-warning">Waiting</span>
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
                        <span className="patient-name">Patient Name</span>
                        <p className="mb-0">
                          <a href>
                            <span className="badge badge-primary">Arrive</span>
                          </a>{" "}
                          |{" "}
                          <a href>
                            <span className="badge badge-danger">Cancel</span>
                          </a>{" "}
                          |{" "}
                          <a href>
                            <span className="badge badge-info">OTW</span>
                          </a>{" "}
                          |{" "}
                          <a href>
                            {" "}
                            <span className="badge badge-warning">Waiting</span>
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
  );
}

export default DashboardAppointmentTable;
