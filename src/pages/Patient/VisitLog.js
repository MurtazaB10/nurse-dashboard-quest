import React, { useState } from "react";
import { useSelector } from "react-redux";

function VisitLog() {
  const [noOfElement, setNoOfElement] = useState(3);
  const visitLog = useSelector(
    (state) => state.patientInfo.patient.patientvisitLog
  );
  const slice = visitLog && visitLog.slice(0, noOfElement);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
  };
  return (
    <div class="tab-pane fade" id="patienttab4" role="tabpanel">
      <div className="row mt-4">
        <div className="col-xxl-12 col-lg-12">
          <div className="panel" id="projects-status">
            <div className="panel-heading appointment-schedule">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h3 className="panel-title">Visit Log</h3>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Visitor's Name</th>
                    <th>Reason For Visit</th>
                    <th>Time In</th>
                    <th>Time Out</th>
                    <th>Sign/Initial</th>
                  </tr>
                </thead>

                <tbody>
                  {visitLog &&
                    visitLog.map((visitLog, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{idx + 1}</td>
                          <td>{visitLog.date}</td>
                          <td>{visitLog.title}</td>
                          <td>{visitLog.description}</td>
                          <td>
                            <div className="img-vid-box">
                              <img src={visitLog.visitLog} alt="artist-img" />
                            </div>
                          </td>
                          <td>
                            <div className="edit-icon">
                              <a href="/" className="white mr-10">
                                <i className="icon mdi mdi-pencil" />
                              </a>
                              <a href="/" className="white mr-10">
                                <i className="icon mdi mdi-eye" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
                <button className="btn" onClick={() => loadMore()}>
                  Load More...
                </button>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitLog;
