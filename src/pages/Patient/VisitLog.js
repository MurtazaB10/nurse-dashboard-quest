import React from "react";

function VisitLog() {
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
                  <tr>
                    <td>14 Nov 2019</td>
                    <td>XYZ</td>
                    <td>Routin Checkup</td>
                    <td>4:00 PM</td>
                    <td>5:00 PM</td>
                    <td>
                      <div className="img-vid-box">
                        <img src="assets/images/other/sign.png" alt="sign" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>14 Nov 2019</td>
                    <td>XYZ</td>
                    <td>Routin Checkup</td>
                    <td>4:00 PM</td>
                    <td>5:00 PM</td>
                    <td>
                      <div className="img-vid-box">
                        <img src="assets/images/other/sign.png" alt="sign" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>14 Nov 2019</td>
                    <td>XYZ</td>
                    <td>Routin Checkup</td>
                    <td>4:00 PM</td>
                    <td>5:00 PM</td>
                    <td>
                      <div className="img-vid-box">
                        <img src="assets/images/other/sign.png" alt="sign" />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>14 Nov 2019</td>
                    <td>XYZ</td>
                    <td>Routin Checkup</td>
                    <td>4:00 PM</td>
                    <td>5:00 PM</td>
                    <td>
                      <div className="img-vid-box">
                        <img src="assets/images/other/sign.png" alt="sign" />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitLog;
