import React, { useState, state } from "react";
import { useSelector } from "react-redux";

function Documents() {
  const [noOfElement, setNoOfElement] = useState(4);
  const documents = useSelector(
    (state) => state.patientInfo.patient.patientDocument
  );
  const slice = documents && documents.slice(0, noOfElement);
  const [showBtn, setShow] = useState(true);
  const loadMore = () => {
    setNoOfElement(noOfElement + noOfElement);
    const noOfElementOnPage = noOfElement + noOfElement;
    if (Object.keys(documents).length <= noOfElementOnPage) {
      setShow(false);
    }
  };
  return (
    <div class="tab-pane fade" id="patienttab3" role="tabpanel">
      <div className="row mt-4">
        <div className="col-xxl-12 col-lg-12">
          <div className="panel" id="projects-status">
            <div className="panel-heading appointment-schedule">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h3 className="panel-title">Documents</h3>
                </div>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <td>S.No</td>
                    <td>Date</td>
                    <td>Title</td>
                    <td>Descriprion</td>
                    <td>Uploaded Document</td>
                    <td className="text-left">Action</td>
                  </tr>
                </thead>
                <tbody>
                  {slice &&
                    slice.map((document, idx) => {
                      return (
                        <tr key={idx}>
                          <td>{idx + 1}</td>
                          <td>{document.date}</td>
                          <td>{document.title}</td>
                          <td>{document.description}</td>
                          <td>
                            <div className="img-vid-box">
                              <img src={document.document} alt="artist-img" />
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
                <button
                  className="btn"
                  onClick={() => loadMore()}
                  style={{ display: showBtn ? "block" : "none" }}
                >
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

export default Documents;
