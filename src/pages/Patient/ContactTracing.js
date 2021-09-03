import React from "react";

function ContactTracing() {
  return (
    <div
      className="modal fade"
      id="addproModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Contact Tracing
            </h5>
            <button
              type="button"
              className="close"
              z
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="forms-sample">
              <div className="form-group">
                <label>
                  Have you suffering from any of COVID 19 Symptoms?{" "}
                </label>
                <br></br>
                <label htmlFor="exampleInputName1">
                  Patient Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Patient Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Fever</label>
                <div>
                  <select className="form-control" id="select-new2" required>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Cough</label>
                <div>
                  <select className="form-control" id="select-new10" required>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Shortness of breadth</label>
                <div>
                  <select className="form-control" id="select-new4" required>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Diarhea</label>
                <div>
                  <select className="form-control" id="select-new5" required>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Sour throat</label>
                <div>
                  <select className="form-control" id="select-new6" required>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName1">Fatigue</label>
                <div>
                  <select className="form-control" id="select-new7" required>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Have you been exposed to anyone with COVID 19 or someone who
                  has symptoms for the last 14 days?
                </label>
                <div>
                  <select className="form-control" id="select-new8" required>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Have you been out of the country for the last 6 months?
                </label>
                <div>
                  <select className="form-control" id="select-new9" required>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn btn-gradient-primary mr-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTracing;
