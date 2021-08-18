import React from "react";

const PIQ = () => {
  return (
    <div>
      <section className="dashboard">
        <div className=" container-fluid p-0">
          <div className="row" data-plugin="matchHeight" data-by-row="true">
            <div className="col-xxl-12 col-lg-12">
              {/* Panel Projects Status */}
              <div className="panel" id="projects-status">
                <div className="panel-heading appointment-schedule appointment-list pt-3">
                  <div className="row align-items-center m-0">
                    <div className="col-md-2">
                      <h3 className="panel-title pt-0 pb-0">PIQ</h3>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-10 m-auto">
                      <form className="forms-sample">
                        <div className="form-group">
                          <label htmlFor="exampleInputName1">
                            Email Address
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputName1">Message</label>
                          <textarea
                            className="form-control"
                            rows={6}
                            placeholder="Comment"
                            defaultValue={""}
                          />
                        </div>
                        <button
                          type="submit"
                          className="btn btn-gradient-primary mr-2"
                        >
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PIQ;
