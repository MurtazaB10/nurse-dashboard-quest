import React from "react";

function PatientLab() {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th width="15%">S.No</th>
            <th width="15%">Name</th>
            <th width="20%">Description</th>
            <th width="15%">Address</th>
            <th width="20%">E-mail</th>
            <th width="15%">Mobile Number</th>
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
        </tbody>
      </table>
    </div>
  );
}

export default PatientLab;
