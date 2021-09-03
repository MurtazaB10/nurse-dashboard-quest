import React,{useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
function NurseNotes() {
  const {
    register,
    handleSubmit,control,
    formState: { errors },
  } = useForm();
  const [addNote, setAddNote] = useState([]);
  const onSubmit = (data) => {
    setAddNote(data);
    console.log(data);
  }
  return (
    <div class="tab-pane fade" id="nursenote" role="tabpanel">
      <div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="panel ">
              <div className="row">
                <div className="col-md-10 m-auto">
                  <div className="p-5">
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn-raised btn btn-danger btn-floating "
                        data-toggle="modal"
                        data-target="#addnursenoteModal"
                      >
                        <i className="icon mdi mdi-plus" aria-hidden="true" />
                      </button>
                    </div>
                    <ul className="timeline mt-5">
                      <li>
                        <div className="timeline-badge info">
                          <i className="mdi mdi-check" />
                        </div>
                        <div className="timeline-panel">
                          <p className="time-box">
                            <small className="text-muted">
                              <i className="mdi mdi-av-timer" /> 11 hours ago
                            </small>
                          </p>
                          <div className="timeline-body">
                            <p className="mb-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit,sed do eiusmod tempor incididunt ut labore et
                              dolore
                            </p>
                          </div>
                          <p className="notes-edit">
                            <a href>
                              Edit <i className="mdi mdi-pencil" />
                            </a>{" "}
                            |{" "}
                            <a href>
                              Delete <i className="mdi mdi-delete" />
                            </a>{" "}
                            &nbsp;{" "}
                            <span>
                              Noted By{" "}
                              <i className="mdi mdi-file-document-box" />: Dr
                              John Doe
                            </span>
                          </p>
                        </div>
                      </li>
                      <li className="timeline-inverted">
                        <div className="timeline-badge info">
                          <i className="mdi mdi-check" />
                        </div>
                        <div className="timeline-panel">
                          <p className="time-box">
                            <small className="text-muted">
                              <i className="mdi mdi-av-timer" /> 11 hours ago
                            </small>
                          </p>
                          <div className="timeline-body">
                            <p className="mb-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit,sed do eiusmod tempor incididunt ut labore et
                              dolore
                            </p>
                          </div>
                          <p className="notes-edit">
                            <a href>
                              Edit <i className="mdi mdi-pencil" />
                            </a>{" "}
                            |{" "}
                            <a href>
                              Delete <i className="mdi mdi-delete" />
                            </a>{" "}
                            &nbsp;{" "}
                            <span>
                              Noted By{" "}
                              <i className="mdi mdi-file-document-box" />: Dr
                              John Doe
                            </span>
                          </p>
                        </div>
                      </li>
                    </ul> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="addnursenoteModal"
        role="dialog"
        aria-labelledby=""
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Note
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
            <pre>{JSON.stringify(addNote, undefined, 2)}</pre>
            <div className="modal-body">
              <form className="forms-sample" onSubmit={handleSubmit(onSubmit)}>
              <p className="formErrors">{errors.patientName?.message}</p>
                <div className="form-group">
                  <label htmlFor="exampleInputName1">
                    Name<sup>*</sup>
                  </label>
                  <input
                      type="text"
                      name="patientName"
                      className="form-control"
                      placeholder="Enter Patient Name"
                      {...register("patientName", {
                        required: "patient Name is required",
                        pattern: {
                          value: /^[A-Za-z]+$/i,
                          message: "Alphabets are only allowed",
                        },
                      })}
                    />
                </div>
                <div className="form-group">
                <p className="formErrors">{errors.addNote?.message}</p>
                  <label htmlFor="exampleTextarea1">
                    Add Note<sup>*</sup>
                  </label>
                  <textarea
                          type="text"
                          name="addNote"
                          rows={4}
                          className="form-control"
                          placeholder="Enter Address"
                          {...register("addNote", {
                            required: "Note is required",
                          })}
                        />
                </div>

                <button type="submit" className="btn btn-gradient-primary mr-2">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NurseNotes;
