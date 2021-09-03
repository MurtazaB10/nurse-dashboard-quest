import React from "react";

function Payment() {
  return (
    <div class="tab-pane fade" id="patienttab5" role="tabpanel">
      <div className="row mt-4">
        <div className="col-xxl-12 col-lg-12">
          <div className="panel" id="projects-status">
            <div className="panel-heading appointment-schedule pb-0">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h3 className="panel-title pb-0">Payment List</h3>
                </div>
              </div>
              <button
                type="button"
                className="btn-raised btn btn-danger btn-floating "
                data-toggle="modal"
                data-target="#paymentModal"
              >
                <i className="icon mdi mdi-plus" aria-hidden="true" />
              </button>
            </div>
            <hr />
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th width="15%">S.No</th>
                    <th width="15%">ID</th>
                    <th width="15%">Date</th>
                    <th width="20%">Madical Service</th>
                    <th width="20%">Medication</th>
                    <th width="15%">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>#45685</td>
                    <td>14 Nov 2019</td>
                    <td>XYZ</td>
                    <td>XYZ</td>
                    <td>$ 45.00</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>#45685</td>
                    <td>14 Nov 2019</td>
                    <td>XYZ</td>
                    <td>XYZ</td>
                    <td>$ 45.00</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>#45685</td>
                    <td>14 Nov 2019</td>
                    <td>XYZ</td>
                    <td>XYZ</td>
                    <td>$ 45.00</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>#45685</td>
                    <td>14 Nov 2019</td>
                    <td>XYZ</td>
                    <td>XYZ</td>
                    <td>$ 45.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="paymentModal"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Payment
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
                  <label htmlFor="exampleInputName1">Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="datepicker7"
                    placeholder="Date"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">Madical Service</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Madical Service"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleTextarea1">Madication</label>
                  <textarea
                    className="form-control"
                    id="exampleTextarea1"
                    rows={4}
                    placeholder="Add Note"
                    defaultValue={""}
                  />
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="form-group text-left">
                      <label htmlFor="exampleTextarea1">
                        <b>Doctor Comm.</b>
                      </label>
                      <br />
                      <label htmlFor="exampleTextarea1">
                        <b>Bawe Comm.</b>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group text-right">
                      <label htmlFor="exampleTextarea1">
                        <b>Tax:</b> - $3.00
                      </label>
                      <br />
                      <label htmlFor="exampleTextarea1">
                        <b>Discount:</b> - $1.00
                      </label>
                      <br />
                      <label htmlFor="exampleTextarea1">
                        <b>Total:</b> - $1.00
                      </label>
                    </div>
                  </div>
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
}

export default Payment;
