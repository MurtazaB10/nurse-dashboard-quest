import React from "react";

function Card({appointment}) {
  console.log(appointment);
  return (
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
          <span className="patient-name">{appointment.patient_id.name}</span>
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
  );
}

export default Card;
