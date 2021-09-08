import React,{useState} from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector } from "react-redux";
function DoctorsNotes(props) {
  const {id}=props;
  const {
    register,
    handleSubmit,control,
    formState: { errors },
  } = useForm();
  const [addNote, setAddNote] = useState([]);
  const doctorsList = useSelector((state) => state.doctorsList.doctors);
  console.log(doctorsList);
  const onSubmit = async(data) => {
    data={...data,patient_id:id,date:new Date()}
    const result = await axios.post("/nurse/addPatientDocNote",data);
    setAddNote(data);
  }
  return (
    <div class="tab-pane fade" id="patienttab2" role="tabpanel">
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
                        data-target="#addnoteModal"
                      >
                        <i className="icon mdi mdi-plus" aria-hidden="true" />
                      </button>
                    </div>
                    <h3 className="text-center mb-3 mt-3">May 2021</h3>
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
                    <h3 className="text-center mb-3 mt-3">April 2021</h3>
                    <ul className="timeline mt-5">
                      <li>
                        <div className="timeline-badge info">
                          <i className="mdi mdi-check" />
                        </div>
                        <div className="timeline-panel">
                          <p className="time-box">
                            <small className="text-muted">
                              <i className="mdi mdi-av-timer" /> 03
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
                              <i className="mdi mdi-av-timer" /> 04
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
        id="addnoteModal"
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
              {/* <p className="formErrors">{errors.patientName?.message}</p>
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
                </div> */}
                <div className="form-group">
                <p className="formErrors">{errors.note?.message}</p>
                  <label htmlFor="exampleTextarea1">
                    Add Note<sup>*</sup>
                  </label>
                  <textarea
                          type="text"
                          name="note"
                          rows={4}
                          className="form-control"
                          placeholder="Enter Address"
                          {...register("note", {
                            required: "Note is required",
                          })}
                        />
                </div>
                <p className="formErrors">{errors.doctor_id?.message}</p>
                      <div className="form-group">
                        <label htmlFor="exampleInputName1">
                          Select doctor<sup>*</sup>
                        </label>
                        <div>
                          <select
                            id="select-new"
                            className="form-control"
                            name="doctor_id"
                            {...register("doctor_id", {
                              required: "Doctor is required",
                            })}
                          >
                            
                            {doctorsList &&
                              doctorsList.map((doctor) => {
                                return (
                                  <option value={doctor._id}>
                                    {doctor.name}
                                  </option>
                                );
                              })}
                          </select>
                          {/* <select
                            className="form-control"
                            name="doctor"
                            id="select-new2"
                            {...register("doctor", {
                              required: "Doctor is required",
                            })}
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                          </select> */}
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
    </div>
  );
}

export default DoctorsNotes;
