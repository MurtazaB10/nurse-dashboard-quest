import React, { useEffect, useState } from "react";
import "./style.css";

function Card({ appointment }) {
  // console.log(appointment);
  const [mt, setMt] = useState("0%");

  const margin = () => {
    const st = appointment.start_time;
    let hr = parseInt(st.substring(0, 2));
    if (hr <= 7) hr = 3 + hr;
    else hr = hr - 9;
    hr = hr * 60 + parseInt(st.substring(3, st.length));
    hr = 0.205 * hr;
    setMt(`${hr}%`);
  };

  useEffect(() => margin());

  return (
    <tr>
      <td style={{ "--mt": mt }} className="clearfix d-block" rowSpan={3}>
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
            {appointment.start_time}
            {appointment.end_time}
          </span>
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
