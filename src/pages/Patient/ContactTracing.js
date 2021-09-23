import React, { useState } from "react";
import "./style.css";

function ContactTracing() {
  const [check, setChecked] = useState(false);
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

                <div>
                  <div className="d-inline-block">
                    <input
                      onClick={() => setChecked(true)}
                      type="radio"
                      name="covid"
                      id="yes"
                    />
                    <label
                      htmlFor="yes"
                      className="radiolabel"
                      onClick={() => setChecked(true)}
                    >
                      Yes
                    </label>
                  </div>
                  <div className="d-inline-block radiodiv">
                    <input type="radio" name="covid" id="no" />
                    <label htmlFor="no" className="radiolabel">
                      No
                    </label>
                  </div>
                </div>
              </div>

              {check && (
                <>
                  <div className="row">
                    <div className="form-group col-md-6 col-12">
                      <label htmlFor="exampleInputName1">Fever :</label>
                      <div>
                        <div className="d-inline-block">
                          <input type="radio" name="fever" id="yes1" />
                          <label htmlFor="yes1" className="radiolabel">
                            Yes
                          </label>
                        </div>
                        <div className="d-inline-block radiodiv">
                          <input type="radio" name="fever" id="no1" />
                          <label htmlFor="no1" className="radiolabel">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-6 col-12">
                      <label htmlFor="exampleInputName1">Cough :</label>
                      <div>
                        <div className="d-inline-block">
                          <input type="radio" name="cough" id="yes2" />
                          <label htmlFor="yes2" className="radiolabel">
                            Yes
                          </label>
                        </div>
                        <div className="d-inline-block radiodiv">
                          <input type="radio" name="cough" id="no2" />
                          <label htmlFor="no2" className="radiolabel">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6 col-12">
                      <label htmlFor="exampleInputName1">
                        Shortness of breadth
                      </label>
                      <div>
                        <div className="d-inline-block">
                          <input type="radio" name="breadth" id="yes3" />
                          <label htmlFor="yes3" className="radiolabel">
                            Yes
                          </label>
                        </div>
                        <div className="d-inline-block radiodiv">
                          <input type="radio" name="breadth" id="no3" />
                          <label htmlFor="no3" className="radiolabel">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-6 col-12">
                      <label htmlFor="exampleInputName1">Diarhea</label>
                      <div>
                        <div className="d-inline-block">
                          <input type="radio" name="diarrhea" id="yes4" />
                          <label htmlFor="yes4" className="radiolabel">
                            Yes
                          </label>
                        </div>
                        <div className="d-inline-block radiodiv">
                          <input type="radio" name="diarrhea" id="no4" />
                          <label htmlFor="no4" className="radiolabel">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6 col-12">
                      <label htmlFor="exampleInputName1">Sour throat</label>
                      <div>
                        <div className="d-inline-block">
                          <input type="radio" name="sour" id="yes5" />
                          <label htmlFor="yes5" className="radiolabel">
                            Yes
                          </label>
                        </div>
                        <div className="d-inline-block radiodiv">
                          <input type="radio" name="sour" id="no5" />
                          <label htmlFor="no5" className="radiolabel">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group col-md-6 col-12">
                      <label htmlFor="exampleInputName1">Fatigue</label>
                      <div>
                        <div className="d-inline-block">
                          <input type="radio" name="fatigue" id="yes6" />
                          <label htmlFor="yes6" className="radiolabel">
                            Yes
                          </label>
                        </div>
                        <div className="d-inline-block radiodiv">
                          <input type="radio" name="fatigue" id="no6" />
                          <label htmlFor="no6" className="radiolabel">
                            No
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Have you been exposed to anyone with COVID 19 or someone who
                  has symptoms for the last 14 days?
                </label>
                <div>
                  <div className="d-inline-block">
                    <input type="radio" name="exposed" id="yes7" />
                    <label htmlFor="yes7" className="radiolabel">
                      Yes
                    </label>
                  </div>
                  <div className="d-inline-block radiodiv">
                    <input type="radio" name="exposed" id="no7" />
                    <label htmlFor="no7" className="radiolabel">
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputName1">
                  Have you been out of the country for the last 6 months?
                </label>
                <div>
                  <div className="d-inline-block">
                    <input type="radio" name="months" id="yes8" />
                    <label htmlFor="yes8" className="radiolabel">
                      Yes
                    </label>
                  </div>
                  <div className="d-inline-block radiodiv">
                    <input type="radio" name="months" id="no8" />
                    <label htmlFor="no8" className="radiolabel">
                      No
                    </label>
                  </div>
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
