import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Appointment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addAppointmentInfo, setAddAppointmentInfo] = useState([]);
  const onSubmit = (data) => {
    setAddAppointmentInfo(data);
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
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
                        <h3 className="panel-title pt-0 pb-0">Appointments</h3>
                      </div>
                    </div>
                    <hr />
                    <button
                      type="button"
                      className="btn-raised btn btn-danger btn-floating "
                      data-toggle="modal"
                      data-target="#addappointmentModal"
                    >
                      <i className="icon mdi mdi-plus" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="table-responsive p-3">
                    <table className="table table-striped appointment-table">
                      <thead>
                        <tr>
                          <th width="10%">Time</th>
                          <th width="18%">
                            <span className="dr-name">DR Joe</span>
                          </th>
                          <th width="18%">
                            <span className="dr-name">DR John</span>
                          </th>
                          <th width="18%">
                            <span className="dr-name">DR Flash</span>
                          </th>
                          <th width="18%">
                            <span className="dr-name">DR Kwak</span>
                          </th>
                          <th width="18%">
                            <span className="dr-name">DR Doe</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width="10%">
                            <table className="table" style={{ width: "100%" }}>
                              <tbody>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 9:00 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 9:10 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 9:20 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 9:30 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 9:40 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 9:50 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 10:00 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 10:10 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 10:20 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 10:30 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 10:40 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 10:50 AM
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <span className="time">
                                      <i className="mdi mdi-timer" /> 11:00 AM
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td width="18%">
                            <table className="table w-100">
                              <tbody>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="clearfix d-block" rowSpan={3}>
                                    <div className="appointment-box">
                                      <p className="notes-edit text-right mb-2">
                                        <a href>
                                          Edit <i className="mdi mdi-pencil" />
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          Delete{" "}
                                          <i className="mdi mdi-delete" />
                                        </a>{" "}
                                        &nbsp; <span />
                                      </p>
                                      <span className="patient-name">
                                        Patient Name
                                      </span>
                                      <p className="mb-0">
                                        <a href>
                                          <span className="badge badge-primary">
                                            Arrive
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-danger">
                                            Cancel
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-info">
                                            OTW
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          {" "}
                                          <span className="badge badge-warning">
                                            Waiting
                                          </span>
                                        </a>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="clearfix d-block" rowSpan={3}>
                                    <div className="appointment-box">
                                      <p className="notes-edit text-right mb-2">
                                        <a href>
                                          Edit <i className="mdi mdi-pencil" />
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          Delete{" "}
                                          <i className="mdi mdi-delete" />
                                        </a>{" "}
                                        &nbsp; <span />
                                      </p>
                                      <span className="patient-name">
                                        Patient Name
                                      </span>
                                      <p className="mb-0">
                                        <a href>
                                          <span className="badge badge-primary">
                                            Arrive
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-danger">
                                            Cancel
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-info">
                                            OTW
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          {" "}
                                          <span className="badge badge-warning">
                                            Waiting
                                          </span>
                                        </a>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td width="18%">
                            <table className="table w-100">
                              <tbody>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="clearfix d-block" rowSpan={3}>
                                    <div className="appointment-box">
                                      <p className="notes-edit text-right mb-2">
                                        <a href>
                                          Edit <i className="mdi mdi-pencil" />
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          Delete{" "}
                                          <i className="mdi mdi-delete" />
                                        </a>{" "}
                                        &nbsp; <span />
                                      </p>
                                      <span className="patient-name">
                                        Patient Name
                                      </span>
                                      <p className="mb-0">
                                        <a href>
                                          <span className="badge badge-primary">
                                            Arrive
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-danger">
                                            Cancel
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-info">
                                            OTW
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          {" "}
                                          <span className="badge badge-warning">
                                            Waiting
                                          </span>
                                        </a>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="clearfix d-block" rowSpan={3}>
                                    <div className="appointment-box">
                                      <p className="notes-edit text-right mb-2">
                                        <a href>
                                          Edit <i className="mdi mdi-pencil" />
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          Delete{" "}
                                          <i className="mdi mdi-delete" />
                                        </a>{" "}
                                        &nbsp; <span />
                                      </p>
                                      <span className="patient-name">
                                        Patient Name
                                      </span>
                                      <p className="mb-0">
                                        <a href>
                                          <span className="badge badge-primary">
                                            Arrive
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-danger">
                                            Cancel
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-info">
                                            OTW
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          {" "}
                                          <span className="badge badge-warning">
                                            Waiting
                                          </span>
                                        </a>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td width="18%">
                            <table className="table w-100">
                              <tbody>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="clearfix d-block" rowSpan={3}>
                                    <div className="appointment-box">
                                      <p className="notes-edit text-right mb-2">
                                        <a href>
                                          Edit <i className="mdi mdi-pencil" />
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          Delete{" "}
                                          <i className="mdi mdi-delete" />
                                        </a>{" "}
                                        &nbsp; <span />
                                      </p>
                                      <span className="patient-name">
                                        Patient Name
                                      </span>
                                      <p className="mb-0">
                                        <a href>
                                          <span className="badge badge-primary">
                                            Arrive
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-danger">
                                            Cancel
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-info">
                                            OTW
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          {" "}
                                          <span className="badge badge-warning">
                                            Waiting
                                          </span>
                                        </a>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="clearfix d-block" rowSpan={3}>
                                    <div className="appointment-box">
                                      <p className="notes-edit text-right mb-2">
                                        <a href>
                                          Edit <i className="mdi mdi-pencil" />
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          Delete{" "}
                                          <i className="mdi mdi-delete" />
                                        </a>{" "}
                                        &nbsp; <span />
                                      </p>
                                      <span className="patient-name">
                                        Patient Name
                                      </span>
                                      <p className="mb-0">
                                        <a href>
                                          <span className="badge badge-primary">
                                            Arrive
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-danger">
                                            Cancel
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-info">
                                            OTW
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          {" "}
                                          <span className="badge badge-warning">
                                            Waiting
                                          </span>
                                        </a>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td width="18%">
                            <table className="table w-100">
                              <tbody>
                                <tr>
                                  <td className="clearfix d-block" rowSpan={3}>
                                    <div className="appointment-box">
                                      <p className="notes-edit text-right mb-2">
                                        <a href>
                                          Edit <i className="mdi mdi-pencil" />
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          Delete{" "}
                                          <i className="mdi mdi-delete" />
                                        </a>{" "}
                                        &nbsp; <span />
                                      </p>
                                      <span className="patient-name">
                                        Patient Name
                                      </span>
                                      <p className="mb-0">
                                        <a href>
                                          <span className="badge badge-primary">
                                            Arrive
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-danger">
                                            Cancel
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-info">
                                            OTW
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          {" "}
                                          <span className="badge badge-warning">
                                            Waiting
                                          </span>
                                        </a>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="clearfix d-block" rowSpan={3}>
                                    <div className="appointment-box">
                                      <p className="notes-edit text-right mb-2">
                                        <a href>
                                          Edit <i className="mdi mdi-pencil" />
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          Delete{" "}
                                          <i className="mdi mdi-delete" />
                                        </a>{" "}
                                        &nbsp; <span />
                                      </p>
                                      <span className="patient-name">
                                        Patient Name
                                      </span>
                                      <p className="mb-0">
                                        <a href>
                                          <span className="badge badge-primary">
                                            Arrive
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-danger">
                                            Cancel
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-info">
                                            OTW
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          {" "}
                                          <span className="badge badge-warning">
                                            Waiting
                                          </span>
                                        </a>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td width="18%">
                            <table className="table w-100">
                              <tbody>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="clearfix d-block" rowSpan={3}>
                                    <div className="appointment-box">
                                      <p className="notes-edit text-right mb-2">
                                        <a href>
                                          Edit <i className="mdi mdi-pencil" />
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          Delete{" "}
                                          <i className="mdi mdi-delete" />
                                        </a>{" "}
                                        &nbsp; <span />
                                      </p>
                                      <span className="patient-name">
                                        Patient Name
                                      </span>
                                      <p className="mb-0">
                                        <a href>
                                          <span className="badge badge-primary">
                                            Arrive
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-danger">
                                            Cancel
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-info">
                                            OTW
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          {" "}
                                          <span className="badge badge-warning">
                                            Waiting
                                          </span>
                                        </a>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="clearfix d-block" rowSpan={3}>
                                    <div className="appointment-box">
                                      <p className="notes-edit text-right mb-2">
                                        <a href>
                                          Edit <i className="mdi mdi-pencil" />
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          Delete{" "}
                                          <i className="mdi mdi-delete" />
                                        </a>{" "}
                                        &nbsp; <span />
                                      </p>
                                      <span className="patient-name">
                                        Patient Name
                                      </span>
                                      <p className="mb-0">
                                        <a href>
                                          <span className="badge badge-primary">
                                            Arrive
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-danger">
                                            Cancel
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          <span className="badge badge-info">
                                            OTW
                                          </span>
                                        </a>{" "}
                                        |{" "}
                                        <a href>
                                          {" "}
                                          <span className="badge badge-warning">
                                            Waiting
                                          </span>
                                        </a>
                                      </p>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* End Panel Projects Stats */}
              </div>
            </div>
          </div>
        </section>
        {/* Modal */}
        <div
          className="modal fade"
          id="addappointmentModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <pre>{JSON.stringify(addAppointmentInfo, undefined, 2)}</pre>
                <br></br>
                <h5 className="modal-title" id="exampleModalLabel1">
                  Add Appointment
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
                <form
                  className="forms-sample"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <p className="formErrors">{errors.patientName?.message}</p>
                  <div className="form-group">
                    <label htmlFor="exampleInputName1">
                      Patient Name
                      <sup>*</sup>
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
                  <p className="formErrors">{errors.doctor?.message}</p>

                  <div className="form-group">
                    <label htmlFor="exampleInputName4">
                      Select Doctor<sup>*</sup>
                    </label>

                    <select
                      className="form-control"
                      name="doctor"
                      id="select-new2"
                      {...register("doctor", {
                        required: "Doctor is required",
                      })}
                    >
                      <option></option>
                      <option>Doctor1</option>
                      <option>Doctor2</option>
                      <option>Doctor3</option>
                    </select>
                  </div>
                  <p className="formErrors">{errors.date?.message}</p>

                  <div className="form-group">
                    <label htmlFor="exampleTextarea1">
                      Select Date
                      <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="date"
                      className="form-control"
                      id="datepicker"
                      placeholder="Select Date"
                      {...register("date", {
                        required: "Date is required",
                      })}
                    />
                  </div>
                  <p className="formErrors">{errors.timeslot?.message}</p>

                  <div className="form-group">
                    <label htmlFor="exampleInputName4">
                      Time Slot<sup>*</sup>
                    </label>
                    <div>
                      <select
                        className="form-control"
                        name="timeslot"
                        id="select-new2"
                        {...register("timeslot", {
                          required: "timeslot is required",
                        })}
                      >
                        <option>9:00 AM - 9:30 AM</option>
                        <option>9:30 AM - 10:00 AM</option>
                        <option>10:00 AM - 10:30 AM</option>
                        <option>10:30 AM - 11:00 AM</option>
                        <option>11:00 AM - 11:30 AM</option>
                        <option>11:30 AM - 12:00 AM</option>
                      </select>
                    </div>
                  </div>
                  <br />
                  <button
                    type="submit"
                    className="btn btn-gradient-primary mr-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
